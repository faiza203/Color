import { Component, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'table-booking',
  templateUrl: './table-booking.html'
})

export class PosTableBookingPage implements OnDestroy {
  pageSettings = pageSettings;
  time = '00:00';
  closeResult: string;

  open(content) {
    this.modalService.open(content).result.then((result) => {
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

  handleStartTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var a = (h > 12) ? h - 12 : h;
		var b = (m < 10) ? "0" + m : m;
		var c = (h > 11) ? 'pm' : 'am';

		this.time = a + ":" + b + c;
		setTimeout(this.handleStartTime, 500);
	}

  constructor(private modalService: NgbModal) {
    this.pageSettings.pageEmpty = true;
    this.pageSettings.pageContentFullHeight = true;
    this.pageSettings.pageContentFullWidth = true;
    this.handleStartTime();
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
    this.pageSettings.pageContentFullHeight = false;
    this.pageSettings.pageContentFullWidth = false;
  }
}
