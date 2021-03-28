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
    public class LoginRegisterController : Controller
    {

        public IActionResult LoginV1()
        {
            return View();
        }
        
        public IActionResult LoginV2()
        {
            return View();
        }
        
        public IActionResult LoginV3()
        {
            return View();
        }
        
        public IActionResult RegisterV3()
        {
            return View();
        }
    }
}
