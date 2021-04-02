import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { Line, Bar, Radar, Polar, Pie, Doughnut } from 'react-chartjs-2';

class ChartJS extends React.Component {
	constructor(props) {
		super(props);
		
		var randomScalingFactor = function() { 
			return Math.round(Math.random()*100)
		};
		
		this.lineChart = {
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
						label: 'Dataset 1',
						borderColor: '#348fe2',
						pointBackgroundColor: '#348fe2',
						pointRadius: 2,
						borderWidth: 2,
						backgroundColor: 'rgba(52, 143, 226, 0.3)',
						data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
				}, {
						label: 'Dataset 2',
						borderColor: '#2d353c',
						pointBackgroundColor: '#2d353c',
						pointRadius: 2,
						borderWidth: 2,
						backgroundColor: 'rgba(45, 53, 60, 0.3)',
						data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
				}]
			},
			options: {
				responsive: true, 
				maintainAspectRatio: false,
				hover: {
					mode: 'nearest',
					intersect: true
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true,
							max: 100
						}
					}]
				}
			}
		};
		
		this.barChart = {
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'Dataset 1',
					borderWidth: 2,
					borderColor: '#727cb6',
					backgroundColor: 'rgba(114, 124, 182, 0.3)',
					data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
				}, {
					label: 'Dataset 2',
					borderWidth: 2,
					borderColor: '#2d353c',
					backgroundColor: 'rgba(45, 53, 60, 0.3)',
					data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
				}]
			},
			options: {
				responsive: true, 
				maintainAspectRatio: false
			}
		};
		
		this.radarChart = {
			data: {
				labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
				datasets: [{
					label: 'Dataset 1',
					borderWidth: 2,
					borderColor: '#ff5b57',
					pointBackgroundColor: '#ff5b57',
					pointRadius: 2,
					backgroundColor: 'rgba(255, 91, 87, 0.2)',
					data: [65,59,90,81,56,55,40]
				}, {
					label: 'Dataset 2',
					borderWidth: 2,
					borderColor: '#2d353c',
					pointBackgroundColor: '#2d353c',
					pointRadius: 2,
					backgroundColor: 'rgba(45, 53, 60, 0.2)',
					data: [28,48,40,19,96,27,100]
				}]
			},
			options: {
				responsive: true, 
				maintainAspectRatio: false
			}
		};
		
		this.polarAreaChart = {
			data: {
				labels: ['Dataset 1', 'Dataset 2', 'Dataset 3', 'Dataset 4', 'Dataset 5'],
				datasets: [{
					data: [300, 160, 100, 200, 120],
					backgroundColor: ['rgba(114, 124, 182, 0.7)', 'rgba(52, 143, 226, 0.7)', 'rgba(0, 172, 172, 0.7)', 'rgba(182, 194, 201, 0.7)', 'rgba(45, 53, 60, 0.7)'],
					borderColor: ['#727cb6', '#348fe2', '#00ACAC', '#b6c2c9', '#2d353c'],
					borderWidth: 2,
					label: 'My dataset'
				}]
			},
			options: {
				responsive: true, 
				maintainAspectRatio: false
			}
		};
		
		this.pieChart = {
			data: {
				labels: ['Dataset 1', 'Dataset 2', 'Dataset 3', 'Dataset 4', 'Dataset 5'],
				datasets: [{
					data: [300, 50, 100, 40, 120],
					backgroundColor: ['rgba(255, 91, 87, 0.7)', 'rgba(245, 156, 26, 0.7)', 'rgba(240, 243, 244, 0.7)', 'rgba(182, 194, 201, 0.7)', 'rgba(45, 53, 60, 0.7)'],
					borderColor: ['#ff5b57', '#f59c1a', '#b4b6b7', '#b6c2c9', '#2d353c'],
					borderWidth: 2,
					label: 'My dataset'
				}]
			},
			options: {
				responsive: true, 
				maintainAspectRatio: false
			}
		};
		
		this.doughnutChart = {
			data: {
				labels: ['Dataset 1', 'Dataset 2', 'Dataset 3', 'Dataset 4', 'Dataset 5'],
				datasets: [{
					data: [300, 50, 100, 40, 120],
					backgroundColor: ['rgba(114, 124, 182, 0.7)', 'rgba(52, 143, 226, 0.7)', 'rgba(0, 172, 172, 0.7)', 'rgba(182, 194, 201, 0.7)', 'rgba(45, 53, 60, 0.7)'],
					borderColor: ['#727cb6', '#348fe2', '#00ACAC', '#b6c2c9', '#2d353c'],
					borderWidth: 2,
					label: 'My dataset'
				}]
			},
			options: {
				responsive: true, 
				maintainAspectRatio: false
			}
		};
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/chart/js">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/chart/js">Chart</Link></li>
					<li className="breadcrumb-item active">Chart JS</li>
				</ol>
				<h1 className="page-header">Chart JS <small>header small text goes here...</small></h1>
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Line Chart</PanelHeader>
							<PanelBody>
								<p>
									A line chart is a way of plotting data points on a line.
									Often, it is used to show trend data, and the comparison of two data sets.
								</p>
								<div style={{ height: '300px'}}>
									<Line data={this.lineChart.data} options={this.lineChart.options} />
								</div>
							</PanelBody>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Bar Chart</PanelHeader>
							<PanelBody>
								<p>
									A bar chart is a way of showing data as bars.
									It is sometimes used to show trend data, and the comparison of multiple data sets side by side.
								</p>
								<div style={{ height: '300px'}}>
									<Bar data={this.barChart.data} options={this.barChart.options} />
								</div>
							</PanelBody>
						</Panel>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Radar Chart</PanelHeader>
							<PanelBody>
								<p>
									A radar chart is a way of showing multiple data points and the variation between them.
									They are often useful for comparing the points of two or more different data sets.
								</p>
								<div style={{ height: '300px'}}>
									<Radar data={this.radarChart.data} options={this.radarChart.options} />
								</div>
							</PanelBody>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>Polar Area Chart</PanelHeader>
							<PanelBody>
								<p>
									Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment 
									differs depending on the value.
								</p>
								<div style={{ height: '300px'}}>
									<Polar data={this.polarAreaChart.data} options={this.polarAreaChart.options} />
								</div>
							</PanelBody>
						</Panel>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<Panel>
							<PanelHeader>Pie Chart</PanelHeader>
							<PanelBody>
								<p>
									Pie and doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.
								</p>
								<div style={{ height: '300px'}}>
									<Pie data={this.pieChart.data} options={this.pieChart.options} />
								</div>
							</PanelBody>
						</Panel>
					</div>
					<div className="col-md-6">
						<Panel>
							<PanelHeader>Doughnut Chart</PanelHeader>
							<PanelBody>
								<p>
									Pie and doughnut charts are registered under two aliases in the Chart core. Other than their different default value, and different alias, they are exactly the same.
								</p>
								<div style={{ height: '300px'}}>
									<Doughnut data={this.doughnutChart.data} options={this.doughnutChart.options} />
								</div>
							</PanelBody>
						</Panel>
					</div>
				</div>
			</div>
		)
	}
}

export default ChartJS;