import DOM from 'react-dom'
import React, {Component} from 'react'
import FontTable from './fontTable'

var Preview = React.createClass ({

	getInitialState: function() {
	    return {width: 400,
			    height: 650,
			    className: "phone view_1"}
	},

	_updateBgColor: function() {
		this.setState({vibrantSwatch: bgColorsArray[5]})
	},

	_updateView: function(evt){
		var newView = evt.target.value
		if (evt) {
			this.setState({className: "phone view_" + newView})
		}
	},

	_updateWidth: function(evt) {
		var newWidth = evt.target.value
		this.setState({width: newWidth})
	},

	_updateHeight: function(evt) {
		var newHeight = evt.target.value
		this.setState({height: newHeight})
	},

	_snapBackToOriginal: function(evt) {
		this.setState({width: 400,
					   height: 650})
	},

	_makeTextFile: function() {

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
		var fontLink = `<link type="text/css" rel="stylesheet href="https://fonts.googleapis.com/css?family=${font1}|${font2}|${font3}>"`

		var cssArr = []
		var	cssString = `// Thanks for using Design Dash.\n` 
			cssString += `// Don't forget to uncomment and paste the following links into the <head> of your index.html file.\n`
			cssString += `// ${fontLink}\n`
			cssString += `\n`
			cssString += `// COLORS\n`
			cssString += `$darkMuted:       ${darkMutedSwatch};\n`
			cssString += `$darkVibrant:     ${darkVibrantSwatch};\n`
			cssString += `$lightMuted:      ${lightMutedSwatch};\n`
			cssString += `$lightVibrant:    ${ligthVibrantSwatch};\n`
			cssString += `$muted:           ${mutedSwatch};\n`
			cssString += `$vibrant:         ${vibrantSwatch};\n`
			cssString += `\n`
			cssString += `// FONTS \n`
			cssString += `\n`
			cssString += `h1 {\n`
			cssString += `\tfont-family: "${font1}";\n`
			cssString += `}\n`
			cssString += `\n`
			cssString += `h2 {\n`
			cssString += `\tfont-family: "${font2}";\n`
			cssString += `}\n`
			cssString += `\n`
			cssString += `p {\n`
			cssString += `\tfont-family: "${font3}";\n`
			cssString += `}\n`
			cssString += `\n`
			cssString += `// Delete the lines below or your code will break!\n`
			cssString += `© Kaylan Smith 🍕\n`
			cssString += `kaylansmith.com`
			cssArr.push(cssString) 
		var blob = new Blob([cssString], {type: 'text/css'})
		var url = URL.createObjectURL(blob)
		return url
	}, 

	_showDownloadLink: function() {
		var link = document.querySelector('#downloadLink')
		link.rel = 'stylesheet'
		link.href = this._makeTextFile()
		link.style.display= "block"
		link.style.textDecoration = 'underline'
		link.style.color = '#7f8c8d'
		link.style.textAlign= 'center'
		link.style.fontSize = '0.8em'
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

		var styleObj = {backgroundColor: lightMutedSwatch,
						width: this.state.width + "px",
						height: this.state.height + "px"}

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
				  <div className={this.state.className} style={styleObj}>
				    <div id="frame_1">
				    	<h1 style={styleFont}>Header Font</h1>
				    	<h2 style={styleFont2}>Subheader Font</h2>
				    	<p style={styleFont3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				    </div>
				  </div>
				</div>

				<div id="controls">
				  <div>
				    <label for="iframeWidth">Width:</label>
				    <input onChange={this._updateWidth} type="number" placeholder="400" value={this.state.width} />
				  </div>
				  <div>
				    <label for="iframeHeight">Height:</label>
				    <input onChange={this._updateHeight} type="number" placeholder="650" value={this.state.height} />
				  </div>
				  	<button id="original" onClick={this._snapBackToOriginal}>Original</button>
				  	<button id="bgColor">Background</button>
				  	<div className="saveLink">
					  	<button id="createProj" onClick={this._showDownloadLink}>Save</button>
					  	<a id="downloadLink" download="style.sass" style={{display: "none"}}>Download SASS!</a>
					</div>
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

export default Preview