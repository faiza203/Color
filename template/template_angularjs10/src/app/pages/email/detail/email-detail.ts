import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';
import * as global from '../../../config/globals';

@Component({
  selector: 'email-detail',
  templateUrl: './email-detail.html'
})

export class EmailDetailPage implements OnDestroy {
	global = global;
  pageSettings = pageSettings;
  public isCollapsed = true;

  constructor() {
    this.pageSettings.pageContentFullHeight = true;
    this.pageSettings.pageContentFullWidth = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageContentFullHeight = false;
    this.pageSettings.pageContentFullWidth = false;
  }
}
