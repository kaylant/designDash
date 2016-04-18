import DOM from 'react-dom'
import React, {Component} from 'react'
import Scroll from 'react-scroll'

import DashView from './dashView'
import SearchView from './searchView'
import Preview from './preview'

var Link    = Scroll.Link;
var Element = Scroll.Element;
var Events  = Scroll.Events;
var scroll  = Scroll.animateScroll

// formerly <Section/>
var SuperDash = React.createClass({

	getInitialState: function() {
		return {
			masterFontIndex: 0,
			imageData: this.props.paletteData.get('image'),
			palette: this.props.paletteData.get('palette')    
		}
	},

	_updateMasterFontIndex: function(newIndex) {
		this.setState({
			masterFontIndex: newIndex
		})
	},

	_updateModel: function() {
		this.setState({
			imageData: this.props.paletteData.get('image'),
			palette: this.props.paletteData.get('palette')
		})
	},

	componentWillMount: function() {			
		var self = this
		this.props.paletteData.on('change', this._updateModel)
	},
	
	componentDidMount: function() {

		Events.scrollEvent.register('begin', function() {
			console.log("begin", arguments)
		})

		Events.scrollEvent.register('end', function() {
			console.log("end", arguments)
		})

	},

	scrollToTop: function() {
		scroll.scrollToTop()
	},

	componentWillUnmount: function() {
		Events.scrollEvent.remove('begin')
		Events.scrollEvent.remove('end')
	},

	render: function () {
		return (
			<div className="superDashContainer">
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>Palette</Link></li>
								<li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Fonts</Link></li>
								<li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500}>Preview</Link></li>
							</ul>
						</div>
					</div>
				</nav>

				<Element name="test1" className="element">
					<SearchView data={this.props.paletteData} name="test1" className="element"/>
				</Element>


				<Element name="test2" className="element">
					<DashView data={this.props.paletteData} updateFont={this._updateMasterFontIndex} fontIndex={this.state.masterFontIndex}/>
				</Element>

				<Element name="test3" className="element">
					<Preview data={this.props.paletteData} updateFont={this._updateMasterFontIndex} fontIndex={this.state.masterFontIndex}/>
				</Element>

				<a onClick={this.scrollToTop}>To the top!</a>
			
			</div>
		)
	}
})

export default SuperDash