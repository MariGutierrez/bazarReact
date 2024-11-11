using Microsoft.AspNetCore.Mvc;
using bazar.Models;
using Microsoft.EntityFrameworkCore;
using Azure.Core;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace bazar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BazarController : Controller
    {
        private readonly BazarStoreContext _bd;
        public BazarController(BazarStoreContext baseDatos) { _bd = baseDatos; }

        // GET items?q=:query
        [HttpGet]
        public async Task<IActionResult> GetItems([FromQuery] string q)
        {
            var items = from p in _bd.Products
                        where p.Title.Contains(q)
                        select new { idProducto = p.Id, tituloP = p.Title, descripcion = p.Description,
                        precio = p.Price, categoria = p.Category, calificacion = p.Rating,
                        descuento= p.DiscountPercentage,
                        img = p.Thumbnail};
               
            return Ok(items);
        }

        // GET items/:id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetItemById(int id)
        {
            var item = from p in _bd.Products
                       where p.Id == id
                       select new { idProducto = p.Id, tituloP = p.Title, descripcion = p.Description,
                        precio = p.Price, categoria = p.Category, calificacion = p.Rating, descuento = p.DiscountPercentage,
                       img = p.Thumbnail, marca = p.Brand};

            return Ok(item);
        }

        // POST     addSale
        [HttpPost("addSale")]
        public async Task<IActionResult> AddSale([FromBody] SalesRequests saler)
        {
            var lastSale = await _bd.Sales.OrderByDescending(s => s.Id).FirstOrDefaultAsync();
            int newId = lastSale != null ? lastSale.Id + 1 : 1;

            var sale = new Sale
            {
                Id = newId, 
                ProductId = saler.product_id,
                Quantity = saler.quantity,
                SaleDate = DateTime.Now,
                TotalPrice = (decimal?)saler.total_price,
                Image = saler.image,
            };

           _bd.Sales.Add(sale);

            var result = await _bd.SaveChangesAsync();

            return Ok(result > 0);
        }


        // GET sales
        [HttpGet("sales")]
        public async Task<IActionResult> GetSales()
        {
            var items = from s in _bd.Sales
                        join p in _bd.Products on s.ProductId equals p.Id
                        select new
                        {
                            idSale = s.Id,
                            idProduct = s.ProductId,
                            cantidad = s.Quantity,
                            fecha = s.SaleDate,
                            img = s.Image,
                            tituloP = p.Title,
                            descripcion = p.Description,
                            precio = p.Price,
                            categoria = p.Category,
                            descuento = p.DiscountPercentage
                        };

            return Ok(items);
        }
    }
}

