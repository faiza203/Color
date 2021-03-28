import { Component } from '@angular/core';

@Component({
  selector: 'helper-css',
  templateUrl: './helper-css.html'
})

export class HelperCssPage {

  tabs = {
    generalTab: true,
		widthAndHeightTab: false,
		textAndFontTab: false,
		marginTab: false,
		paddingTab: false,
		backgroundColorTab: false,
		textColorTab: false
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
}
