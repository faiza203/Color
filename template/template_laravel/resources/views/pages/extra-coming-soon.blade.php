@extends('layouts.empty', ['paceTop' => true, 'bodyExtraClass' => 'bg-white'])

@section('title', 'Coming Soon Page')

@push('css')
    <link href="/assets/plugins/countdown/jquery.countdown.css" rel="stylesheet" />
@endpush

@section('content')
	<!-- begin coming-soon -->
	<div class="coming-soon">
		<!-- begin coming-soon-header -->
		<div class="coming-soon-header">
			<div class="bg-cover"></div>
			<div class="brand">
				<span class="logo"></span> <b>Color</b> Admin
			</div>
			<div class="desc">
				Our website is almost there and it’s rebuilt from scratch! A lot of great new features <br />and improvements are coming.
			</div>
			<div class="timer">
				<div id="timer"></div>
			</div>
		</div>
		<!-- end coming-soon-header -->
		<!-- begin coming-soon-content -->
		<div class="coming-soon-content">
			<div class="desc">
				We are launching a closed <b>beta</b> soon!<br /> Sign up to try it before others and be the first to know when we <b>launch</b>.
			</div>
			<div class="input-group">
				<input type="text" class="form-control" placeholder="Email Address" />
				<div class="input-group-append">
					<button type="button" class="btn btn-inverse">Notify Me</button>
				</div>
			</div>
			<p class="help-block m-b-25"><i>We don't spam. Your email address is secure with us.</i></p>
			<p>
				Follow us on 
				<a href="javascript:;" class="text-inverse"><i class="fab fa-twitter fa-lg fa-fw text-info"></i> Twitter</a> and 
				<a href="javascript:;" class="text-inverse"><i class="fab fa-facebook fa-lg fa-fw text-blue"></i> Facebook</a>
			</p>
		</div>
		<!-- end coming-soon-content -->
	</div>
	<!-- end coming-soon -->
@endsection

@push('scripts')
  <script src="/assets/plugins/countdown/jquery.plugin.min.js"></script>
	<script src="/assets/plugins/countdown/jquery.countdown.min.js"></script>
	<script src="/assets/js/demo/coming-soon.demo.js"></script>
@endpush