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
			   height: 650,
			   src: "about:blank"}
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
		return (
			<div className="previewContainer">
				<div id="wrapper">
				  <div className="phone view_1" id="phone_1">
				    <iframe style={styleObj} id="frame_1" src="about:blank"></iframe>
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
				<NavBar/>
			</div>				
			)
	},

	// _updateStyle: function() {
	// 	var textStyle = document.getElementById("iframeText")
	// 	console.log(textStyle)
	// }, 

	componentDidUpdate: function() {
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

		var fontIndex = this.props.fontIndex
		var mainFonts = Object.keys(FontTable)
		var font1 = mainFonts[fontIndex] 
		var font2 = FontTable[font1].subhead
		var font3 = FontTable[font1].content
		console.log(font1)



		var styleFont = `color:${ligthVibrantSwatch};background:white;font-family:${font1};`
		var styleFont2 = `color:${darkVibrantSwatch};background:white;font-family:${font2};`
		var styleFont3 = `color:${mutedSwatch};background:white;font-family:${font3};`
		console.log(styleFont)
	    var iframe = document.getElementById("frame_1")
	    var html = `<body>
	    				<h1 id="iframeText" style=${styleFont}>Hello, world</h1>
	    				<h2 style=${styleFont2}>Subheader Font</h2>
	    				<p style=${styleFont3}>Lorem ipsum dolor sit amet</p>
	    			</body>`
	    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html)
	    console.log(iframe.contentDocument)

	    var head = iframe.contentDocument.head
	      , link = iframe.contentDocument.createElement('link')
	      // , body = iframe.contentDocument.body
	      // console.log(body)

	    link.type = 'text/css'
	    link.rel = 'stylesheet'
	    link.href = `https://fonts.googleapis.com/css?family=${font1}|${font2}|${font3}`

	    head.appendChild(link)
	    // body.appendChild(html)

	    // body.open();
	    // body.write('Test');
	    // body.close()

	    // iframe.contentDocument.body.style.fontFamily = "Lobster";


	    // var cssLink = document.createElement("link") 
	    // cssLink.href = "style.css"; 
	    // cssLink.rel = "stylesheet"; 
	    // cssLink.type = "text/css"; 
	    // iframe.document.body.appendChild(cssLink)
	    console.log(iframe.src)
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