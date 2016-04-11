import DOM from 'react-dom'
import React, {Component} from 'react'

var SearchView = React.createClass({
	_updateModel: function() {
		console.log("this image on props")
		console.log(this)
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
		console.log('rendering app view') 
		console.log(this)
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
		// console.log('city image component, never received link')
		// console.log(this.props)
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
		console.log('incoming palette object')
		console.log(paletteObj)
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
		console.log('incoming Color props')
		console.log(this.props)
		var bgColor = `rgb(${Math.floor(this.props.rgbArr[0])},${Math.floor(this.props.rgbArr[1])},${Math.floor(this.props.rgbArr[2])})`
		var styleObj = {background: bgColor, opacity: this.state.opacity}
		return (
			<div className="color" style={styleObj}></div>
			)
	}
})

export default SearchView