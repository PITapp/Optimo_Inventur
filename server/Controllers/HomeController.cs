using System;
using Microsoft.AspNetCore.Mvc;

namespace OptimoInventur.Controllers
{
    public partial class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
