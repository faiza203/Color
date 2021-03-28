import { Component, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'customer-order',
  templateUrl: './customer-order.html'
})

export class PosCustomerOrderPage implements OnDestroy {
  pageSettings = pageSettings;
  posMobileSidebarToggled = false;
  closeResult: string;

  open(content) {
    this.modalService.open(content, { windowClass: 'modal-pos-item', size: 'lg' }).result.then((result) => {
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

	togglePosMobileSidebar() {
	  this.posMobileSidebarToggled = !this.posMobileSidebarToggled;
	}

  constructor(private modalService: NgbModal) {
    this.pageSettings.pageEmpty = true;
    this.pageSettings.pageContentFullHeight = true;
    this.pageSettings.pageContentFullWidth = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
    this.pageSettings.pageContentFullHeight = false;
    this.pageSettings.pageContentFullWidth = false;
  }
}
