using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestLogin.Models;

namespace TestLogin.Controllers
{
    public class StoreController : ApiController
    {
        LoginContext db = new LoginContext();

        public IHttpActionResult GetStore()
        {
            var data = db.Stores.ToList();
            var dung = new List<SubStore>();

            foreach (var item in data)
            {
                var obj = new SubStore()
                {
                   Id = item.Id,
                   Name = item.Name,
                    Addr = item.Addr
                };
                dung.Add(obj);
            }
            return Json(new { dung });
        }
        [HttpPost]
        public IHttpActionResult AddStore([FromBody]Store model)
        {

            if (model.Id == 0)
            {
                var item = db.Stores.Add(model);
                db.SaveChanges();
                var objective = new SubStore()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Addr = item.Addr
                };
                return Json(new { objective });
            }
            return Json(new { });
        }
        [HttpGet]
        public IHttpActionResult Remove(int Id)
        {

            var data = "";
            var model = db.Stores.Find(Id);
            db.Stores.Remove(model);
            db.SaveChanges();
            data = "Success";
            return Json(new { data });
        }
        [HttpGet]
        [Route("api/GetStore")]
        public IHttpActionResult GetStore(int Id)
        {


            var item = db.Stores.Find(Id);
            var objective = new SubStore()
            {
                Id = item.Id,
                Name = item.Name,
                Addr = item.Addr
            };
            return Json(new { objective });
        }
        [HttpPost]
        [Route("api/UpdateStore")]
        public IHttpActionResult UpdateStore([FromBody]Store model)
        {


            var data = db.Stores.Find(model.Id);
            data.Name = model.Name;
            data.Addr = model.Addr;
            db.SaveChanges();
            var objective = new SubStore()
            {
                Id = data.Id,
                Name = data.Name,
                Addr = data.Addr
            };
            return Json(new { objective });

            ;
        }
    }
}
