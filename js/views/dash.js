import DOM from 'react-dom'
import React, {Component} from 'react'

import PaletteContainer from './palette'
import FontContainer from './fonts'
import IconContainer from './icons'
import NavBar from './navBar'

var DashView = React.createClass ({
	render: function() {
		return (
			<div className="pageContainer">
				<PaletteContainer/>
				<FontContainer/>
				<IconContainer/>
				<NavBar/>
			</div>
			)
	}
})

export default DashView