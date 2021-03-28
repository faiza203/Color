import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.html'
})

export class CalendarPage {
  date = new Date();
	currentYear = this.date.getFullYear();
	month = this.date.getMonth() + 1;
	currentMonth = (this.month < 10) ? '0' + this.month : this.month;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap',
    headerToolbar: {
			left: 'dayGridMonth,timeGridWeek,timeGridDay',
			center: 'title',
			right: 'prev,next today'
		},
		buttonText: {
			today:    'Today',
			month:    'Month',
			week:     'Week',
			day:      'Day'
		},
		events: [{
			title: 'All Day Event',
			start: this.currentYear + '-'+ this.currentMonth +'-01',
			color: '#00acac'
		}, {
			title: 'Long Event',
			start: this.currentYear + '-'+ this.currentMonth +'-07',
			end: this.currentYear + '-'+ this.currentMonth +'-10'
		}, {
			title: 'Repeating Event',
			start: this.currentYear + '-'+ this.currentMonth +'-09T16:00:00',
			color: '#00acac'
		}, {
			title: 'Repeating Event',
			start: this.currentYear + '-'+ this.currentMonth +'-16T16:00:00'
		}, {
			title: 'Conference',
			start: this.currentYear + '-'+ this.currentMonth +'-11',
			end: this.currentYear + '-'+ this.currentMonth +'-13'
		}, {
			title: 'Meeting',
			start: this.currentYear + '-'+ this.currentMonth +'-12T10:30:00',
			end: this.currentYear + '-'+ this.currentMonth +'-12T12:30:00',
			color: '#00acac'
		}, {
			title: 'Lunch',
			start: this.currentYear + '-'+ this.currentMonth +'-12T12:00:00',
			color: '#00acac'
		}, {
			title: 'Meeting',
			start: this.currentYear + '-'+ this.currentMonth +'-12T14:30:00'
		}, {
			title: 'Happy Hour',
			start: this.currentYear + '-'+ this.currentMonth +'-12T17:30:00'
		}, {
			title: 'Dinner',
			start: this.currentYear + '-'+ this.currentMonth +'-12T20:00:00'
		}, {
			title: 'Birthday Party',
			start: this.currentYear + '-'+ this.currentMonth +'-13T07:00:00'
		}, {
			title: 'Click for Google',
			url: 'http://google.com/',
			start: this.currentYear + '-'+ this.currentMonth +'-28',
			color: '#ff5b57'
		}]
	};
}
