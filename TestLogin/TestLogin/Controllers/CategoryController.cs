using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestLogin.Models;

namespace TestLogin.Controllers
{
    
    public class CategoryController : ApiController
    {
        LoginContext db = new LoginContext();

        public IHttpActionResult GetCategory()
        {
            var data = db.Categories.ToList();
            var dung = new List<SubCategory>();
            
            foreach (var item in data)
            {
                var obj = new SubCategory()
                {
                    Id = item.Id,
                    Name = item.Name,
                    NameVn = item.NameVn
                };
                dung.Add(obj);
            }
            return Json(new {dung });
        }
        [HttpPost]
        public IHttpActionResult AddCategory([FromBody]Category model)
        {
            
            if (model.Id == 0)
            {
                var data = db.Categories.Add(model);
                db.SaveChanges();
                var objective = new SubCategory()
                {
                    Id = data.Id,
                    Name = data.Name,
                    NameVn = data.NameVn
                };
                return Json(new {objective});
            }
            return Json(new {});
        }
        [HttpGet]
        public IHttpActionResult Remove(int Id)
        {

            var data = "";
            var model = db.Categories.Find(Id);
            db.Categories.Remove(model);
            db.SaveChanges();
            data = "Success";
            return Json(new {data});
        }
        [HttpGet]
        [Route("api/GetYouWill")]
        public IHttpActionResult GetCategory(int Id)
        {

           
            var model = db.Categories.Find(Id);
            var objective = new SubCategory()
            {
                Id = model.Id,
                Name = model.Name,
                NameVn = model.NameVn
            };
            return Json(new { objective });
        }
        [HttpPost]
        [Route("api/Update")]
        public IHttpActionResult UpdateCategory([FromBody]Category model)
        {


            var data = db.Categories.Find(model.Id);
            data.Name = model.Name;
            data.NameVn = model.NameVn;
            db.SaveChanges();
                var objective = new SubCategory()
                {
                    Id = data.Id,
                    Name = data.Name,
                    NameVn = data.NameVn
                };
                return Json(new { objective });
            
            ;
        }
    }
}
