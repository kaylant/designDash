import DOM from 'react-dom'
import React, {Component} from 'react'
import DashView from './dash'
import SearchView from './searchView'
import Preview from './preview'

var SuperDash = React.createClass ({
	render: function () {
		return (
			<div className="superDashContainer">
				<SearchView data={this.props.paletteData}/>
				<DashView/>
				<Preview/>
			</div>
			)
	}
})

export default SuperDash