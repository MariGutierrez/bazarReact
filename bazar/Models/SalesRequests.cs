using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Identity.Client;

namespace bazar.Models
{
    public class SalesRequests
    {
        public int id { get; set; }
        public int product_id { get; set; }
        public int quantity { get; set; }
        public DateTime sale_date { get; set; }
        public double total_price { get; set; }
        public string? image { get; set; }

    }
}
