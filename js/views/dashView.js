import DOM from 'react-dom'
import React, {Component} from 'react'

import FontContainer from './fonts'
import IconContainer from './icons'

var DashView = React.createClass ({
	render: function() {
		return (
			<div className="pageContainer">
				<FontContainer/>
				<PaletteContainer palette={this.props.data}/>
				<NavBar/>
			</div>
			)
	}
})

var NavBar = React.createClass ({
	render: function() {
		return (
			<div className="navBarContainer">
				<div className="exportProj">Export .zip</div>
				<div className="saveToDropbox">Save to Dropbox</div>
			</div>
			)
	}
})

var PaletteContainer = React.createClass ({
	_updateModel: function() {
		this.setState({
			imageData: this.props.palette.get('image'),
			palette: this.props.palette.get('palette')
		})
	},

	componentWillMount: function() {			
		var self = this
		this.props.palette.on('change', this._updateModel)
	},

	getInitialState: function() {
		console.log("get initial state")
		console.log(this)
		return {
			imageData: this.props.palette.get('image'),
			palette: this.props.palette.get('palette')
		}
	},

	render: function() {
		console.log("palette data from dashview")
		console.log(this)
		return (
			<div className="paletteContainer">
				<ColorPalette palette={this.state.palette}/>
			</div>				
			)
	}
})

var ColorPalette = React.createClass({
	_renderColorComponents: function(paletteObj) {
		var jsxArray = []
		var timeout = 1
		for (var prop in paletteObj) {
			var swatchObj = paletteObj[prop]
			if (swatchObj) {
				var component = <Color swatchType={prop} timeout={timeout} rgbArr={swatchObj.rgb} key={timeout}/>
				jsxArray.push(component)
				timeout += 1
			}
		}
		return jsxArray
	},

	render: function() {		
		return (
			<div className="paletteContainer">
				{this._renderColorComponents(this.props.palette)}
			</div>				
			)
	}
})

var Color = React.createClass({
	componentWillMount: function() {
		setTimeout(function() {
				this.setState({opacity:1})
			}.bind(this),this.props.timeout * 150)
	},

	getInitialState: function() {
		return {
			opacity: 0
		}
	},

	render: function() {
		var bgColor = `rgb(${Math.floor(this.props.rgbArr[0])},${Math.floor(this.props.rgbArr[1])},${Math.floor(this.props.rgbArr[2])})`
		var styleObj = {background: bgColor, opacity: this.state.opacity}
		return (
			<div className="color" style={styleObj}></div>
			)
	}
})

export default DashView