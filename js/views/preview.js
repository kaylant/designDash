import DOM from 'react-dom'
import React, {Component} from 'react'

var Preview = React.createClass ({
	_updateView: function(evt){
		var phone = document.getElementById("phone_1")
		var newView = evt.target.value
		if (evt) {
			phone.className = "phone view_" + newView
		}
	},

	getInitialState: function() {
	   return {width: 400,
			   height: 650,
			   src: "http://kaylansmith.com"}
	},

	_updateWidth: function(evt) {
		var iframe = document.getElementById("frame_1")
		var phone = document.getElementById("phone_1")
		this.setState({width: evt.target.value})
		phone.style.width = document.getElementById("iframeWidth").value + "px"
	},

	_updateHeight: function(evt) {
		var iframe = document.getElementById("frame_1")
		var phone = document.getElementById("phone_1")
		this.setState({height: evt.target.value})
		phone.style.height = document.getElementById("iframeHeight").value + "px"
	}, 

	_updateIframe: function() {
		var iframe = document.getElementById("frame_1")
		console.log(iframe)
		var html = "<html><head><title>Titolo</title></head><body><p>body</p></body></html>"
		// iframe.open();
		// iframe.write(html);
		// iframe.close(); 
	},

	render: function() {
		var paletteObj = this.props.data.get('palette')
		var bgColorsArray = []
		var timeout = 1
		for (var prop in paletteObj) {
			var swatchObj = paletteObj[prop]
			if (swatchObj) {
				var rgbArr = swatchObj.rgb
				var bgColor = `rgb(${Math.floor(rgbArr[0])},${Math.floor(rgbArr[1])},${Math.floor(rgbArr[2])})`
				bgColorsArray.push(bgColor)
				timeout += 1
			}
		}

		var lightMutedSwatch = bgColorsArray[2]

		var styleObj = {backgroundColor: lightMutedSwatch}
		return (
			<div className="previewContainer">
				<NavBar/>
				<div id="wrapper">
				  <div className="phone view_1" id="phone_1">
				    <iframe style={styleObj} id="frame_1" src="about:blank"></iframe>
				    {this._updateIframe()}
				  </div>
				</div>

				<div id="controls">
				  <div>
				    <label for="iframeWidth">Width:</label>
				    <input onChange={this._updateWidth} type="number" id="iframeWidth" placeholder="400" value={this.state.width} />
				  </div>
				  <div>
				    <label for="iframeHeight">Height:</label>
				    <input onChange={this._updateHeight} type="number" id="iframeHeight" placeholder="650" value={this.state.height} />
				  </div>
				</div>
				<div id="views">
				  <button value="1" onClick={this._updateView}>View 1 - Laying</button>
				  <button value="2" onClick={this._updateView}>View 2 - Side</button>
				  <button value="3" onClick={this._updateView}>View 3 - Front</button>
				</div>
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

export default Preview

		// iframe.src = document.getElementById("iframeURL").value
				// <div>
				//   <label for="iframeURL">URL:</label>
				//   <input onChange={this._updateIframe} type="text" id="iframeURL" placeholder="http://kaylansmith.com" value="http://kaylansmith.com" />
				// </div>