<template>
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
				<div id="timer" class="is-countdown">
					<countdown :time="2 * 24 * 60 * 60 * 1000">
						<template slot-scope="props">
							<span class="countdown-row countdown-show4">
								<span class="countdown-section">
									<span class="countdown-amount">{{ props.days }}</span>
									<span class="countdown-period">Days</span>
								</span>
								<span class="countdown-section">
									<span class="countdown-amount">{{ props.hours }}</span>
									<span class="countdown-period">Hours</span>
								</span>
								<span class="countdown-section">
									<span class="countdown-amount">{{ props.minutes }}</span>
									<span class="countdown-period">Minutes</span>
								</span>
								<span class="countdown-section">
									<span class="countdown-amount">{{ props.seconds }}</span>
									<span class="countdown-period">Seconds</span>
								</span>
							</span>
						</template>
					</countdown>
				</div>
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
				<a href="javascript:;" class="text-inverse"><i class="fab fa-facebook fa-lg fa-fw text-primary"></i> Facebook</a>
			</p>
		</div>
		<!-- end coming-soon-content -->
	</div>
	<!-- end coming-soon -->
</template>

<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	created() {
		PageOptions.pageEmpty = true;
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageEmpty = false;
		next();
	}
}
</script>