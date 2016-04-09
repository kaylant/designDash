import DOM from 'react-dom'
import React, {Component} from 'react'
import FontTable from './fontTable'

// window.ft = FontTable

var FontContainer = React.createClass ({
		render: function() {
			// var font1 = "Arvo"
			// var font2 = "Lobster"
			// var font3 = "Inconsolata"
			var font1 = FontTable[0] 
			console.log(font1)
			var font2 = FontTable[1]
			var font3 = FontTable[2]
			var head = document.head
			  , link = document.createElement('link')

			link.type = 'text/css'
			link.rel = 'stylesheet'
			link.href = `https://fonts.googleapis.com/css?family=${font1}|${font2}|${font3}`

			head.appendChild(link)

			var font1Style = {
				fontSize: '20px',
				fontFamily: font1,
				margin: '5px 0px'
			}

			var font2Style = {
				fontSize: '16px',
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
				</div>
				)
		}
})

export default FontContainer