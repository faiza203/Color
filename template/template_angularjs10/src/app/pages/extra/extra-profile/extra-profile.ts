import { Component, OnDestroy } from '@angular/core';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'extra-profile',
  templateUrl: './extra-profile.html'
})

export class ExtraProfilePage implements OnDestroy {
  pageSettings = pageSettings;
  lat: number = 40.7143528;
  lng: number = -74.0059731;

  tabs = {
    postTab: true,
		aboutTab: false,
		photoTab: false,
		videoTab: false,
		friendTab: false
  };

  showTab(e) {
    for (let key in this.tabs) {
      if (key == e) {
        this.tabs[key] = true;
      } else {
  		  this.tabs[key] = false;
      }
  	}
  };

  constructor() {
    this.pageSettings.pageContentFullWidth = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageContentFullWidth = false;
  }
}
