const Menu = [
  { path: '/dashboard', icon: 'fa fa-th', title: 'Dashboard',
    children: [
      { path: '/dashboard/v1', title: 'Dashboard v1' },
      { path: '/dashboard/v2', title: 'Dashboard v2' }
    ]
  },
  { path: '/email', icon: 'fa fa-hdd', title: 'Email', badge: '10',
    children: [
      { path: '/email/inbox', title: 'Inbox' },
      { path: '/email/compose', title: 'Compose' },
      { path: '/email/detail', title: 'Detail' }
    ]
  },
  { path: '/widgets', icon: 'fab fa-simplybuilt', title: 'Widgets', label: 'NEW' },
  { path: '/ui', icon: 'fa fa-gem', title: 'UI Elements', label: 'NEW',
    children: [
      { path: '/ui/general', title: 'General', highlight: true },
      { path: '/ui/typography', title: 'Typograhy' },
      { path: '/ui/tabs-accordion', title: 'Tabs & Accordion' },
      { path: '/ui/modal-notification', title: 'Modal & Notification' },
      { path: '/ui/widget-boxes', title: 'Widget Boxes' },
      { path: '/ui/media-object', title: 'Media Object' },
      { path: '/ui/buttons', title: 'Buttons', highlight: true },
      { path: '/ui/icons', title: 'Icons' },
      { path: '/ui/simple-line-icons', title: 'Simple Line Icons' },
      { path: '/ui/ionicons', title: 'Ionicons' },
      { path: '/ui/language-bar-icon', title: 'Language Bar & Icon' },
      { path: '/ui/social-buttons', title: 'Social Buttons' }
    ]
  },
  { path: '/bootstrap-4', img: '/assets/img/logo/logo-bs4.png', title: 'Bootstrap 4', label: 'NEW' },
  { path: '/form', icon: 'fa fa-list-ol', title: 'Form Stuff', label: 'NEW',
    children: [
      { path: '/form/elements', title: 'Form Elements', highlight: true },
      { path: '/form/plugins', title: 'Form Plugins', highlight: true }
    ]
  },
  { path: '/table', icon: 'fa fa-table', title: 'Tables',
    children: [
      { path: '/table/basic', title: 'Basic Tables' },
      { path: '/table/data', title: 'Data Tables' }
    ]
  },
  { path: '/frontend', icon: 'fa fa-star', title: 'FrontEnd',
    children: [
      { path: '/frontend/one-page-parallax', title: 'One Page Parallax' },
      { path: '/frontend/blog', title: 'Blog' },
      { path: '/frontend/forum', title: 'Forum' },
      { path: '/frontend/e-commerce', title: 'E-Commerce' }
    ]
  },
  { path: '/email-template', icon: 'fa fa-envelope', title: 'Email Template',
    children: [
      { path: '/email-template/system', title: 'System Template' },
      { path: '/email-template/newsletter', title: 'Newsletter Template' }
    ]
  },
  { path: '/chart', icon: 'fa fa-chart-pie', title: 'Chart',
    children: [
      { path: '/chart/js', title: 'Chart JS' },
      { path: '/chart/d3', title: 'd3 Chart' }
    ]
  },
  { path: '/calendar', icon: 'fa fa-calendar', title: 'Calendar' },
  { path: '/map', icon: 'fa fa-map', title: 'Map' },
  { path: '/gallery', icon: 'fa fa-image', title: 'Gallery' },
  { path: '/page-option', icon: 'fa fa-cogs', title: 'Page Options',
    children: [
      { path: '/page-option/blank', title: 'Blank Page' },
      { path: '/page-option/with-footer', title: 'Page with Footer' },
      { path: '/page-option/without-sidebar', title: 'Page without Sidebar' },
      { path: '/page-option/with-right-sidebar', title: 'Page with Right Sidebar' },
      { path: '/page-option/with-minified-sidebar', title: 'Page with Minified Sidebar' },
      { path: '/page-option/with-two-sidebar', title: 'Page with Two Sidebar' },
      { path: '/page-option/full-height', title: 'Full Height Content' },
      { path: '/page-option/with-wide-sidebar', title: 'Page with Wide Sidebar' },
      { path: '/page-option/with-light-sidebar', title: 'Page with Light Sidebar' },
      { path: '/page-option/with-mega-menu', title: 'Page with Mega Menu' },
      { path: '/page-option/with-top-menu', title: 'Page with Top Menu' },
      { path: '/page-option/with-boxed-layout', title: 'Page with Boxed Layout' },
      { path: '/page-option/with-mixed-menu', title: 'Page with Mixed Menu' },
      { path: '/page-option/boxed-layout-with-mixed-menu', title: 'Boxed Layout with Mixed Menu' },
      { path: '/page-option/with-transparent-sidebar', title: 'Page with Transparent Sidebar' },
    ]
  },
  { path: '/extra', icon: 'fa fa-gift', title: 'Extra',
    children: [
      { path: '/extra/timeline', title: 'Timeline' },
      { path: '/extra/coming-soon', title: 'Coming Soon Page' },
      { path: '/extra/search', title: 'Search Results' },
      { path: '/extra/invoice', title: 'Invoice' },
      { path: '/extra/error', title: '404 Error Page' },
      { path: '/extra/profile', title: 'Profile Page' },
    ]
  },
  { path: '/user', icon: 'fa fa-key', title: 'Login & Register',
    children: [
      { path: '/user/login-v1', title: 'Login' },
      { path: '/user/login-v2', title: 'Login v2' },
      { path: '/user/login-v3', title: 'Login v3' },
      { path: '/user/register-v3', title: 'Register v3' }
    ]
  },
  { path: '/version', icon: 'fa fa-cubes', title: 'Version', label: 'NEW',
    children: [
      { path: '/version/html', title: 'HTML' },
      { path: '/version/ajax', title: 'AJAX' },
      { path: '/version/angularjs', title: 'ANGULAR JS' },
      { path: '/version/angularjs10', title: 'ANGULAR JS 10', highlight: true },
      { path: '/version/laravel', title: 'LARAVEL', highlight: true },
      { path: '/version/material', title: 'MATERIAL DESIGN' },
      { path: '/version/apple', title: 'APPLE DESIGN' },
      { path: '/version/transparent', title: 'Transparent Design', highlight: true }
    ]
  },
  { path: '/helper', icon: 'fa fa-medkit', title: 'Helper',
    children: [
      { path: '/helper/css', title: 'Predefined CSS Classes' }
    ]
  },
  { path: '/menu', icon: 'fa fa-align-left', title: 'Menu Level',
    children: [
      { path: '/menu/menu-1-1', title: 'Menu 1.1',
        children: [
          { path: '/menu/menu-1-1/menu-2-1', title: 'Menu 2.1',
            children: [
              { path: '/menu/menu-1-1/menu-2-1/menu-3-1', title: 'Menu 3.1' },
              { path: '/menu/menu-1-1/menu-2-1/menu-3-2', title: 'Menu 3.2' }
            ]
          },
          { path: '/menu/menu-1-1/menu-2-2', title: 'Menu 2.2' },
          { path: '/menu/menu-1-1/menu-2-3', title: 'Menu 2.3' },
        ]
      },
      { path: '/menu/menu-1-2', title: 'Menu 1.2' },
      { path: '/menu/menu-1-3', title: 'Menu 1.3' },
    ]
  },
]

export default Menu;
