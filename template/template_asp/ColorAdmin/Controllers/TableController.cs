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
    public class TableController : Controller
    {

        public IActionResult Basic()
        {
            return View();
        }
        
        public IActionResult TableManageDefault()
        {
            return View();
        }
        
        public IActionResult TableManageAutofill()
        {
            return View();
        }
        
        public IActionResult TableManageButtons()
        {
            return View();
        }
        
        public IActionResult TableManageColReorder()
        {
            return View();
        }
        
        public IActionResult TableManageFixedColumn()
        {
            return View();
        }
        
        public IActionResult TableManageFixedHeader()
        {
            return View();
        }
        
        public IActionResult TableManageKeyTable()
        {
            return View();
        }
        
        public IActionResult TableManageResponsive()
        {
            return View();
        }
        
        public IActionResult TableManageRowReorder()
        {
            return View();
        }
        
        public IActionResult TableManageScroller()
        {
            return View();
        }
        
        public IActionResult TableManageSelect()
        {
            return View();
        }
        
        public IActionResult TableManageCombine()
        {
            return View();
        }
    }
}
