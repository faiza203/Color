var pageMenus = [{
  'icon': 'fa fa-th-large',
  'title': 'Home',
  'url': '/home'
},{
  'icon': 'fa fa-align-left',
  'title': 'Menu Level',
  'url': '',
  'caret': 'true',
  'submenu': [{
    'url': '',
    'title': 'Menu 1.1',
    'caret': 'true',
    'submenu': [{
      'url': '',
      'title': 'Menu 2.1',
      'caret': 'true',
      'submenu': [{
        'url': '',
        'title': 'Menu 3.1',
      },{
        'url': '',
        'title': 'Menu 3.2'
      }]
    },{
      'url': '',
      'title': 'Menu 2.2'
    },{
      'url': '',
      'title': 'Menu 2.3'
    }]
  },{
    'url': '',
    'title': 'Menu 1.2'
  },{
    'url': '',
    'title': 'Menu 1.3'
  }]
}];

export default pageMenus;
