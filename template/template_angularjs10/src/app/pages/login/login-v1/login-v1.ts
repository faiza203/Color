import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import pageSettings from '../../../config/page-settings';

@Component({
  selector: 'login-v1',
  templateUrl: './login-v1.html'
})

export class LoginV1Page implements OnDestroy {
  pageSettings = pageSettings;

  constructor(private router: Router) {
    this.pageSettings.pageEmpty = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
  }

  formSubmit(f: NgForm) {
    this.router.navigate(['dashboard/v3']);
  }
}
