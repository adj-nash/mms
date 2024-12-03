using API.Controllers;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MetalMerchStore;

public class BasketController : BaseController
{

    private readonly StoreContext _context;
    public BasketController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<BasketDto>> GetBasket()
    {
        var basket = await RetrieveBasket();
        if(basket == null) return NotFound();
        return new BasketDto
        {
            Id = basket.Id,
            CustomerId = basket.CustomerId,
            Items = basket.Items.Select(item => new BasketItemDto
            {
                Id = item.Id,
                ProductId = item.ProductId,
                Name = item.Product.Name,
                Description = item.Product.Description,
                Price = item.Product.Price,
                ImageUrl = item.Product.ImageUrl,
                Category = item.Product.Category,
                Stock = item.Product.Stock,
                Size = item.Product.Size,
                Band = item.Product.Band,
                Genre = item.Product.Genre,
                Quantity = item.Quantity   
            }).ToList()
        };
    }

    [HttpPost]
    public async Task<ActionResult<Basket>> AddBasketItem(int productId, int quantity)
    {
        var basket = await RetrieveBasket();

        if(basket == null) basket = CreateBasket();
        
        var product = await _context.Products.FindAsync(productId);

        basket.AddItem(product, quantity);

        var result = await _context.SaveChangesAsync() > 0;

        if (result) return StatusCode(201);

        return BadRequest(new ProblemDetails {Title = "Problem saving basket"});

    }

    [HttpDelete]

    public async Task<ActionResult> DeleteBasketItem(int productId, int quantity)
    {
        var basket = await RetrieveBasket();

        if(basket == null) return NotFound();

        basket.RemoveItem(productId, quantity);

        var result = await _context.SaveChangesAsync() > 0;

        if (result) return Ok();

        return BadRequest(new ProblemDetails {Title = "Problem removing item from basket"});

    }
    
    private async Task<Basket> RetrieveBasket()
    {
        return await _context.Baskets
            .Include(i => i.Items)
            .ThenInclude(p => p.Product)
            .FirstOrDefaultAsync(x => x.CustomerId == Request.Cookies["customerId"]);
    }

    private Basket CreateBasket()
    {
        var customerId = Guid.NewGuid().ToString();
        var cookieOptions = new CookieOptions{IsEssential = true, Expires = DateTime.Now.AddDays(30)};
        Response.Cookies.Append("customerId", customerId, cookieOptions);
        var basket = new Basket { CustomerId = customerId };
        _context.Baskets.Add(basket);
        return basket; 
    }



}
