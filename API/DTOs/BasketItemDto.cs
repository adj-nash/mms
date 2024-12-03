namespace MetalMerchStore;

public class BasketItemDto
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public long Price { get; set; }
    public string ImageUrl { get; set; }
    public string Category  { get; set; }
    public int Stock { get; set; }
    public char Size { get; set; }
    public string Band { get; set; }
    public string Genre { get; set; }
    public int Quantity { get; set; }
}
