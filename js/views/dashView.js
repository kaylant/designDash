import DOM from 'react-dom'
import React, {Component} from 'react'

import PaletteContainer from './palette'
import FontContainer from './fonts'
import IconContainer from './icons'
import NavBar from './navBar'

var DashView = React.createClass ({
	render: function() {
		console.log("palette from searchView")
		console.log(this)	
		return (
			<div className="pageContainer">
				<PaletteContainer palette={this.props.palette}/>
				<FontContainer/>
				<NavBar/>
			</div>
			)
	}
})

export default DashView