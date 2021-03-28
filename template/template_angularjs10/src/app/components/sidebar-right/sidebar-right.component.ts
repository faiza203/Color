import { group, animate, query, style, trigger, transition, state } from '@angular/animations';
import { Component, Input, Output, EventEmitter, ElementRef, HostListener } 		 from '@angular/core';
import * as global 			 from '../../config/globals';

@Component({
  selector: 'sidebar-right',
  templateUrl: './sidebar-right.component.html'
})

export class SidebarRightComponent {
  global = global;
	@Output() hideMobileRightSidebar = new EventEmitter<boolean>();

	@HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
		  this.hideMobileRightSidebar.emit(true);
    }
  }

  constructor(private eRef: ElementRef) {
  }
}
