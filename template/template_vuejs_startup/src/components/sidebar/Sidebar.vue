<template>
	<div>
		<!-- begin #sidebar -->
		<div id="sidebar" class="sidebar" v-bind:class="{ 'sidebar-transparent': pageOptions.pageSidebarTransparent }">
			<!-- begin sidebar scrollbar -->
			<vue-custom-scrollbar class="height-full">
				<!-- begin sidebar user -->
				<sidebar-nav-profile v-if="!pageOptions.pageSidebarSearch"></sidebar-nav-profile>
				<!-- end sidebar user -->
			
				<!-- begin sidebar nav -->
				<sidebar-nav ref="sidebarNav" 
					v-bind:scrollTop="scrollTop" 
					v-on:show-float-submenu="handleShowFloatSubmenu"
					v-on:hide-float-submenu="handleHideFloatSubmenu"></sidebar-nav>
				<!-- end sidebar nav -->
			</vue-custom-scrollbar>
			<!-- end sidebar scrollbar -->
		</div>
		<div class="sidebar-bg"></div>
		<!-- end #sidebar -->
		<div class="mobile-click" v-on:click="dismissSidebar"></div>
		
		<div class="float-sub-menu-container" 
			@mouseover="clearHideFloatSubmenu"
			@mouseleave="handleHideFloatSubmenu"
			v-if="this.pageOptions.pageSidebarMinified" 
			v-bind:class="{ 
				'd-none': !this.floatSubmenu
			}"
			v-bind:style="{
				top: this.floatSubmenuTop,
				left: this.floatSubmenuLeft,
				bottom: this.floatSubmenuBottom,
				right: this.floatSubmenuRight
			}">
			<div class="float-sub-menu-arrow" v-bind:style="{
				top: this.floatSubmenuArrowTop,
				bottom: this.floatSubmenuArrowBottom,
			}"></div>
			<div class="float-sub-menu-line" v-bind:style="{
				top: this.floatSubmenuLineTop,
				bottom: this.floatSubmenuLineBottom,
			}"></div>
			<ul class="float-sub-menu">
				<template v-for="menu in this.floatSubmenuMenu">
					<sidebar-nav-list 
						ref="sidebarNavList" 
						v-bind:menu="menu" 
						v-bind:key="menu.path" 
						v-bind:status="menu.status"
						v-on:calc-float-submenu="handleCalcFloatSubmenu"></sidebar-nav-list>
				</template>
			</ul>
		</div>
	</div>
</template>

<script>
import SidebarNav from './SidebarNav.vue'
import SidebarNavProfile from './SidebarNavProfile.vue'
import SidebarNavList from './SidebarNavList.vue'
import PageOptions from '../../config/PageOptions.vue'

export default {
	name: 'Sidebar',
	components: {
		SidebarNav,
		SidebarNavProfile,
		SidebarNavList
	},
	data() {
		return {
			scrollTop: '',
			pageOptions: PageOptions,
			floatSubmenu: false,
			floatSubmenuMenu: '',
			floatSubmenuTop: '',
			floatSubmenuBottom: '',
			floatSubmenuLeft: '',
			floatSubmenuRight: '',
			floatSubmenuArrowTop: '',
			floatSubmenuArrowBottom: '',
			floatSubmenuLineTop: '',
			floatSubmenuLineBottom: '',
			clearSubmenu: '',
			subMenuOffset: ''
		}
	},
	directives: {
		scroll: {
			inserted: function (el, binding) {
				let f = function (evt) {
					if (binding.value(evt, el)) {
						el.removeEventListener('scroll', f)
					}
				}
				el.addEventListener('scroll', f)
				
				if (typeof(Storage) !== 'undefined') {
					if (localStorage.sidebarScroll) {
						el.scrollTop = localStorage.sidebarScroll;
					}
				}
			}
		}
	},
	methods: {
		handleCalcFloatSubmenu: function() {
			setTimeout(() => {
				var targetTop = this.subMenuOffset.top;
				var windowHeight = window.innerHeight;
				var targetHeight = document.querySelector('.float-sub-menu-container').offsetHeight;
				
				if ((windowHeight - targetTop) > targetHeight) {
					this.floatSubmenuTop = this.subMenuOffset.top + 'px';
					this.floatSubmenuBottom = 'auto';
					this.floatSubmenuArrowTop = '20px';
					this.floatSubmenuArrowBottom = 'auto';
					this.floatSubmenuLineTop = '20px';
					this.floatSubmenuLineBottom = 'auto';
				} else {
					this.floatSubmenuTop = 'auto';
					this.floatSubmenuBottom = '0';
					
					var arrowBottom = (windowHeight - targetTop) - 21;
					this.floatSubmenuArrowTop = 'auto';
					this.floatSubmenuArrowBottom = arrowBottom + 'px';
					this.floatSubmenuLineTop = '20px';
					this.floatSubmenuLineBottom = arrowBottom + 'px';
				}
			}, 0);
		},
		handleShowFloatSubmenu: function(data, offset) {
			this.floatSubmenuMenu = data;
			this.floatSubmenu = true;
			this.subMenuOffset = offset;
			
			var targetTop = offset.top;
			var windowHeight = window.innerHeight;
			
			setTimeout(() => {
				var targetHeight = document.querySelector('.float-sub-menu-container').offsetHeight;
				
				if ((windowHeight - targetTop) > targetHeight) {
					this.floatSubmenuTop = offset.top + 'px';
					this.floatSubmenuBottom = 'auto';
					this.floatSubmenuArrowTop = '20px';
					this.floatSubmenuArrowBottom = 'auto';
					this.floatSubmenuLineTop = '20px';
					this.floatSubmenuLineBottom = 'auto';
				} else {
					this.floatSubmenuTop = 'auto';
					this.floatSubmenuBottom = '0';
					
					var arrowBottom = (windowHeight - targetTop) - 21;
					this.floatSubmenuArrowTop = 'auto';
					this.floatSubmenuArrowBottom = arrowBottom + 'px';
					this.floatSubmenuLineTop = '20px';
					this.floatSubmenuLineBottom = arrowBottom + 'px';
				}
			}, 0);
			
			this.floatSubmenuRight = 'auto';
			this.floatSubmenuLeft = (document.getElementById('sidebar').offsetLeft + offset.width) + 'px';
			
			clearTimeout(this.clearSubmenu);
		},
		handleHideFloatSubmenu: function() {
			this.clearSubmenu = setTimeout(() => {
				this.floatSubmenu = false;
			}, 250);
		},
		clearHideFloatSubmenu: function() {
			clearTimeout(this.clearSubmenu);
		},
		handleScroll: function(evt) {
			this.scrollTop = evt.target.scrollTop;
			if (typeof(Storage) !== 'undefined') {
				localStorage.setItem('sidebarScroll', this.scrollTop);
			}
		},
		dismissSidebar: function() {
			this.pageOptions.pageMobileSidebarToggled = false;
			this.pageOptions.pageMobileRightSidebarToggled = false;
		}
	}
}
</script>
