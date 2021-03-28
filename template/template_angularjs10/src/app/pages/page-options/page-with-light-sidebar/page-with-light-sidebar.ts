import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-light-sidebar',
  templateUrl: './page-with-light-sidebar.html'
})

export class PageSidebarLight implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageSidebarLight = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageSidebarLight = false;
  }
}
