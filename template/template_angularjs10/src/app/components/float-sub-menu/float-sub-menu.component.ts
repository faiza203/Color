import { Component, Input, Output, EventEmitter } 		 from '@angular/core';
import pageSettings from '../../config/page-settings';

@Component({
  selector: 'float-sub-menu',
  templateUrl: './float-sub-menu.component.html'
})

export class FloatSubMenuComponent {
  pageSettings = pageSettings;

	@Input() menus;
	@Input() top;
	@Input() left;
	@Input() right;
	@Input() bottom;
	@Input() lineTop;
	@Input() lineBottom;
	@Input() arrowTop;
	@Input() arrowBottom;

	@Output() remainPageFloatSubMenu = new EventEmitter();
	@Output() hidePageFloatSubMenu = new EventEmitter();
	@Output() calculateFloatSubMenuPosition = new EventEmitter();

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
		this.calculateFloatSubMenuPosition.emit();
	}

	remainMenu() {
	  this.remainPageFloatSubMenu.emit(true);
	}

	hideMenu() {
	  this.hidePageFloatSubMenu.emit(true);
	}
}
