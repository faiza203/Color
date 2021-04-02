import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { SketchPicker, ChromePicker } from 'react-color';
import ReactTags from 'react-tag-autocomplete';
import DatePicker from 'react-datepicker';
import DateTime from 'react-datetime';
import Select from 'react-select';
import InputMask from 'react-input-mask';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'react-datetime/css/react-datetime.css';
import 'react-datepicker/dist/react-datepicker.css';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class FormPlugins extends React.Component {
	constructor(props) {
		super(props);
		
		var maxYesterday = '';
		var minYesterday = DateTime.moment().subtract(1, 'day');
		
		this.minDateRange = (current) => {
			return current.isAfter( minYesterday );
		};
		this.maxDateRange = (current) => {
			return current.isAfter( maxYesterday );
		};
		this.minDateChange = (value) => {
			this.setState({
				maxDateDisabled: false
			});
			maxYesterday = value;
		};
		this.handleChange = (date) => {
			this.setState({
				startDate: date
			});
		}
		this.state = {
			maxDateDisabled: true,
			startDate: new Date(),
			sketchBackgroundColor: '#348fe2',
			chromeBackgroundColor: '#8753de',
			tags: [
				{ id: 1, name: 'Apples' },
				{ id: 2, name: 'Pears' }
			],
			suggestions: [
				{ id: 3, name: 'Bananas' },
				{ id: 4, name: 'Mangos' },
				{ id: 5, name: 'Lemons' },
				{ id: 6, name: 'Apricots' }
			]
		}
		this.handleSketchChangeComplete = (color) => {
			this.setState({ sketchBackgroundColor: color.hex });
		};
		this.handleChromeChangeComplete = (color) => {
			this.setState({ chromeBackgroundColor: color.hex });
		};
		this.handleDelete = (i) => {
			const tags = this.state.tags.slice(0)
			tags.splice(i, 1)
			this.setState({ tags })
		}

		this.handleAddition = (tag) => {
			const tags = [].concat(this.state.tags, tag)
			this.setState({ tags })
		}
		this.selectOptions = [
			{ value: 'chocolate', label: 'Chocolate' },
			{ value: 'strawberry', label: 'Strawberry' },
			{ value: 'vanilla', label: 'Vanilla' }
		];
		
		this.handleSlider = (props) => {
			const { value, dragging, index, ...restProps } = props;
			return (
				<Tooltip
					prefixCls="rc-slider-tooltip"
					overlay={value}
					visible={dragging}
					placement="top"
					key={index}
				>
					<Handle value={value} {...restProps} />
				</Tooltip>
			);
		}
	}
	render() {
		return (
			<div>
				<ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/form/plugins">Home</Link></li>
					<li className="breadcrumb-item"><Link to="/form/plugins">Form Stuff</Link></li>
					<li className="breadcrumb-item active">Form Plugins</li>
				</ol>
				<h1 className="page-header">Form Plugins <small>header small text goes here...</small></h1>
				
				<div className="row">
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								Bootstrap Date Time Picker
							</PanelHeader>
							<PanelBody className="panel-form">
								<form className="form-horizontal form-bordered">
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Default Date Time</label>
										<div className="col-lg-8">
											<DateTime inputProps={{ placeholder: 'Datepicker' }} closeOnSelect={true} />
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Select Time</label>
										<div className="col-lg-8">
											<DateTime dateFormat={false} inputProps={{ placeholder: 'Timepicker' }} />
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Range Pickers</label>
										<div className="col-lg-8">
											<div className="row row-space-10">
												<div className="col-6">
													<DateTime isValidDate={ this.minDateRange } inputProps={{ placeholder: 'Min Date' }} closeOnSelect={true} onChange={ this.minDateChange } />
												</div>
												<div className="col-6">
													<DateTime isValidDate={ this.maxDateRange } inputProps={{ placeholder: 'Max Date', disabled: this.state.maxDateDisabled }} closeOnSelect={true} />
												</div>
											</div>
										</div>
									</div>
								</form>
							</PanelBody>
						</Panel>
						
						<Panel>
							<PanelHeader>
								React Select
							</PanelHeader>
							<PanelBody className="panel-form">
								<form className="form-horizontal form-bordered">
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">React Select Dropdown</label>
										<div className="col-lg-8">
											<Select options={this.selectOptions} />
										</div>
									</div>
								</form>
							</PanelBody>
						</Panel>
						
						<Panel>
							<PanelHeader>
								Datepicker
							</PanelHeader>
							<PanelBody className="panel-form">
								<form className="form-horizontal form-bordered">
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Default Datepicker</label>
										<div className="col-lg-8">
											<DatePicker selected={this.state.startDate} onChange={this.handleChange} className="form-control" />
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Inline Datepicker</label>
										<div className="col-lg-8">
											<DatePicker inline selected={this.state.startDate} onChange={this.handleChange} />
										</div>
									</div>
								</form>
							</PanelBody>
						</Panel>
						<Panel>
							<PanelHeader>
								React Tags Input
							</PanelHeader>
							<PanelBody className="panel-form">
								<form className="form-horizontal form-bordered">
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Default Input Tag</label>
										<div className="col-lg-8">
											<ReactTags tags={this.state.tags} suggestions={this.state.suggestions} handleDelete={this.handleDelete.bind(this)} handleAddition={this.handleAddition.bind(this)} />
										</div>
									</div>
								</form>
							</PanelBody>
						</Panel>
					</div>
					<div className="col-xl-6">
						<Panel>
							<PanelHeader>
								React Input Mask
							</PanelHeader>
							<PanelBody className="panel-form">
								<form className="form-horizontal form-bordered">
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Date</label>
										<div className="col-lg-8">
											<InputMask mask="9999/99/99" className="form-control" placeholder="yyyy/mm/dd"></InputMask>
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Phone</label>
										<div className="col-lg-8">
											<InputMask mask="(999) 999-999" className="form-control" placeholder="(999) 999-9999"></InputMask>
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Tax ID</label>
										<div className="col-lg-8">
											<InputMask mask="99-999999" className="form-control" placeholder="99-9999999"></InputMask>
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Product Key</label>
										<div className="col-lg-8">
											<InputMask mask="a\*-999-a999" className="form-control" placeholder="a*-999-a999"></InputMask>
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">SSN</label>
										<div className="col-lg-8">
											<InputMask mask="999/99/9999" className="form-control" placeholder="999/99/9999"></InputMask>
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">SSN</label>
										<div className="col-lg-8">
											<InputMask mask="AAA-1111-A" className="form-control" placeholder="AAA-9999-A"></InputMask>
										</div>
									</div>
								</form>
							</PanelBody>
						</Panel>
						
						<Panel>
							<PanelHeader>
								React Colorpicker
							</PanelHeader>
							<PanelBody className="panel-form">
								<form className="form-horizontal form-bordered">
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Sketch Type Colorpicker</label>
										<div className="col-lg-8">
											<UncontrolledDropdown>
												<div className="input-group">
													<input type="text" className="form-control bg-white" readOnly value={this.state.sketchBackgroundColor} />
													<span className="input-group-append">
														<span className="input-group-text">
															<DropdownToggle className="p-0 border-0">
																<i style={{width: '16px', height: '16px', display: 'block', background: this.state.sketchBackgroundColor}}></i>
															</DropdownToggle>
														</span>
													</span>
												</div>
												<DropdownMenu>
													<SketchPicker color={ this.state.sketchBackgroundColor } onChangeComplete={ this.handleSketchChangeComplete } />
												</DropdownMenu>
											</UncontrolledDropdown>
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Chrome Type Colorpicker</label>
										<div className="col-lg-8">
											<UncontrolledDropdown>
												<div className="input-group">
													<input type="text" className="form-control bg-white" readOnly value={this.state.chromeBackgroundColor} />
													<span className="input-group-append">
														<span className="input-group-text">
															<DropdownToggle className="p-0 border-0">
																<i style={{width: '16px', height: '16px', display: 'block', background: this.state.chromeBackgroundColor}}></i>
															</DropdownToggle>
														</span>
													</span>
												</div>
												<DropdownMenu>
													<ChromePicker color={ this.state.chromeBackgroundColor } onChangeComplete={ this.handleChromeChangeComplete } />
												</DropdownMenu>
											</UncontrolledDropdown>
										</div>
									</div>
								</form>
							</PanelBody>
						</Panel>
						
						<Panel>
							<PanelHeader>
								React Slider
							</PanelHeader>
							<PanelBody className="panel-form">
								<form className="form-horizontal form-bordered">
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Default Slider</label>
										<div className="col-lg-8">
											<Slider min={0} max={20} defaultValue={3} handle={this.handleSlider} />
											<vue-slider v-bind="sliderDefault" v-model="sliderDefault.value"></vue-slider>
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Slider with fixed values</label>
										<div className="col-lg-8 overflow-hidden">
											<Slider min={20} defaultValue={20} marks={{ 20: 20, 40: 40, 100: 100 }} step={null} />
										</div>
									</div>
									<div className="form-group row">
										<label className="col-lg-4 col-form-label">Range with custom handle</label>
										<div className="col-lg-8">
											<Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
										</div>
									</div>
								</form>
							</PanelBody>
						</Panel>
					</div>
				</div>
			</div>
		)
	}
}

export default FormPlugins;