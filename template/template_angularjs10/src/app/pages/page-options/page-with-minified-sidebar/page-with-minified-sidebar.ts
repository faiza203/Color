import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-minified-sidebar',
  templateUrl: './page-with-minified-sidebar.html'
})

export class PageSidebarMinified implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageSidebarMinified = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageSidebarMinified = false;
  }
}
