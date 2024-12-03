using MetalMerchStore;

public class BasketDto
{
    public int Id { get; set;}

    public string CustomerId { get; set; }

     public List<BasketItemDto> Items { get; set; } 
}