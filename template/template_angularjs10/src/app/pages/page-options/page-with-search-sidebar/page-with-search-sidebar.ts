import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-search-sidebar',
  templateUrl: './page-with-search-sidebar.html'
})

export class PageSidebarSearch implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageSidebarSearch = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageSidebarSearch = false;
  }
}

