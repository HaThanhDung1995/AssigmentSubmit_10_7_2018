using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestLogin.Models;

namespace TestLogin.Controllers
{
    public class LoginController : ApiController
    {
        LoginContext db = new LoginContext();
        [HttpPost]
        public IHttpActionResult Post([FromBody] Login model)
        {
            var obj = db.Logins.Single(a => a.Username == model.Username && a.Pass == model.Pass);
            if (obj != null)
            {
                if (obj.Rol == 1)
                {
                    return Json(new
                    {
                        auth="Admin"
                    });
                }
                else
                {
                    return Json(new
                    {
                        auth = "User"
                    });
                }

            }
            return Json(new {result = "authenticated"});
        }
    }
}
