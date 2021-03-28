import React from 'react';
import { Route, Link } from 'react-router-dom';
import TopMenuNavList from './top-menu-nav-list.jsx';
import menus from './menu.jsx';

class TopMenuNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: -1,
			controlLeft: false,
			controlRight: false,
			marginLeft: 0,
			marginRight: 0,
			navWidth: 0
		};

		this.topMenu = React.createRef();
		this.handleExpand = this.handleExpand.bind(this);
		this.controlLeft = this.controlLeft.bind(this);
		this.controlRight = this.controlRight.bind(this);
	}
	
	componentDidMount () {
		var windowWidth = this.topMenu.current.offsetWidth - 128;
		var listFullWidth = 0;
		var listPrevWidth = 0;
		var listActive = false;
		
		document.querySelectorAll('.top-menu .nav > li').forEach(function(elm) {
			listFullWidth += elm.offsetWidth;
			listPrevWidth += (!listActive) ? elm.offsetWidth : 0;
			listActive = (elm.classList.contains('active')) ? true : listActive;
		});

		listPrevWidth = (!listActive) ? 0 : listPrevWidth;
		
		if (listPrevWidth >= windowWidth) {
			var finalScrollWidth = listPrevWidth - windowWidth + 128;
			var finalLeft, finalRight;
			if (!document.body.classList.contains('rtl-mode')) { 
				finalLeft = finalScrollWidth;
				finalRight = 0;
			} else {
				finalRight = finalScrollWidth;
				finalLeft = 0;
			}
			this.setState(state => ({
				marginLeft: finalLeft,
				marginRight: finalRight
			}));
		}
		
		this.setState(state => ({
			navWidth: listFullWidth,
			controlLeft: (listPrevWidth >= windowWidth && listFullWidth >= windowWidth) ? true : false,
			controlRight: (listPrevWidth !== listFullWidth && listFullWidth >= windowWidth) ? true : false
		}));
	}
	
	handleExpand(e, i, match) {
		e.preventDefault();
		this.setState(state => ({
			active: (this.state.active === i ? -1 : i)
		}));
	}
	
	controlRight(e) {
		e.preventDefault();
		var containerWidth = document.querySelector('.top-menu').offsetWidth - 88;
		var widthLeft = this.state.navWidth + (-this.state.marginLeft) - containerWidth;
		var finalScrollWidth = 0;

		if (widthLeft <= containerWidth) {
			finalScrollWidth = widthLeft - (-this.state.marginLeft) + 128;
			this.setState(state => ({
				controlRight: false
			}));
		} else {
			finalScrollWidth = containerWidth - (-this.state.marginLeft) - 128;
		}

		if (finalScrollWidth !== 0) {
			if (!document.body.classList.contains('rtl-mode')) { 
				this.setState(state => ({
					marginRight: 0,
					marginLeft: finalScrollWidth
				}));
			} else {
				this.setState(state => ({
					marginLeft: 0,
					marginRight: finalScrollWidth
				}));
			}
			this.setState(state => ({
				controlLeft: true
			}));
		}
	}

	controlLeft(e) {
		e.preventDefault();
		var widthLeft = this.state.marginLeft;
		var containerWidth = document.querySelector('.top-menu').offsetWidth;
		var finalScrollWidth = 0;

		if (widthLeft <= containerWidth) {
			finalScrollWidth = 0;
			this.setState(state => ({
				controlLeft: false
			}));
		} else {
			finalScrollWidth = widthLeft - containerWidth - 88;
			this.setState(state => ({
				controlLeft: true
			}));
		}
		if (!document.body.classList.contains('rtl-mode')) { 
			this.setState(state => ({
				marginLeft: finalScrollWidth,
				marginRight: 0,
				controlRight: true
			}));
		} else {
			this.setState(state => ({
				marginLeft: 0,
				marginRight: finalScrollWidth,
				controlRight: true
			}));
		}
	}

  
	render() {
		return (
			<ul ref={this.topMenu} className="nav" style={{ marginLeft: '-' + this.state.marginLeft + 'px', marginRight: '-'+ this.state.marginRight + 'px' }}>
				{menus.map((menu, i) => (
					<Route path={menu.path} exact={menu.exact} key={i} children={({ match }) => (
						<TopMenuNavList
							data={menu} 
							key={i} 
							expand={(e) => this.handleExpand(e, i, match)}
							active={i === this.state.active} 
							clicked={this.state.clicked}
						/>
					)} />
				))}
				<li className={'menu-control menu-control-left ' + (this.state.controlLeft ? 'show' : '')}>
					<Link to="/" onClick={this.controlLeft}><i className="fa fa-angle-left"></i></Link>
				</li>
				<li className={'menu-control menu-control-right ' + (this.state.controlRight ? 'show' : '')}>
					<Link to="/" onClick={this.controlRight}><i className="fa fa-angle-right"></i></Link>
				</li>
			</ul>
		);
	}
}

export default TopMenuNav;