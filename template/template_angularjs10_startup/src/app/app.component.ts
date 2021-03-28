import { Component, HostListener, Renderer2, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import pageSettings from './config/page-settings';
import * as global from './config/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  pageSettings;

  ngOnInit() {
    // page settings
    this.pageSettings = pageSettings;
  }

	// window scroll
  pageHasScroll;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if (top > 0) {
      this.pageHasScroll = true;
    } else {
      this.pageHasScroll = false;
    }
  }

  // set page minified
  onToggleSidebarMinified(val: boolean):void {
  	if (this.pageSettings.pageSidebarMinified) {
  		this.pageSettings.pageSidebarMinified = false;
  	} else {
  		this.pageSettings.pageSidebarMinified = true;
  	}
	}

  // set page right collapse
  onToggleSidebarRight(val: boolean):void {
  	if (this.pageSettings.pageSidebarRightCollapsed) {
  		this.pageSettings.pageSidebarRightCollapsed = false;
  	} else {
  		this.pageSettings.pageSidebarRightCollapsed = true;
  	}
	}

  // hide mobile sidebar
  onHideMobileSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileSidebarToggled) {
      if (this.pageSettings.pageMobileSidebarFirstClicked) {
        this.pageSettings.pageMobileSidebarFirstClicked = false;
      } else {
  		  this.pageSettings.pageMobileSidebarToggled = false;
      }
    }
	}

  // toggle mobile sidebar
  onToggleMobileSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileSidebarToggled) {
  		this.pageSettings.pageMobileSidebarToggled = false;
    } else {
  		this.pageSettings.pageMobileSidebarToggled = true;
  		this.pageSettings.pageMobileSidebarFirstClicked = true;
    }
	}


  // hide right mobile sidebar
  onHideMobileRightSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileRightSidebarToggled) {
      if (this.pageSettings.pageMobileRightSidebarFirstClicked) {
        this.pageSettings.pageMobileRightSidebarFirstClicked = false;
      } else {
  		  this.pageSettings.pageMobileRightSidebarToggled = false;
      }
    }
	}

  // toggle right mobile sidebar
  onToggleMobileRightSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileRightSidebarToggled) {
  		this.pageSettings.pageMobileRightSidebarToggled = false;
    } else {
  		this.pageSettings.pageMobileRightSidebarToggled = true;
  		this.pageSettings.pageMobileRightSidebarFirstClicked = true;
    }
	}

  constructor(private titleService: Title, private router: Router, private renderer: Renderer2) {
    router.events.subscribe((e) => {
			if (e instanceof NavigationStart) {
			  if (window.innerWidth < 768) {
			    this.pageSettings.pageMobileSidebarToggled = false;
			  }
			}
    });
  }
}
