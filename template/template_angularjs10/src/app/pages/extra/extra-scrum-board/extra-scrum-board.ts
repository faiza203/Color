import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'extra-scrum-board',
  templateUrl: './extra-scrum-board.html'
})

export class ExtraScrumBoardPage {
  closeResult: string;
  isCollapsed1: boolean;
  isCollapsed2: boolean;
  isCollapsed3: boolean;
  isCollapsed4: boolean;

  constructor(private modalService: NgbModal) {
    this.isCollapsed1 = false;
    this.isCollapsed2 = false;
    this.isCollapsed3 = false;
    this.isCollapsed4 = false;
  }

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
}
