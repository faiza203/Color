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
    public class EmailController : Controller
    {

        public IActionResult Inbox()
        {
            return View();
        }

        public IActionResult Compose()
        {
            return View();
        }

        public IActionResult Detail()
        {
            return View();
        }
    }
}
