<template>
	<!-- menu with submenu -->
	<li v-if="menu.children" class="has-sub" v-bind:class="{ 'active': subIsActive(menu.path), 'expand': this.stat =='expand', 'd-none': this.stat =='hide' }">
		<a href="#" v-on:click.prevent.stop="expand($event)" @mouseover="mouseOver(menu.children, $event)" @mouseleave="hideFloatSubmenu">
			<span v-if="menu.badge" class="badge pull-right">{{ menu.badge }}</span>
			<b v-else class="caret"></b>
			<i v-if="menu.icon" v-bind:class="menu.icon"></i>
			<div v-if="menu.img" class="icon-img"><img v-bind:src="menu.img" alt="" /></div>
			<span>
				{{ menu.title }}
				<span v-if="menu.label" class="label label-theme">{{ menu.label }}</span>
				<i v-if="menu.highlight" class="fa fa-paper-plane text-theme"></i>
			</span>
		</a>
		<ul class="sub-menu" v-bind:class="{ 'd-block': this.stat == 'expand', 'd-none': this.stat == 'collapse' }" v-bind:style="{ marginTop: (pageOptions.pageSidebarMinified) ? - (scrollTop + 40) + 'px' : '' }">
			<template v-for="submenu in menu.children">
				<sidebar-nav-list v-bind:menu="submenu" v-bind:key="submenu.path" ref="sidebarNavList" v-on:calc-float-submenu="handleCalcFloatSubmenu" v-on:collapse-other="handleCollapseOther(submenu)"></sidebar-nav-list>
			</template>
		</ul>
	</li>
  
	<!-- menu without submenu -->
	<router-link v-else v-bind:to="menu.path" v-bind:class="{ 'd-none': this.stat =='hide' }" active-class="active" tag="li" v-on:click.native="collapseOther()">
		<a>
			<span v-if="menu.badge" class="badge pull-right">{{ menu.badge }}</span>
			<i v-if="menu.icon" v-bind:class="menu.icon"></i>
			<div v-if="menu.img" class="icon-img"><img v-bind:src="menu.img" alt="" /></div>
			<span>
				{{ menu.title }}
				<i v-if="menu.highlight" class="fa fa-paper-plane text-theme"></i>
				<span v-if="menu.label" class="label label-theme">{{ menu.label }}</span>
			</span>
		</a>
	</router-link>
</template>

<script>
import SidebarNavList from './SidebarNavList.vue'
import PageOptions from '../../config/PageOptions.vue'

export default {
	name: 'SidebarNavList',
	props: ['menu', 'scrollTop'],
	components: {
		SidebarNavList
	},
	data() {
		return {
			stat: '',
			pageOptions: PageOptions
		}
	},
	methods: {
		mouseOver: function(data, event) {
			if (this.pageOptions.pageSidebarMinified) {
				var offset = event.target.offsetParent.getBoundingClientRect();
				this.$emit('show-float-submenu', data, offset);
			}
		},
		hideFloatSubmenu: function() {
			if (this.pageOptions.pageSidebarMinified) {
				this.$emit('hide-float-submenu');
			}
		},
		expand: function() {
			if (this.stat == '') {
				this.stat = (this.subIsActive(this.menu.path)) ? 'collapse' : 'expand';
			} else {
				this.stat = (this.stat == 'expand') ? 'collapse' : 'expand'
			}
			this.$emit('collapse-other', this.menu);
			
			if (this.pageOptions.pageSidebarMinified) {
				this.$emit('calc-float-submenu');
			}
		},
		handleCalcFloatSubmenu: function() {
			if (this.pageOptions.pageSidebarMinified) {
				this.$emit('calc-float-submenu');
			}
		},
		collapse: function(menu) {
			if (this.menu != menu) {
				this.stat = 'collapse'
			}
		},
		hide: function() {
			this.stat = 'hide'
		},
		show: function() {
			this.stat = '';
		},
		searchExpand: function() {
			this.stat = 'expand'
		},
		collapseOther: function() {
			this.$emit('collapse-other', this.menu)
		},
		handleCollapseOther: function(menu) {
			for (var i = 0; i < this.menu.children.length; i++) {
				this.$refs.sidebarNavList[i].collapse(menu);
			}
		},
		subIsActive(path) {
			const paths = Array.isArray(path) ? path : [path]
			return paths.some(path => {
				return this.$route.path.indexOf(path) === 0
			})
		}
  }
}
</script>
