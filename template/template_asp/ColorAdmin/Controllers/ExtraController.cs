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
    public class ExtraController : Controller
    {

        public IActionResult Timeline()
        {
            return View();
        }
        
        public IActionResult ComingSoon()
        {
            return View();
        }
        
        public IActionResult SearchResult()
        {
            return View();
        }
        
        public IActionResult Profile()
        {
            return View();
        }
        
        public IActionResult Invoice()
        {
            return View();
        }
        
        public IActionResult ErrorPage()
        {
            return View();
        }
        
        public IActionResult ScrumBoard()
        {
            return View();
        }
        
        public IActionResult CookieAcceptanceBanner()
        {
            return View();
        }
    }
}
