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
    public class PageOptionController : Controller
    {

        public IActionResult PageBlank()
        {
            return View();
        }
        
        public IActionResult PageWithFooter()
        {
            return View();
        }
        
        public IActionResult PageWithoutSidebar()
        {
            return View();
        }
        
        public IActionResult PageWithRightSidebar()
        {
            return View();
        }
        
        public IActionResult PageWithMinifiedSidebar()
        {
            return View();
        }
        
        public IActionResult PageWithTwoSidebar()
        {
            return View();
        }
        
        public IActionResult PageFullHeight()
        {
            return View();
        }
        
        public IActionResult PageWithWideSidebar()
        {
            return View();
        }
        
        public IActionResult PageWithLightSidebar()
        {
            return View();
        }
        
        public IActionResult PageWithMegaMenu()
        {
            return View();
        }
        
        public IActionResult PageWithTopMenu()
        {
            return View();
        }
        
        public IActionResult PageWithBoxedLayout()
        {
            return View();
        }
        
        public IActionResult PageWithMixedMenu()
        {
            return View();
        }
        
        public IActionResult BoxedLayoutWithMixedMenu()
        {
            return View();
        }
        
        public IActionResult PageWithTransparentSidebar()
        {
            return View();
        }
        
        public IActionResult PageWithSearchSidebar()
        {
            return View();
        }
    }
}
