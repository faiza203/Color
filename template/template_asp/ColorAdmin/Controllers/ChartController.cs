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
    public class ChartController : Controller
    {

        public IActionResult FlotChart()
        {
            return View();
        }
        
        public IActionResult ChartJs()
        {
            return View();
        }
        
        public IActionResult d3Chart()
        {
            return View();
        }
        
        public IActionResult ApexChart()
        {
            return View();
        }
    }
}
