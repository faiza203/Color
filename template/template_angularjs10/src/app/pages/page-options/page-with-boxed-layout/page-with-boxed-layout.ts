import { Component, OnDestroy } from '@angular/core';
import * as global from '../../../config/globals';

@Component({
  selector: 'page-with-boxed-layout',
  templateUrl: './page-with-boxed-layout.html'
})

export class PageBoxedLayout implements OnDestroy {
	global = global;

  constructor() {
    document.body.className = document.body.className + ' boxed-layout';
  }

  ngOnDestroy() {
    document.body.className = document.body.className.replace('boxed-layout', '');
  }
}
