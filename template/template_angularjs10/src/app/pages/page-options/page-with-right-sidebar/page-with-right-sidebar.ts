import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-right-sidebar',
  templateUrl: './page-with-right-sidebar.html'
})

export class PageSidebarRight implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageSidebarRight = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageSidebarRight = false;
  }
}
