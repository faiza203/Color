import { Component } from '@angular/core';

@Component({
  selector: 'extra-cookie-acceptance-banner',
  templateUrl: './extra-cookie-acceptance-banner.html'
})

export class ExtraCookieAcceptanceBannerPage {
  showBanner: boolean = true;

  hideBanner() {
    this.showBanner = false;
  }
}
