import DOM from 'react-dom'
import React, {Component} from 'react'
import DashView from './dash'

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

export default NavBar