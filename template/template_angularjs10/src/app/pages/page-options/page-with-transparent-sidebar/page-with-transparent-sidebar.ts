import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-transparent-sidebar',
  templateUrl: './page-with-transparent-sidebar.html'
})

export class PageSidebarTransparent implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageSidebarTransparent = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageSidebarTransparent = false;
  }
}
