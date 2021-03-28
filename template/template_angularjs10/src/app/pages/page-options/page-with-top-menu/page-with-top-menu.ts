import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-top-menu',
  templateUrl: './page-with-top-menu.html'
})

export class PageTopMenu implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageWithoutSidebar = true;
    this.pageSettings.pageTopMenu = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageWithoutSidebar = false;
    this.pageSettings.pageTopMenu = false;
    this.pageSettings.pageMobileTopMenuToggled = false;
  }
}
