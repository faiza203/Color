<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb pull-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Tables</a></li>
			<li class="breadcrumb-item active"><a href="javascript:;">Data Tables</a></li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Vue Data Tables <small>official documentation <a href="https://xaksis.github.io/vue-good-table/" target="_blank">here</a></small></h1>
		<!-- end page-header -->
		
		<vue-good-table 
			:columns="columns" 
			:rows="rows" 
			:lineNumbers="true"
			:search-options="{ enabled: true, placeholder: 'Search this table' }" 
			:pagination-options="{ enabled: true,  position: 'bottom' }"
			:selectOptions="{
				enabled: true,
				selectOnCheckboxOnly: true,
				selectionInfoClass: 'alert alert-info m-b-0 no-rounded-corner',
				selectionText: 'rows selected',
				clearSelectionText: 'clear',
			}"
		>
			<div slot="selected-row-actions" style="margin: -2px 0;">
				<button class="btn btn-xs btn-primary m-r-5">Action 1</button>
				<button class="btn btn-xs btn-grey">Action 2</button>
			</div>
			<template slot="table-row" slot-scope="props">
				<span v-if="props.column.field == 'image'">
					<img v-bind:src="props.row.image" class="rounded" width="24" style="margin: -3px" />
				</span>
				<span v-else>
					{{props.formattedRow[props.column.field]}}
				</span>
			</template>
		</vue-good-table>
	</div>
</template>

<script>
export default {
  data(){
    return {
      columns: [{
				label: '',
				field: 'image',
				width: '50px',
				tdClass: 'text-center text-nowrap',
				thClass: 'text-center text-nowrap'
			}, {
				label: 'Name',
				field: 'name',
				width: '15%',
				thClass: 'text-nowrap',
				tdClass: 'text-nowrap'
			}, {
				label: 'Job',
				field: 'job',
				thClass: 'text-nowrap',
				tdClass: 'text-nowrap'
			}, {
				label: 'Age',
				field: 'age',
				type: 'number',
				width: '10%',
				tdClass: 'text-center text-nowrap',
				thClass: 'text-center text-nowrap'
			}, {
				label: 'Created On',
				field: 'createdAt',
				type: 'date',
				dateInputFormat: 'yyyy-mm-dd',
				dateOutputFormat: 'MMM Do yy',
				width: '10%',
				tdClass: 'text-center text-nowrap',
				thClass: 'text-center text-nowrap'
			}, {
				label: 'Percent',
				field: 'score',
				type: 'percentage',
				width: '10%',
				tdClass: 'text-center f-s-14 f-w-600 text-inverse p-t-0 p-b-0 valign-middle text-nowrap',
				thClass: 'text-center text-nowrap'
			}],
      rows: [
        { id:1, image: '/assets/img/user/user-1.jpg', name:'John', job: 'Frontend Developer', age: 20, createdAt: '2018-10-31',score: 0.036 },
        { id:2, image: '/assets/img/user/user-2.jpg', name:'Jane', job: 'Frontend Developer', age: 24, createdAt: '2018-10-31', score: 0.038 },
        { id:3, image: '/assets/img/user/user-3.jpg', name:'Susan', job: 'Android Developer', age: 16, createdAt: '2018-10-30', score: 0.031 },
        { id:4, image: '/assets/img/user/user-4.jpg', name:'Chris', job: 'iOS Developer', age: 55, createdAt: '2018-10-11', score: 0.033 },
        { id:5, image: '/assets/img/user/user-5.jpg', name:'Dan', job: 'Team Leader', age: 40, createdAt: '2018-10-21', score: 0.037 },
        { id:6, image: '/assets/img/user/user-6.jpg', name:'Mollie', job: 'Backend Developer', age: 20, createdAt: '2018-10-31', score: 0.032 },
        { id:7, image: '/assets/img/user/user-7.jpg', name:'Bert', job: 'Backend Developer', age: 23, createdAt: '2018-10-31', score: 0.029 },
        { id:8, image: '/assets/img/user/user-8.jpg', name:'Jorja', job: 'Android Developer', age: 34, createdAt: '2018-10-31', score: 0.028 },
        { id:9, image: '/assets/img/user/user-9.jpg', name:'Shannon', job: 'Android Developer', age: 42, createdAt: '2018-10-31', score: 0.028 },
        { id:10, image: '/assets/img/user/user-10.jpg', name:'Emilia', job: 'iOS Developer', age: 33, createdAt: '2018-10-31', score: 0.033 },
        { id:11, image: '/assets/img/user/user-11.jpg', name:'Kierran', job: 'Java Developer', age: 22, createdAt: '2018-10-31', score: 0.034 },
        { id:12, image: '/assets/img/user/user-12.jpg', name:'Anum', job: 'Java Developer', age: 20, createdAt: '2018-10-31', score: 0.029 },
        { id:13, image: '/assets/img/user/user-13.jpg', name:'Georgia', job: 'Java Developer', age: 20, createdAt: '2018-10-31', score: 0.029 },
        { id:14, image: '/assets/img/user/user-14.jpg', name:'Nazifa', job: 'Java Developer', age: 34, createdAt: '2018-10-31', score: 0.029 },
        { id:15, image: '/assets/img/user/user-1.jpg', name:'Huzaifa', job: 'Java Developer', age: 43, createdAt: '2018-10-31', score: 0.029 },
      ],
    };
  }
}
</script>