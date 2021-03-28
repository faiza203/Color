import { Component } from '@angular/core';
import * as global from '../../../config/globals';

@Component({
  selector: 'ui-widget-boxes',
  templateUrl: './widget-boxes.html'
})

export class UIWidgetBoxesPage {
	global = global;

	model = 1;
}
