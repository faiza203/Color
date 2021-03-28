import { Component, Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

// for ngb datepicker adapter
@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {

  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}


@Component({
  selector: 'form-elements',
  templateUrl: './form-elements.html',
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})

export class FormElementsPage {
  // ngbdatepicker
  model1: Date;
  model2: Date;
  get today() {
    return new Date();
  }

  // ngbtimepicker
  time2;
  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return {tooEarly: true};
    }
    if (value.hour > 13) {
      return {tooLate: true};
    }

    return null;
  });

  time = {hour: 13, minute: 30};
  meridian = true;
  toggleMeridian() {
      this.meridian = !this.meridian;
  }
}
