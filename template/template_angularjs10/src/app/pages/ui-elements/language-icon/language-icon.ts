import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'ui-language-icon',
  templateUrl: './language-icon.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './language-icon.css' ]
})

export class UILanguageIconPage implements OnDestroy {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageLanguageBar = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageLanguageBar = false;
  }
}
