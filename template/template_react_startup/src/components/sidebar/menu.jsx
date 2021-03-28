const Menu = [
  { 
  	path: '/', icon: 'fa fa-th', title: 'Home'
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
  }
]

export default Menu;
