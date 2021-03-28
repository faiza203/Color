import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-mega-menu',
  templateUrl: './page-with-mega-menu.html'
})

export class PageMegaMenu implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageMegaMenu = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageMegaMenu = false;
  }
}
