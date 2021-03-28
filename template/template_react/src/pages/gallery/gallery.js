import React from 'react';
import { Link } from 'react-router-dom';

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			gallery: {
				all: true,
				group1: false,
				group2: false,
				group3: false,
				group4: false
			}
		}
		this.toggle = (value) => {
			var newGallery = {
				all: false,
				group1: false,
				group2: false,
				group3: false,
				group4: false
			}
			switch(value) {
				case 'all':
					newGallery.all = true;
					break;
				case 'group1':
					newGallery.group1 = true;
					break;
				case 'group2':
					newGallery.group2 = true;
					break;
				case 'group3':
					newGallery.group3 = true;
					break;
				case 'group4':
					newGallery.group4 = true;
					break;
				default:
					break;
			}
			this.setState(state => ({
				gallery: newGallery
			}));
		}
	}
	
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/gallery">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/gallery">Gallery</Link></li>
					<li className="breadcrumb-item active">Gallery v1</li>
				</ol>
				<h1 className="page-header">Gallery <small>header small text goes here...</small></h1>
				<div id="options" className="m-b-10">
					<span className="gallery-option-set" id="filter" data-option-key="filter">
					<button onClick={() => this.toggle('all')} className={'btn btn-default btn-xs ' + (this.state.gallery.all ? 'active' : '')}>Show All</button>
					<button onClick={() => this.toggle('group1')} className={'btn btn-default btn-xs ' + (this.state.gallery.group1 ? 'active' : '')}>Gallery Group 1</button>
					<button onClick={() => this.toggle('group2')} className={'btn btn-default btn-xs ' + (this.state.gallery.group2 ? 'active' : '')}>Gallery Group 2</button>
					<button onClick={() => this.toggle('group3')} className={'btn btn-default btn-xs ' + (this.state.gallery.group3 ? 'active' : '')}>Gallery Group 3</button>
					<button onClick={() => this.toggle('group4')} className={'btn btn-default btn-xs ' + (this.state.gallery.group4 ? 'active' : '')}>Gallery Group 4</button>
					</span>
				</div>
				<div id="gallery" className="gallery">
					<div className={'image pull-left '+ (this.state.gallery.group1 || this.state.gallery.all ? '' : 'hide ')}>
						<div className="image-inner">
							<Link to="/gallery">
								<img src="/assets/img/gallery/gallery-1.jpg" alt="" />
							</Link>
							<p className="image-caption">
								#1382 - 3D Arch
							</p>
						</div>
						<div className="image-info">
							<h5 className="title">Lorem ipsum dolor sit amet</h5>
							<div className="pull-right">
								<small>by</small> <Link to="/gallery">Sean Ngu</Link>
							</div>
							<div className="rating">
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star"></span>
								<span className="star"></span>
							</div>
							<div className="desc">
								Nunc velit urna, aliquam at interdum sit amet, lacinia sit amet ligula. Quisque et erat eros. Aenean auctor metus in tortor placerat, non luctus justo blandit.
							</div>
						</div>
					</div>
					<div className={'image pull-left '+ (this.state.gallery.group1 || this.state.gallery.all ? '' : 'hide ')}>
						<div className="image-inner">
							<Link to="/gallery">
								<img src="/assets/img/gallery/gallery-2.jpg" alt="" />
							</Link>
							<p className="image-caption">
								#2343 - Madness Arch
							</p>
						</div>
						<div className="image-info">
							<h5 className="title">Fusce aliquet ac quam at tincidunt</h5>
							<div className="pull-right">
								<small>by</small> <Link to="/gallery">Camryn Wong</Link>
							</div>
							<div className="rating">
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star"></span>
								<span className="star"></span>
								<span className="star"></span>
							</div>
							<div className="desc">
								Fusce eu rutrum nisi, ut pretium mi. Sed mollis nisi sed auctor molestie. Vestibulum dictum pharetra leo sed euismod.
							</div>
						</div>
					</div>
					<div className={'image pull-left '+ (this.state.gallery.group1 || this.state.gallery.all ? '' : 'hide ')}>
						<div className="image-inner">
							<Link to="/gallery">
								<img src="/assets/img/gallery/gallery-3.jpg" alt="" />
							</Link>
							<p className="image-caption">
								#3452 - Scottwills Arch
							</p>
						</div>
						<div className="image-info">
							<h5 className="title">Etiam lobortis egestas nisl</h5>
							<div className="pull-right">
								<small>by</small> <Link to="/gallery">Lelouch Wong</Link>
							</div>
							<div className="rating">
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star active"></span>
							</div>
							<div className="desc">
								Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus eget ultricies arcu.
							</div>
						</div>
					</div>
					<div className={'image pull-left '+ (this.state.gallery.group1 || this.state.gallery.all ? '' : 'hide ')}>
						<div className="image-inner">
							<Link to="/gallery">
								<img src="/assets/img/gallery/gallery-4.jpg" alt="" />
							</Link>
							<p className="image-caption">
								#4123 - Scottwills Pinecone
							</p>
						</div>
						<div className="image-info">
							<h5 className="title">Donec mi quis volutpat ornare</h5>
							<div className="pull-right">
								<small>by</small> <Link to="/gallery">Richard Leong</Link>
							</div>
							<div className="rating">
								<span className="star"></span>
								<span className="star"></span>
								<span className="star"></span>
								<span className="star"></span>
								<span className="star"></span>
							</div>
							<div className="desc">
								Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et augue luctus libero dignissim sodales, sapien consequat lacinia fringilla.
							</div>
						</div>
					</div>
					<div className={'image pull-left '+ (this.state.gallery.group2 || this.state.gallery.all ? '' : 'hide ')}>
						<div className="image-inner">
							<Link to="/gallery">
								<img src="/assets/img/gallery/gallery-5.jpg" alt="" />
							</Link>
							<p className="image-caption">
								#9200 Kariminal Rider
							</p>
						</div>
						<div className="image-info">
							<h5 className="title">Donec pretium volutpat ornare</h5>
							<div className="pull-right">
								<small>by</small> <Link to="/gallery">Derrick Wong</Link>
							</div>
							<div className="rating">
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star"></span>
							</div>
							<div className="desc">
								Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et augue luctus libero, feugiat sapien consequat lacinia fringilla.
							</div>
						</div>
					</div>
					<div className={'image pull-left '+ (this.state.gallery.group3 || this.state.gallery.all ? '' : 'hide ')}>
						<div className="image-inner">
							<Link to="/gallery">
								<img src="/assets/img/gallery/gallery-6.jpg" alt="" />
							</Link>
							<p className="image-caption">
								#1832 Scottwills Autumn
							</p>
						</div>
						<div className="image-info">
							<h5 className="title">Mi quis volutpat ornare sodales</h5>
							<div className="pull-right">
								<small>by</small> <Link to="/gallery">Apple Tong</Link>
							</div>
							<div className="rating">
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star"></span>
								<span className="star"></span>
								<span className="star"></span>
							</div>
							<div className="desc">
								Ut et augue luctus libero dignissim sodales. Fusce feugiat sapien consequat lacinia fringilla. Vivamus eget ultricies arcu.
							</div>
						</div>
					</div>
					<div className={'image pull-left '+ (this.state.gallery.group3 || this.state.gallery.all ? '' : 'hide ')}>
						<div className="image-inner">
							<Link to="/gallery">
								<img src="/assets/img/gallery/gallery-7.jpg" alt="" />
							</Link>
							<p className="image-caption">
								#0229 Scottwills Autumn 2
							</p>
						</div>
						<div className="image-info">
							<h5 className="title">Vestibulum ante ipsum primis</h5>
							<div className="pull-right">
								<small>by</small> <Link to="/gallery">Thomas Wong</Link>
							</div>
							<div className="rating">
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star"></span>
								<span className="star"></span>
							</div>
							<div className="desc">
								Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et augue luctus libero dignissim sodales, sapien consequat lacinia fringilla.
							</div>
						</div>
					</div>
					<div className={'image pull-left '+ (this.state.gallery.group4 || this.state.gallery.all ? '' : 'hide ')}>
						<div className="image-inner">
							<Link to="/gallery">
								<img src="/assets/img/gallery/gallery-8.jpg" alt="" />
							</Link>
							<p className="image-caption">
								#5721 Scottwills Snow
							</p>
						</div>
						<div className="image-info">
							<h5 className="title">Nunc eget hendrerit nisi sodales</h5>
							<div className="pull-right">
								<small>by</small> <Link to="/gallery">Andy Wong</Link>
							</div>
							<div className="rating">
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star active"></span>
							</div>
							<div className="desc">
								Ut et augue nisi sodales luctus libero dignissim sodales. Fusce feugiat nisi sodales sapien consequat lacinia fringilla.
							</div>
						</div>
					</div>
					<div className={'image pull-left '+ (this.state.gallery.group4 || this.state.gallery.all ? '' : 'hide ')}>
						<div className="image-inner">
							<Link to="/gallery">
								<img src="/assets/img/gallery/gallery-9.jpg" alt="" />
							</Link>
							<p className="image-caption">
								#9921 Scottwills Riverbank
							</p>
						</div>
						<div className="image-info">
							<h5 className="title">Nunc eget hendrerit nisi dignissim</h5>
							<div className="pull-right">
								<small>by</small> <Link to="/gallery">William Tan</Link>
							</div>
							<div className="rating">
								<span className="star"></span>
								<span className="star"></span>
								<span className="star"></span>
								<span className="star"></span>
								<span className="star"></span>
							</div>
							<div className="desc">
								Ut et augue luctus libero dignissim sodales. Fusce feugiat sapien consequat libero dignissim lacinia fringilla.
							</div>
						</div>
					</div>
					<div className={'image pull-left '+ (this.state.gallery.group4 || this.state.gallery.all ? '' : 'hide ')}>
						<div className="image-inner">
							<Link to="/gallery">
								<img src="/assets/img/gallery/gallery-10.jpg" alt="" />
							</Link>
							<p className="image-caption">
								#6436 Scottwills Buss
							</p>
						</div>
						<div className="image-info">
							<h5 className="title">Sed mollis nisi sed auctor</h5>
							<div className="pull-right">
								<small>by</small> <Link to="/gallery">David King</Link>
							</div>
							<div className="rating">
								<span className="star active"></span>
								<span className="star active"></span>
								<span className="star"></span>
								<span className="star"></span>
								<span className="star"></span>
							</div>
							<div className="desc">
								Vestibulum dictum pharetra leo sed euismod. Lorem ipsum dolor sit amet, consectetur adipiscing feugiat sapien elit.
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Gallery;