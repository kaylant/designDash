import DOM from 'react-dom'
import React, {Component} from 'react'

import FontTable from './fontTable'

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
			   height: 650}
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

	_snapBackToOriginal: function(evt) {
		var iframe = document.getElementById("frame_1")
		var phone = document.getElementById("phone_1")
		console.log("clicked")
		phone.style.width = "400px"
		phone.style.height = "650px"
		document.getElementById("iframeWidth").value = 400
		document.getElementById("iframeHeight").value = 650
	},

	// _makeTextFile: function() {
	// 	var typedArr = [1, 3, 6, "dogs"]
	// 	var blob = new Blob([typedArr], {type: 'text/html'})
	// 	var url = URL.createObjectURL(blob)
	// 	console.log(blob)
	// 	console.log(url)
	// 	return blob
	// }, 

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

		var darkMutedSwatch = bgColorsArray[0]
		var darkVibrantSwatch = bgColorsArray[1]
		var lightMutedSwatch = bgColorsArray[2]
		var ligthVibrantSwatch = bgColorsArray[3]
		var mutedSwatch = bgColorsArray[4]
		var vibrantSwatch = bgColorsArray[5]

		var styleObj = {backgroundColor: lightMutedSwatch}

		var fontIndex = this.props.fontIndex
		var mainFonts = Object.keys(FontTable)
		var font1 = mainFonts[fontIndex] 
		var font2 = FontTable[font1].subhead
		var font3 = FontTable[font1].content

		var styleFont = {color:ligthVibrantSwatch, fontFamily:font1}
		var styleFont2 = {color:darkVibrantSwatch, fontFamily:font2}
		var styleFont3 = {color:mutedSwatch, background:"white", fontFamily:font3, textAlign: "left", paddingLeft: "5px"}

		return (
			<div className="previewContainer">
				<div id="wrapper">
				  <div className="phone view_1" id="phone_1" style={styleObj}>
				    <div id="frame_1">
				    	<h1 style={styleFont}>Hello, world!</h1>
				    	<h2 style={styleFont2}>Subheader Font</h2>
				    	<p style={styleFont3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				    </div>
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
				  	<button id="original" onClick={this._snapBackToOriginal}>Original</button>
				  	<button id="exportProj" download="index.html">Export .zip</button> 
				</div>
				<div id="views">
				  <button value="1" onClick={this._updateView}>Laying</button>
				  <button value="2" onClick={this._updateView}>Side</button>
				  <button value="3" onClick={this._updateView}>Front</button>
				</div>
			</div>				
			)
	}
})

// var NavBar = React.createClass ({
// 	render: function() {
// 		return (
// 			<div className="navBarContainer">
// 				<button id="exportProj" onClick>Export .zip</button>
// 			</div>
// 			)
// 	}
// })

export default Preview