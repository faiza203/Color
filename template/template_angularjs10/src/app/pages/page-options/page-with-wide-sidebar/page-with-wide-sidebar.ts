import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-wide-sidebar',
  templateUrl: './page-with-wide-sidebar.html'
})

export class PageSidebarWide implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageSidebarWide = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageSidebarWide = false;
  }
}
