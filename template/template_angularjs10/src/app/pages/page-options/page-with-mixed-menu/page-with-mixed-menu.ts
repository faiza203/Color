import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-mixed-menu',
  templateUrl: './page-with-mixed-menu.html'
})

export class PageMixedMenu implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageTopMenu = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageTopMenu = false;
  }
}
