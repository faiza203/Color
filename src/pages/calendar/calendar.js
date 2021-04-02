import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { Link } from 'react-router-dom';

class Calendar extends React.Component {
	constructor(props) {
		super(props);
		
		var date = new Date();
		var currentYear = date.getFullYear();
		var currentMonth = date.getMonth() + 1;
				currentMonth = (currentMonth < 10) ? '0' + currentMonth : currentMonth;
		
		this.state = {
			events: [{
				title: 'All Day Event',
				start: currentYear + '-'+ currentMonth +'-01',
				color: '#00ACAC'
			}, {
				title: 'Long Event',
				start: currentYear + '-'+ currentMonth +'-07',
				end: currentYear + '-'+ currentMonth +'-10'
			}, {
				id: 999,
				title: 'Repeating Event',
				start: currentYear + '-'+ currentMonth +'-09T16:00:00',
				color: '#00ACAC'
			}, {
				id: 999,
				title: 'Repeating Event',
				start: currentYear + '-'+ currentMonth +'-16T16:00:00'
			}, {
				title: 'Conference',
				start: currentYear + '-'+ currentMonth +'-11',
				end: currentYear + '-'+ currentMonth +'-13'
			}, {
				title: 'Meeting',
				start: currentYear + '-'+ currentMonth +'-12T10:30:00',
				end: currentYear + '-'+ currentMonth +'-12T12:30:00',
				color: '#00ACAC'
			}, {
				title: 'Lunch',
				start: currentYear + '-'+ currentMonth +'-12T12:00:00',
				color: '#348fe2'
			}, {
				title: 'Meeting',
				start: currentYear + '-'+ currentMonth +'-12T14:30:00'
			}, {
				title: 'Happy Hour',
				start: currentYear + '-'+ currentMonth +'-12T17:30:00'
			}, {
				title: 'Dinner',
				start: currentYear + '-'+ currentMonth +'-12T20:00:00'
			}, {
				title: 'Birthday Party',
				start: currentYear + '-'+ currentMonth +'-13T07:00:00'
			}, {
				title: 'Click for Google',
				url: 'http://google.com/',
				start: currentYear + '-'+ currentMonth +'-28',
				color: '#ff5b57'
			}],
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
			}
		}
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/calendar">Home</Link></li>
					<li className="breadcrumb-item active">Calendar</li>
				</ol>
				<h1 className="page-header">Calendar <small>header small text goes here...</small></h1>
				<hr />
				
				<FullCalendar 
					plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, bootstrapPlugin ]}
					initialView="dayGridMonth"
					themeSystem="bootstrap"
					headerToolbar={this.state.headerToolbar}
					buttonText={this.state.buttonText}
					events={this.state.events}
				/>
			</div>
		)
	}
}

export default Calendar;