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
    public class MapController : Controller
    {

        public IActionResult Vector()
        {
            return View();
        }
        
        public IActionResult Google()
        {
            return View();
        }
    }
}
