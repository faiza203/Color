import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';
import * as global from '../../../config/globals';

@Component({
  selector: 'email-compose',
  templateUrl: './email-compose.html'
})

export class EmailComposePage implements OnInit, OnDestroy {
	global = global;
  tags;
  pageSettings = pageSettings;
  public isCollapsed = true;

  ngOnInit() {
    this.tags = ['bootstrap@gmail.com', 'google@gmail.com'];
  }

  onTagsChanged(value) { }

  constructor() {
    this.pageSettings.pageContentFullHeight = true;
    this.pageSettings.pageContentFullWidth = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageContentFullHeight = false;
    this.pageSettings.pageContentFullWidth = false;
  }
}
