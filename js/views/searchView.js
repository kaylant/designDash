import DOM from 'react-dom'
import React, {Component} from 'react'

import PaletteContainer from './palette'

var SearchView = React.createClass({
	_updateModel: function() {
		this.setState({
			imageData: this.props.data.get('image'),
			palette: this.props.data.get('palette')
		})
	},

	componentWillMount: function() {			
		var self = this
		this.props.data.on('change', this._updateModel)
	},

	getInitialState: function() {
		return {
			imageData: this.props.data.get('image'),
			palette: this.props.data.get('palette')
		}
	},

	render: function() {
		return (
			<div className="searchContainer">
				<CityImg imageData={this.state.imageData}/>
				<ColorPalette palette={this.state.palette}/>
			</div>
			)
	}
})

var CityImg = React.createClass({
	_setRoute: function(event) {
		if (event.keyCode === 13) {
			window.location.hash = `search/${event.target.value}`
			event.target.value = ""
		}
	},

	render: function() {
		return (
			<div className="cityImgContainer">
				<input onKeyDown={this._setRoute} />
				<img className="cityImg" src={this.props.imageData.link} />
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
			<div className="colorPaletteContainer">
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

export default SearchView