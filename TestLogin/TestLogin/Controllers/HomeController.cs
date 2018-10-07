using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestLogin.Models;

namespace TestLogin.Controllers
{
    public class HomeController : Controller
    {
        LoginContext db = new LoginContext();
        public ActionResult Index()
        {
            var model = db.Logins.ToList();
            ViewBag.Title = "Home Page";

            return View(model);
        }
    }
}
