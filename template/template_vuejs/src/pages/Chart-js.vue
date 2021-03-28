<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Chart</a></li>
			<li class="breadcrumb-item active">Chart JS</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Chart JS <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Line Chart">
					<p>
						A line chart is a way of plotting data points on a line.
						Often, it is used to show trend data, and the comparison of two data sets.
					</p>
					<line-chart :data="lineChart.data" :options="lineChart.options" class="height-sm"></line-chart>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Bar Chart">
					<p>
						A bar chart is a way of showing data as bars.
						It is sometimes used to show trend data, and the comparison of multiple data sets side by side.
					</p>
					<bar-chart :data="barChart.data" :options="barChart.options" class="height-sm"></bar-chart>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Radar Chart">
					<p>
						A radar chart is a way of showing multiple data points and the variation between them.
						They are often useful for comparing the points of two or more different data sets.
					</p>
					<radar-chart :data="radarChart.data" :options="radarChart.options" class="height-sm"></radar-chart>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-xl-6">
				<!-- begin panel -->
				<panel title="Polar Area Chart">
					<p>
						Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment 
						differs depending on the value.
					</p>
					<polar-area-chart :data="polarAreaChart.data" :options="polarAreaChart.options" class="height-sm"></polar-area-chart>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
		<!-- begin row -->
		<div class="row">
			<!-- begin col-6 -->
			<div class="col-md-6">
				<!-- begin panel -->
				<panel title="Pie Chart">
					<p>
						Pie and doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.
					</p>
					<pie-chart :data="pieChart.data" :options="pieChart.options" class="height-sm"></pie-chart>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
			<!-- begin col-6 -->
			<div class="col-md-6">
				<!-- begin panel -->
				<panel title="Doughnut Chart">
					<p>
						Pie and doughnut charts are registered under two aliases in the Chart core. Other than their different default value, and different alias, they are exactly the same.
					</p>
					<doughnut-chart :data="doughnutChart.data" :options="doughnutChart.options" class="height-sm"></doughnut-chart>
				</panel>
				<!-- end panel -->
			</div>
			<!-- end col-6 -->
		</div>
		<!-- end row -->
	</div>
</template>

<script>
import LineChart from '../components/vue-chartjs/LineChart'
import BarChart from '../components/vue-chartjs/BarChart'
import RadarChart from '../components/vue-chartjs/RadarChart'
import PolarAreaChart from '../components/vue-chartjs/PolarAreaChart'
import PieChart from '../components/vue-chartjs/PieChart'
import DoughnutChart from '../components/vue-chartjs/DoughnutChart'

export default {
	components: {
		LineChart,
		BarChart,
		RadarChart,
		PolarAreaChart,
		PieChart,
		DoughnutChart
	},
	data () {
		var randomScalingFactor = function() { 
			return Math.round(Math.random()*100)
		};
		return {
			lineChart: {
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
			},
			barChart: {
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
			},
			radarChart: {
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
			},
			polarAreaChart: {
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
			},
			pieChart: {
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
			},
			doughnutChart: {
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
			}
		}	
	}
}
</script>