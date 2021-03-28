import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'extra-error',
  templateUrl: './extra-error.html'
})

export class ExtraErrorPage implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageEmpty = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
  }
}
