import DOM from 'react-dom'
import React, {Component} from 'react'

import DashView from './dash'
import FontTable from './fontTable'

// window.ft = FontTable

var FontContainer = React.createClass ({

		_handleRightButton: function() {
			var currentFontIndex = this.props.fontIndex
			var tableLength = Object.keys(FontTable).length
			if (currentFontIndex < tableLength - 1) {
				var newFontIndex = currentFontIndex + 1	
			} else {
				newFontIndex = 0
			}
			this.props.updateFunc(newFontIndex)			
		},

		_handleLeftButton: function() {
			var currentFontIndex = this.props.fontIndex
			var tableLength = Object.keys(FontTable).length
			if (currentFontIndex === 0) {
				var newFontIndex = tableLength -1
				console.log(newFontIndex)	
			} else {
				newFontIndex = currentFontIndex - 1
				console.log(newFontIndex)
			}
			this.props.updateFunc(newFontIndex)		
		},

		render: function() {
			var mainFonts = Object.keys(FontTable)
			var font1 = mainFonts[this.props.fontIndex] 
			var font2 = FontTable[font1].subhead
			var font3 = FontTable[font1].content
			var head = document.head
			  , link = document.createElement('link')

			link.type = 'text/css'
			link.rel = 'stylesheet'
			link.href = `https://fonts.googleapis.com/css?family=${font1}|${font2}|${font3}`

			head.appendChild(link)

			var font1Style = {
				fontSize: '40px',
				fontFamily: font1,
				margin: '5px 0px'
			}

			var font2Style = {
				fontSize: '26px',
				fontFamily: font2,
				margin: '5px 0px'
			}

			var font3Style = {
				fontSize: '14px',
				fontFamily: font3,
				margin: '5px 0px'
			}

			return (
				<div className="fontContainer">
					<div className="font1">
						<p className="fontName">Font Name: {font1}</p>
						<p style={font1Style}>Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
					</div>
					<div className="font2">
						<p className="fontName">Font Name: {font2}</p>
						<p style={font2Style}>Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
					</div>
					<div className="font3">
						<p className="fontName">Font Name: {font3}</p>
						<p style={font3Style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<button id="leftButton" onClick={this._handleLeftButton}><i className="material-icons">keyboard_arrow_right</i></button>
					<button id="rightButton" onClick={this._handleRightButton}><i className="material-icons">keyboard_arrow_right</i></button>
				</div>
				)
		}
})

export default FontContainer