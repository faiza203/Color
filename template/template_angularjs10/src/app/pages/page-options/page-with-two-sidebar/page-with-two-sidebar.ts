import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-two-sidebar',
  templateUrl: './page-with-two-sidebar.html',
})

export class PageTwoSidebar implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageSidebarTwo = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageSidebarTwo = false;
  }
}
