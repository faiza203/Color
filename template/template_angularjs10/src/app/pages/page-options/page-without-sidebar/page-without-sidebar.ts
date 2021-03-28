import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-without-sidebar',
  templateUrl: './page-without-sidebar.html'
})

export class PageWithoutSidebar implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageWithoutSidebar = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageWithoutSidebar = false;
  }
}
