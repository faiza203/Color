<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb float-xl-right">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Gallery</a></li>
			<li class="breadcrumb-item active">Gallery v1</li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Gallery <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		<!-- begin #options -->
		<div id="options" class="m-b-10">
			<span class="gallery-option-set" id="filter" data-option-key="filter">
			<a href="javascript:;" v-on:click="show('all')" v-bind:class="{ 'active': gallery.group1 && gallery.group2 && gallery.group3 && gallery.group4 }" class="btn btn-default btn-xs" data-option-value="*">Show All</a>
			<a href="javascript:;" v-on:click="show('1')" v-bind:class="{ 'active': gallery.group1 && !gallery.group2 && !gallery.group3 && !gallery.group4 }" class="btn btn-default btn-xs" data-option-value=".gallery-group-1">Gallery Group 1</a>
			<a href="javascript:;" v-on:click="show('2')" v-bind:class="{ 'active': gallery.group2 && !gallery.group1 && !gallery.group3 && !gallery.group4 }" class="btn btn-default btn-xs" data-option-value=".gallery-group-2">Gallery Group 2</a>
			<a href="javascript:;" v-on:click="show('3')" v-bind:class="{ 'active': gallery.group3 && !gallery.group2 && !gallery.group1 && !gallery.group4 }" class="btn btn-default btn-xs" data-option-value=".gallery-group-3">Gallery Group 3</a>
			<a href="javascript:;" v-on:click="show('4')" v-bind:class="{ 'active': gallery.group4 && !gallery.group2 && !gallery.group3 && !gallery.group1 }" class="btn btn-default btn-xs" data-option-value=".gallery-group-4">Gallery Group 4</a>
			</span>
		</div>
		<!-- end #options -->
		<!-- begin #gallery -->
		<div id="gallery" class="gallery">
			<!-- begin image -->
			<div class="image pull-left" v-show="gallery.group1">
				<div class="image-inner">
					<a href="/assets/img/gallery/gallery-1.jpg" data-lightbox="gallery-group-1">
					<img src="/assets/img/gallery/gallery-1.jpg" alt="" />
					</a>
					<p class="image-caption">
						#1382 - 3D Arch
					</p>
				</div>
				<div class="image-info">
					<h5 class="title">Lorem ipsum dolor sit amet</h5>
					<div class="pull-right">
						<small>by</small> <a href="javascript:;">Sean Ngu</a>
					</div>
					<div class="rating">
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star"></span>
						<span class="star"></span>
					</div>
					<div class="desc">
						Nunc velit urna, aliquam at interdum sit amet, lacinia sit amet ligula. Quisque et erat eros. Aenean auctor metus in tortor placerat, non luctus justo blandit.
					</div>
				</div>
			</div>
			<!-- end image -->
			<!-- begin image -->
			<div class="image pull-left" v-show="gallery.group1">
				<div class="image-inner">
					<a href="/assets/img/gallery/gallery-2.jpg" data-lightbox="gallery-group-1">
					<img src="/assets/img/gallery/gallery-2.jpg" alt="" />
					</a>
					<p class="image-caption">
						#2343 - Madness Arch
					</p>
				</div>
				<div class="image-info">
					<h5 class="title">Fusce aliquet ac quam at tincidunt</h5>
					<div class="pull-right">
						<small>by</small> <a href="javascript:;">Camryn Wong</a>
					</div>
					<div class="rating">
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
					</div>
					<div class="desc">
						Fusce eu rutrum nisi, ut pretium mi. Sed mollis nisi sed auctor molestie. Vestibulum dictum pharetra leo sed euismod.
					</div>
				</div>
			</div>
			<!-- end image -->
			<!-- begin image -->
			<div class="image pull-left" v-show="gallery.group1">
				<div class="image-inner">
					<a href="/assets/img/gallery/gallery-3.jpg" data-lightbox="gallery-group-1">
					<img src="/assets/img/gallery/gallery-3.jpg" alt="" />
					</a>
					<p class="image-caption">
						#3452 - Scottwills Arch
					</p>
				</div>
				<div class="image-info">
					<h5 class="title">Etiam lobortis egestas nisl</h5>
					<div class="pull-right">
						<small>by</small> <a href="javascript:;">Lelouch Wong</a>
					</div>
					<div class="rating">
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star active"></span>
					</div>
					<div class="desc">
						Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus eget ultricies arcu.
					</div>
				</div>
			</div>
			<!-- end image -->
			<!-- begin image -->
			<div class="image pull-left" v-show="gallery.group2">
				<div class="image-inner">
					<a href="/assets/img/gallery/gallery-4.jpg" data-lightbox="gallery-group-2">
					<img src="/assets/img/gallery/gallery-4.jpg" alt="" />
					</a>
					<p class="image-caption">
						#4123 - Scottwills Pinecone
					</p>
				</div>
				<div class="image-info">
					<h5 class="title">Donec mi quis volutpat ornare</h5>
					<div class="pull-right">
						<small>by</small> <a href="javascript:;">Richard Leong</a>
					</div>
					<div class="rating">
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
					</div>
					<div class="desc">
						Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et augue luctus libero dignissim sodales, sapien consequat lacinia fringilla.
					</div>
				</div>
			</div>
			<!-- end image -->
			<!-- begin image -->
			<div class="image pull-left" v-show="gallery.group2">
				<div class="image-inner">
					<a href="/assets/img/gallery/gallery-5.jpg" data-lightbox="gallery-group-2">
					<img src="/assets/img/gallery/gallery-5.jpg" alt="" />
					</a>
					<p class="image-caption">
						#9200 Kariminal Rider
					</p>
				</div>
				<div class="image-info">
					<h5 class="title">Donec pretium volutpat ornare</h5>
					<div class="pull-right">
						<small>by</small> <a href="javascript:;">Derrick Wong</a>
					</div>
					<div class="rating">
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star"></span>
					</div>
					<div class="desc">
						Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et augue luctus libero, feugiat sapien consequat lacinia fringilla.
					</div>
				</div>
			</div>
			<!-- end image -->
			<!-- begin image -->
			<div class="image pull-left" v-show="gallery.group3">
				<div class="image-inner">
					<a href="/assets/img/gallery/gallery-6.jpg" data-lightbox="gallery-group-3">
					<img src="/assets/img/gallery/gallery-6.jpg" alt="" />
					</a>
					<p class="image-caption">
						#1832 Scottwills Autumn
					</p>
				</div>
				<div class="image-info">
					<h5 class="title">Mi quis volutpat ornare sodales</h5>
					<div class="pull-right">
						<small>by</small> <a href="javascript:;">Apple Tong</a>
					</div>
					<div class="rating">
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
					</div>
					<div class="desc">
						Ut et augue luctus libero dignissim sodales. Fusce feugiat sapien consequat lacinia fringilla. Vivamus eget ultricies arcu.
					</div>
				</div>
			</div>
			<!-- end image -->
			<!-- begin image -->
			<div class="image pull-left" v-show="gallery.group3">
				<div class="image-inner">
					<a href="/assets/img/gallery/gallery-7.jpg" data-lightbox="gallery-group-3">
					<img src="/assets/img/gallery/gallery-7.jpg" alt="" />
					</a>
					<p class="image-caption">
						#0229 Scottwills Autumn 2
					</p>
				</div>
				<div class="image-info">
					<h5 class="title">Vestibulum ante ipsum primis</h5>
					<div class="pull-right">
						<small>by</small> <a href="javascript:;">Thomas Wong</a>
					</div>
					<div class="rating">
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star"></span>
						<span class="star"></span>
					</div>
					<div class="desc">
						Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et augue luctus libero dignissim sodales, sapien consequat lacinia fringilla.
					</div>
				</div>
			</div>
			<!-- end image -->
			<!-- begin image -->
			<div class="image pull-left" v-show="gallery.group4">
				<div class="image-inner">
					<a href="/assets/img/gallery/gallery-8.jpg" data-lightbox="gallery-group-4">
					<img src="/assets/img/gallery/gallery-8.jpg" alt="" />
					</a>
					<p class="image-caption">
						#5721 Scottwills Snow
					</p>
				</div>
				<div class="image-info">
					<h5 class="title">Nunc eget hendrerit nisi sodales</h5>
					<div class="pull-right">
						<small>by</small> <a href="javascript:;">Andy Wong</a>
					</div>
					<div class="rating">
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star active"></span>
					</div>
					<div class="desc">
						Ut et augue nisi sodales luctus libero dignissim sodales. Fusce feugiat nisi sodales sapien consequat lacinia fringilla.
					</div>
				</div>
			</div>
			<!-- end image -->
			<!-- begin image -->
			<div class="image pull-left" v-show="gallery.group4">
				<div class="image-inner">
					<a href="/assets/img/gallery/gallery-9.jpg" data-lightbox="gallery-group-4">
					<img src="/assets/img/gallery/gallery-9.jpg" alt="" />
					</a>
					<p class="image-caption">
						#9921 Scottwills Riverbank
					</p>
				</div>
				<div class="image-info">
					<h5 class="title">Nunc eget hendrerit nisi dignissim</h5>
					<div class="pull-right">
						<small>by</small> <a href="javascript:;">William Tan</a>
					</div>
					<div class="rating">
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
					</div>
					<div class="desc">
						Ut et augue luctus libero dignissim sodales. Fusce feugiat sapien consequat libero dignissim lacinia fringilla.
					</div>
				</div>
			</div>
			<!-- end image -->
			<!-- begin image -->
			<div class="image pull-left" v-show="gallery.group4">
				<div class="image-inner">
					<a href="/assets/img/gallery/gallery-10.jpg" data-lightbox="gallery-group-4">
					<img src="/assets/img/gallery/gallery-10.jpg" alt="" />
					</a>
					<p class="image-caption">
						#6436 Scottwills Buss
					</p>
				</div>
				<div class="image-info">
					<h5 class="title">Sed mollis nisi sed auctor</h5>
					<div class="pull-right">
						<small>by</small> <a href="javascript:;">David King</a>
					</div>
					<div class="rating">
						<span class="star active"></span>
						<span class="star active"></span>
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
					</div>
					<div class="desc">
						Vestibulum dictum pharetra leo sed euismod. Lorem ipsum dolor sit amet, consectetur adipiscing feugiat sapien elit.
					</div>
				</div>
			</div>
			<!-- end image -->
		</div>
		<!-- end #gallery -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			gallery: {
				group1: true,
				group2: true,
				group3: true,
				group4: true
			}
		}
	},
	methods: {
		show: function(x) {
			switch (x) {
				case 'all':
					this.gallery.group1 = true;
					this.gallery.group2 = true;
					this.gallery.group3 = true;
					this.gallery.group4 = true;
					break;
				case '1':
					this.gallery.group1 = true;
					this.gallery.group2 = false;
					this.gallery.group3 = false;
					this.gallery.group4 = false;
					break;
				case '2':
					this.gallery.group1 = false;
					this.gallery.group2 = true;
					this.gallery.group3 = false;
					this.gallery.group4 = false;
					break;
				case '3':
					this.gallery.group1 = false;
					this.gallery.group2 = false;
					this.gallery.group3 = true;
					this.gallery.group4 = false;
					break;
				case '4':
					this.gallery.group1 = false;
					this.gallery.group2 = false;
					this.gallery.group3 = false;
					this.gallery.group4 = true;
					break;
			}
		}
	}
}
</script>