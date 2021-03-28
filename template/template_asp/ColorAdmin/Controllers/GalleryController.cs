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
    public class GalleryController : Controller
    {

        public IActionResult GalleryV1()
        {
            return View();
        }
        
        public IActionResult GalleryV2()
        {
            return View();
        }
    }
}
