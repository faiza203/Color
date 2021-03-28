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
    public class EmailTemplateController : Controller
    {

        public IActionResult System()
        {
            return View();
        }
        
        public IActionResult Newsletter()
        {
            return View();
        }
    }
}
