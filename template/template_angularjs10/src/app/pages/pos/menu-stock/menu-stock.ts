import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'menu-stock',
  templateUrl: './menu-stock.html'
})

export class PosMenuStockPage implements OnDestroy {
  pageSettings = pageSettings;
  time = '00:00';
  posMobileSidebarToggled = false;

  handleStartTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var a = (h > 12) ? h - 12 : h;
		var b = (m < 10) ? "0" + m : m;
		var c = (h > 11) ? 'pm' : 'am';

		this.time = a + ":" + b + c;
		setTimeout(this.handleStartTime, 500);
	}

	togglePosMobileSidebar() {
	  this.posMobileSidebarToggled = !this.posMobileSidebarToggled;
	}

  constructor() {
    this.pageSettings.pageEmpty = true;
    this.pageSettings.pageContentFullHeight = true;
    this.pageSettings.pageContentFullWidth = true;
    this.handleStartTime();
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
    this.pageSettings.pageContentFullHeight = false;
    this.pageSettings.pageContentFullWidth = false;
  }
}
