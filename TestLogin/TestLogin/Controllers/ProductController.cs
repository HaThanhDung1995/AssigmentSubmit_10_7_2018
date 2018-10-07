using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestLogin.Models;

namespace TestLogin.Controllers
{
    public class ProductController : ApiController
    {
        LoginContext db = new LoginContext();

       [HttpGet]
        public IHttpActionResult List()
        {
            var data = db.Products.ToList();
            var dung = new List<SubProduct2>();

            foreach (var item in data)
            {
               
                var obj = new SubProduct2()
                {
                    Id = item.Id,
                    Name = item.Name,
                    CategoryId = item.CategoryId,
                    Price = item.Price,
                    StoreId = item.StoreId
                };
                dung.Add(obj);
            }
            return Json(new { dung });
        }
        [HttpPost]
        public IHttpActionResult AddProduct([FromBody]Product model)
        {

            if (model.Id == 0)
            {
                var item = db.Products.Add(model);
                db.SaveChanges();
                
                var obj = new SubProduct2()
                {
                    Id = item.Id,
                    Name = item.Name,
                    CategoryId = item.CategoryId,
                    Price = item.Price,
                    StoreId = item.StoreId
                };
                return Json(new { obj });
            }
            return Json(new { });
        }
        [HttpGet]
        public IHttpActionResult Remove(int Id)
        {

            var data = "";
            var model = db.Products.Find(Id);
            db.Products.Remove(model);
            db.SaveChanges();
            data = "Success";
            return Json(new { data });
        }
        [HttpGet]
        [Route("api/GetProduct")]
        public IHttpActionResult GetProduct(int Id)
        {


            var item = db.Products.Find(Id);
          var objective = new SubProduct2()
                {
                    Id = item.Id,
                    Name = item.Name,
                    CategoryId = item.CategoryId,
                    Price = item.Price,
                    StoreId = item.StoreId
                };
            return Json(new { objective });
        }
        [HttpPost]
        [Route("api/UpdateProduct")]
        public IHttpActionResult UpdateProduct([FromBody]Product model)
        {


            var data = db.Products.Find(model.Id);
            data.Name = model.Name;
            data.Price = model.Price;
            data.CategoryId = model.CategoryId;
            data.StoreId = model.StoreId;
      
            db.SaveChanges();
            
            var objective = new SubProduct2()
            {
                Id = data.Id,
                Name = data.Name,
                CategoryId = data.CategoryId,
                Price = data.Price,
                StoreId = data.StoreId
            };
            return Json(new { objective });

            ;
        }
    }
}
