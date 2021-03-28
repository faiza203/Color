<template>
	<!-- BEGIN pos-kitchen -->
	<div class="pos pos-kitchen" id="pos-kitchen">
		<div class="pos-kitchen-header">
			<div class="logo">
				<router-link to="/pos/counter-checkout">
					<div class="logo-img"><img src="/assets/img/pos/logo.svg" /></div>
					<div class="logo-text">Pine & Dine</div>
				</router-link>
			</div>
			<div class="time" id="time">{{ time }}</div>
			<div class="nav">
				<div class="nav-item">
					<router-link to="/pos/kitchen-order" class="nav-link">
						<svg viewBox="0 0 16 16" class="nav-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/>
						</svg>
					</router-link>
				</div>
				<div class="nav-item">
					<router-link to="/pos/table-booking" class="nav-link">
						<svg viewBox="0 0 16 16" class="nav-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
							<path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
						</svg>
					</router-link>
				</div>
				<div class="nav-item">
					<router-link to="/pos/menu-stock" class="nav-link">
						<svg viewBox="0 0 16 16" class="nav-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
							<path fill-rule="evenodd" d="M7.5 7.793V1h1v6.5H15v1H8.207l-4.853 4.854-.708-.708L7.5 7.793z"/>
						</svg>
					</router-link>
				</div>
			</div>
		</div>
		<div class="pos-kitchen-body">
			<div class="pos-task-row">
				<div class="pos-task">
					<div class="pos-task-info">
						<div class="table-no">
							Table <b>05</b>
						</div>
						<div class="order-no">
							Order No: #9049
						</div>
						<div class="order-type">
							<span class="label label-success">Dine-in</span>
						</div>
						<div class="time-pass" data-start-time="3">
							07:13 time
						</div>
					</div>
					<div class="pos-task-body">
						<div class="pos-task-completed">
							Completed: <b>(1/3)</b>
						</div>
						<div class="pos-task-product-row">
							<div class="pos-task-product">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-2.jpg);"></div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Pork Burger</div>
										<div class="desc">
											- large size<br />
											- extra cheese<br />
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success">Complete</a>
									<a href="#" class="btn btn-outline-inverse">Cancel</a>
								</div>
							</div>
							<div class="pos-task-product">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-14.jpg);"></div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Macarons</div>
										<div class="desc">
											- serve after dishes
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success">Complete</a>
									<a href="#" class="btn btn-outline-inverse">Cancel</a>
								</div>
							</div>
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-8.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Vita C Detox Juice</div>
										<div class="desc">
											- large size<br />
											- less ice<br />
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="pos-task">
					<div class="pos-task-info">
						<div class="table-no">
							Table <b>14</b>
						</div>
						<div class="order-no">
							Order No: #9047
						</div>
						<div class="order-type">
							<span class="label label-success">Dine-in</span>
						</div>
						<div class="time-pass" data-start-time="3">
							<span class="text-danger">12:13</span> time
						</div>
					</div>
					<div class="pos-task-body">
						<div class="pos-task-completed">
							Completed: <b>(3/4)</b>
						</div>
						<div class="pos-task-product-row">
							<div class="pos-task-product">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-11.jpg);"></div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Baked chicken wing</div>
										<div class="desc">
											- 6 pieces<br />
											- honey source<br />
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success">Complete</a>
									<a href="#" class="btn btn-outline-inverse">Cancel</a>
								</div>
							</div>
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-12.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Veggie Spaghetti</div>
										<div class="desc">
											- size: large <br />
											- spicy level: light
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-7.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Coffee Latte</div>
										<div class="desc">
											- no sugar<br />
											- more cream<br />
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-1.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Grill Chicken Chop</div>
										<div class="desc">
											- ala carte
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="pos-task">
					<div class="pos-task-info">
						<div class="table-no">
							Table <b>17</b>
						</div>
						<div class="order-no">
							Order No: #9046
						</div>
						<div class="order-type">
							<span class="label bg-gray-500">Dine-in</span>
						</div>
						<div class="time-pass" data-start-time="3">
							All dish served<br />12:30 total time
						</div>
					</div>
					<div class="pos-task-body">
						<div class="pos-task-completed">
							Completed: <b>(3/3)</b>
						</div>
						<div class="pos-task-product-row">
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-2.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Pork Burger</div>
										<div class="desc">
											- large size<br />
											- extra cheese<br />
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-10.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Mushroom soup</div>
										<div class="desc">
											- ala carte<br />
											- more cheese<br />
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-8.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Vita C Detox Juice</div>
										<div class="desc">
											- large size<br />
											- less ice<br />
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="pos-task">
					<div class="pos-task-info">
						<div class="table-no">
							Table <b>18</b>
						</div>
						<div class="order-no">
							Order No: #9045
						</div>
						<div class="order-type">
							<span class="label bg-gray-500">Dine-in</span>
						</div>
						<div class="time-pass" data-start-time="3">
							All dish served<br />12:30 total time
						</div>
					</div>
					<div class="pos-task-body">
						<div class="pos-task-completed">
							Completed: <b>(2/2)</b>
						</div>
						<div class="pos-task-product-row">
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-13.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Vanilla Ice Cream</div>
										<div class="desc">
											- ala carte
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-9.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Pancake</div>
										<div class="desc">
											- ala carte
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="pos-task">
					<div class="pos-task-info">
						<div class="table-no">
							Table <b>02</b>
						</div>
						<div class="order-no">
							Order No: #9045
						</div>
						<div class="order-type">
							<span class="label bg-gray-500">Take Away</span>
						</div>
						<div class="time-pass" data-start-time="3">
							All dish served<br />22:28 total time
						</div>
					</div>
					<div class="pos-task-body">
						<div class="pos-task-completed">
							Completed: <b>(3/3)</b>
						</div>
						<div class="pos-task-product-row">
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-4.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Vegan Salad Bowl&reg;</div>
										<div class="desc">
											- ala carte
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-6.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Avocado Shake</div>
										<div class="desc">
											- ala carte
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
							<div class="pos-task-product completed">
								<div class="pos-task-product-img">
									<div class="cover" style="background-image: url(/assets/img/pos/product-5.jpg);"></div>
									<div class="caption">
										<div>Completed</div>
									</div>
								</div>
								<div class="pos-task-product-info">
									<div class="info">
										<div class="title">Hawaiian Pizza&reg;</div>
										<div class="desc">
											- ala carte
										</div>
									</div>
									<div class="qty">
										x1
									</div>
								</div>
								<div class="pos-task-product-action">
									<a href="#" class="btn btn-success disabled">Complete</a>
									<a href="#" class="btn btn-outline-inverse disabled">Cancel</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- END pos-kitchen -->
</template>

<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	created() {
		PageOptions.pageEmpty = true;
		PageOptions.pageFullHeight = true;
		this.handleStartTime();
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageEmpty = false;
		PageOptions.pageFullHeight = false;
		next();
	},
	data: function () {
    return {
      time: '00:00',
      posMobileSidebar: false
    }
  },
  methods: {
		posMobileSidebarToggled: function() {
			this.posMobileSidebar = !this.posMobileSidebar;
		},
		handleCheckTime: function(i) {
			if (i < 10) {
				i = '0' + i;
			}
			return i;
		},
		handleStartTime: function() {
			var today = new Date();
			var h = today.getHours();
			var m = today.getMinutes();
			var a;
			m = this.handleCheckTime(m);
			a = (h > 11) ? 'pm' : 'am';
			h = (h > 12) ? h - 12 : h;
			
			this.time = h + ':' + m + a;
			setTimeout(() => {
				this.handleStartTime();
			}, 500);
		}
  }
}
</script>