import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';
import * as global from '../../../config/globals';

@Component({
  selector: 'page-full-height',
  templateUrl: './page-full-height.html'
})

export class PageFullHeight implements OnDestroy {
	global = global;
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageContentFullHeight = true;
    this.pageSettings.pageContentFullWidth = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageContentFullHeight = false;
    this.pageSettings.pageContentFullWidth = false;
  }
}
