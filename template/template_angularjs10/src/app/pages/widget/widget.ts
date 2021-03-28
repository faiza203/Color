import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as global from '../../config/globals';

@Component({
  selector: 'widget',
  templateUrl: './widget.html'
})

export class WidgetPage implements OnInit {
  closeResult: string;
  lightMode = true;
  darkMode = false;
  lineChartData = [{
    "name":"Congo",
    "series":[{"value":2377,"name":"Thu 15"},{"value":4567,"name":"Sat 17"},{"value":2865,"name":"Mon 19"},{"value":2060,"name":"Wed 21"},{"value":3287,"name":"Fri 23"}]},{"name":"Micronesia","series":[{"value":5234,"name":"Thu 15"},{"value":2876,"name":"Sat 17"},{"value":4297,"name":"Mon 19"},{"value":2558,"name":"Wed 21"},{"value":2371,"name":"Fri 23"}]},{"name":"Malaysia","series":[{"value":2369,"name":"Thu 15"},{"value":5229,"name":"Sat 17"},{"value":3457,"name":"Mon 19"},{"value":4401,"name":"Wed 21"},{"value":2835,"name":"Fri 23"}]},{"name":"Yemen","series":[{"value":2099,"name":"Thu 15"},{"value":4383,"name":"Sat 17"},{"value":6724,"name":"Mon 19"},{"value":2870,"name":"Wed 21"},{"value":5753,"name":"Fri 23"}]},{"name":"Åland Islands","series":[{"value":4907,"name":"Thu 15"},{"value":2428,"name":"Sat 17"},{"value":5384,"name":"Mon 19"},{"value":5966,"name":"Wed 21"},{"value":2605,"name":"Fri 23"}]
  }];
  lineChartColor = { domain: [global.COLOR_BLUE, global.COLOR_GREEN, global.COLOR_PURPLE, global.COLOR_BLACK] };

  widgetLightMode() {
    this.lightMode = true;
    this.darkMode = false;
  }
  widgetDarkMode() {
    this.darkMode = true;
    this.lightMode = false;
  }
  constructor(private modalService: NgbModal) {

  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
