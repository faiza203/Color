import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'page-with-footer',
  templateUrl: './page-with-footer.html'
})

export class PageFooter implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageWithFooter = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageWithFooter = false;
  }
}
