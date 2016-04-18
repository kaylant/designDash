import DOM from 'react-dom'
import React, {Component} from 'react'

import FontContainer from './fonts'
import IconContainer from './icons'

var DashView = React.createClass ({
	render: function() {
		return (
			<div className="pageContainer">
				<FontContainer fontIndex={this.props.fontIndex} updateFunc={this.props.updateFont}/>
				<PaletteContainer palette={this.props.data.get('palette')}/>
			</div>
			)
	}
})

var PaletteContainer = React.createClass ({
	render: function() {
		return (
			<div className="paletteContainer">
				<ColorPalette palette={this.props.palette}/>
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