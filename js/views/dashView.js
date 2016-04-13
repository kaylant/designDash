import DOM from 'react-dom'
import React, {Component} from 'react'

import PaletteContainer from './palette'
import FontContainer from './fonts'
import IconContainer from './icons'

var DashView = React.createClass ({
	render: function() {
		return (
			<div className="pageContainer">
				<PaletteContainer/>
				<FontContainer/>
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

export default DashView