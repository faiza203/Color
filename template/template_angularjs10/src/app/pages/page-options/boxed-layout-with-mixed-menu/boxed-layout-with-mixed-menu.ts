import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';
import * as global from '../../../config/globals';

@Component({
  selector: 'boxed-layout-with-mixed-menu',
  templateUrl: './boxed-layout-with-mixed-menu.html'
})

export class BoxedLayoutMixedMenu implements OnDestroy {
	global = global;
  pageSettings = pageSettings;

  constructor() {
    document.body.className = document.body.className + ' boxed-layout';
    this.pageSettings.pageTopMenu = true;
  }

  ngOnDestroy() {
    document.body.className = document.body.className.replace('boxed-layout', '');
    this.pageSettings.pageTopMenu = false;
  }
}
