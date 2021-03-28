import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'login-v2',
  templateUrl: './login-v2.html'
})

export class LoginV2Page implements OnInit, OnDestroy {
  bg;
  bgList;
  app;
  pageSettings = pageSettings;

  constructor(private router: Router) {
    this.pageSettings.pageEmpty = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
  }

  ngOnInit() {
    this.bg = '/assets/img/login-bg/login-bg-17.jpg';
    this.bgList = [
      { 'bg': '/assets/img/login-bg/login-bg-17.jpg', active: true },
      { 'bg': '/assets/img/login-bg/login-bg-16.jpg' },
      { 'bg': '/assets/img/login-bg/login-bg-15.jpg' },
      { 'bg': '/assets/img/login-bg/login-bg-14.jpg' },
      { 'bg': '/assets/img/login-bg/login-bg-13.jpg' },
      { 'bg': '/assets/img/login-bg/login-bg-12.jpg' }
    ];
  }

  changeBg(list) {
    this.bg = list.bg;
    list.active = true;

    for (let bList of this.bgList) {
			if (bList != list) {
				bList.active = false;
			}
		}
  }

  formSubmit(f: NgForm) {
    this.router.navigate(['dashboard/v3']);
  }
}
