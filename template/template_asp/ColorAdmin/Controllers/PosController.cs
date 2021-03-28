using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using studio.Models;

namespace studio.Controllers
{
    public class PosController : Controller
    {

        public IActionResult CustomerOrder()
        {
            return View();
        }
        
        public IActionResult KitchenOrder()
        {
            return View();
        }
        
        public IActionResult CounterCheckout()
        {
            return View();
        }
        
        public IActionResult TableBooking()
        {
            return View();
        }
        
        public IActionResult MenuStock()
        {
            return View();
        }
    }
}
