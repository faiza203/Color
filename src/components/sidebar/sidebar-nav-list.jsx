import React from 'react';
import { Route, Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

class SidebarNavList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: -1,
			clicked: -1
		};
	}

	handleExpand(e, i, match) {
		e.preventDefault();

		this.setState(state => ({
			active: (this.state.active === i ? -1 : i),
			clicked: 1
		}));
	}
  
	render() {
		var icon = this.props.data.icon && <i className={this.props.data.icon}></i>;
		var img = this.props.data.img && <div className="icon-img"><img src={this.props.data.img} alt="" /></div>;
		var caret = (this.props.data.children && !this.props.data.badge) && <b className="caret"></b>;
		var label = this.props.data.label && <span className="label label-theme m-l-5">{this.props.data.label}</span>;
		var badge = this.props.data.badge && <span className="badge pull-right">{this.props.data.badge}</span>;
		var title = this.props.data.title && <span>{this.props.data.title} {label}</span>;
		var highlight = this.props.data.highlight && <i className="fa fa-paper-plane text-theme"></i>;
		
		return (
			<PageSettings.Consumer>
				{({handleSidebarOnMouseOver, handleSidebarOnMouseOut, pageSidebarMinified}) => (
					<Route path={this.props.data.path} exact={this.props.data.exact} children={({ match }) => (
						<li className={(match ? "active " : "") + ((this.props.active || (this.props.clicked === -1 && match) || this.props.data.search) ? 'expand ' : 'closed ') + (this.props.data.children ? "has-sub " : "")}>
							{this.props.data.children ? (
								<Link to={this.props.data.path}
									onMouseOver={(e) => handleSidebarOnMouseOver(e, this.props.data)} 
									onMouseOut={(e) => handleSidebarOnMouseOut(e, this.props.data)}
									onClick={this.props.expand}>{ caret } { badge } { img } { icon } { title } { highlight }</Link>
							):(
								<Link to={this.props.data.path}>{ caret } { img } { icon } { badge } { title } { highlight }</Link>
							)}
							{this.props.data.children && (
								<ul className={"sub-menu " + (((this.props.active || (this.props.clicked === -1 && match) || this.props.data.search) && !pageSidebarMinified) ? 'd-block ' : 'd-none')}>
									{this.props.data.children && this.props.data.children.map((submenu, i) => (
										<SidebarNavList
											data={submenu} 
											key={i} 
											expand={(e) => this.handleExpand(e, i, match)}
											active={i === this.state.active} 
											clicked={this.state.clicked}
										/>
									))}
								</ul>
							)}
						</li>
					)} />
				)}
			</PageSettings.Consumer>
		);
	}
}

export default SidebarNavList;