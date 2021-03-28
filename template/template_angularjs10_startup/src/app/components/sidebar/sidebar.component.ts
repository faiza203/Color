import { group, animate, query, style, trigger, transition, state } from '@angular/animations';
import { Component, Input, Output, EventEmitter, ElementRef, HostListener, ViewChild, OnInit, AfterViewChecked } 		 from '@angular/core';
import * as global 	from '../../config/globals';
import pageMenus from '../../config/page-menus';
import pageSettings from '../../config/page-settings';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  animations: [
    trigger('expandCollapse', [
      state('expand', style({ height: '*', overflow: 'hidden', display: 'block' })),
      state('collapse', style({ height: '0px', overflow: 'hidden', display: 'none' })),
      state('active', style({ height: '*', overflow: 'hidden', display: 'block' })),
      transition('expand <=> collapse', animate(100)),
      transition('active => collapse', animate(100))
    ])
  ]
})

export class SidebarComponent implements AfterViewChecked {
  navProfileState = 'collapse';
  @ViewChild('sidebarScrollbar', { static: false }) private sidebarScrollbar: ElementRef;
	@Output() toggleSidebarMinified = new EventEmitter<boolean>();
	@Output() hideMobileSidebar = new EventEmitter<boolean>();
	@Output() setPageFloatSubMenu = new EventEmitter();
	@Input() pageSidebarTransparent;
	@Input() pageSidebarMinified;

	menus = pageMenus;
	pageSettings = pageSettings;
	pageFloatSubMenu;
	pageFloatSubMenuHide;
	pageFloatSubMenuHideTime = 250;
	pageFloatSubMenuTop;
	pageFloatSubMenuLeft = '60px';
	pageFloatSubMenuRight;
  pageFloatSubMenuBottom;
  pageFloatSubMenuArrowTop;
  pageFloatSubMenuArrowBottom;
  pageFloatSubMenuLineTop;
  pageFloatSubMenuLineBottom;
  pageFloatSubMenuOffset;

	mobileMode;
	desktopMode;
	scrollTop;

  toggleNavProfile() {
    if (this.navProfileState == 'collapse') {
      this.navProfileState = 'expand';
    } else {
      this.navProfileState = 'collapse';
    }
  }

	toggleMinified() {
		this.toggleSidebarMinified.emit(true);
		this.navProfileState = 'collapse';
		this.scrollTop = 40;
	}

	calculateFloatSubMenuPosition() {
		var targetTop = this.pageFloatSubMenuOffset.top;
    var direction = document.body.style.direction;
    var windowHeight = window.innerHeight;

    setTimeout(() => {
      let targetElm = <HTMLElement> document.querySelector('.float-sub-menu-container');
      let targetSidebar = <HTMLElement> document.getElementById('sidebar');
      var targetHeight = targetElm.offsetHeight;
      this.pageFloatSubMenuRight = 'auto';
      this.pageFloatSubMenuLeft = (this.pageFloatSubMenuOffset.width + targetSidebar.offsetLeft) + 'px';

      if ((windowHeight - targetTop) > targetHeight) {
        this.pageFloatSubMenuTop = this.pageFloatSubMenuOffset.top + 'px';
        this.pageFloatSubMenuBottom = 'auto';
        this.pageFloatSubMenuArrowTop = '20px';
        this.pageFloatSubMenuArrowBottom = 'auto';
        this.pageFloatSubMenuLineTop = '20px';
        this.pageFloatSubMenuLineBottom = 'auto';
      } else {
        this.pageFloatSubMenuTop = 'auto';
        this.pageFloatSubMenuBottom = '0';

        var arrowBottom = (windowHeight - targetTop) - 21;
        this.pageFloatSubMenuArrowTop = 'auto';
        this.pageFloatSubMenuArrowBottom = arrowBottom + 'px';
        this.pageFloatSubMenuLineTop = '20px';
        this.pageFloatSubMenuLineBottom = arrowBottom + 'px';
      }
    }, 0);
	}

	showPageFloatSubMenu(menu, e) {
	  if (this.pageSettings.pageSidebarMinified) {
      clearTimeout(this.pageFloatSubMenuHide);

      this.pageFloatSubMenu = menu;
      this.pageFloatSubMenuOffset = e.target.getBoundingClientRect();
      this.calculateFloatSubMenuPosition();
    }
	}

	hidePageFloatSubMenu() {
	  this.pageFloatSubMenuHide = setTimeout(() => {
	    this.pageFloatSubMenu = '';
	  }, this.pageFloatSubMenuHideTime);
	}

	remainPageFloatSubMenu() {
	  clearTimeout(this.pageFloatSubMenuHide);
	}

	expandCollapseSubmenu(currentMenu, allMenu, active) {
		for (let menu of allMenu) {
			if (menu != currentMenu) {
				menu.state = 'collapse';
			}
		}
		if (active.isActive) {
		  currentMenu.state = (currentMenu.state && currentMenu.state == 'collapse') ? 'expand' : 'collapse';
		} else {
		  currentMenu.state = (currentMenu.state && currentMenu.state == 'expand') ? 'collapse' : 'expand';
		}
	}

	sidebarSearch(e: any) {
	  var value = e.target.value;
	      value = value.toLowerCase();

    if (value) {
      for (let menu of this.menus) {
        var title = menu.title;
            title = title.toLowerCase();

        if (title.search(value) > -1) {
          menu['hide'] = false;
          if (menu.submenu) {
            menu['state'] = 'expand';
          }
        } else {
          var hasSearch = false;
          if (menu.submenu) {
            for (var x = 0; x < menu.submenu.length; x++) {
              var subtitle = menu.submenu[x].title;
                  subtitle = subtitle.toLowerCase();

              if (subtitle.search(value) > -1) {
                hasSearch = true;
              }
            }
          }
          if (hasSearch) {
            menu['hide'] = false;
            menu['state'] = 'expand';
          } else {
            menu['hide'] = true;
          }
        }
      }
    } else {
      for (let menu of this.menus) {
        menu['hide'] = '';
        menu['state'] = '';
      }
    }
  }

	@HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
		  this.hideMobileSidebar.emit(true);
    }
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    this.scrollTop = (this.pageSettings.pageSidebarMinified) ? event.srcElement.scrollTop + 40 : 0;
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('sidebarScroll', event.srcElement.scrollTop);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 767) {
      this.mobileMode = true;
      this.desktopMode = false;
    } else {
      this.mobileMode = false;
      this.desktopMode = true;
    }
  }

  ngAfterViewChecked() {
    if (typeof(Storage) !== 'undefined' && localStorage.sidebarScroll) {
      if (this.sidebarScrollbar && this.sidebarScrollbar.nativeElement) {
        this.sidebarScrollbar.nativeElement.scrollTop = localStorage.sidebarScroll;
      }
    }
  }

  constructor(private eRef: ElementRef) {
    if (window.innerWidth <= 767) {
      this.mobileMode = true;
      this.desktopMode = false;
    } else {
      this.mobileMode = false;
      this.desktopMode = true;
    }
  }
}
