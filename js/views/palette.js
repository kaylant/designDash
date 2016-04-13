import DOM from 'react-dom'
import React, {Component} from 'react'
import DashView from './dash'
import SearchView from './searchView'

var PaletteContainer = React.createClass ({
	render: function() {
	console.log("palette from dashView")
	console.log(this)	
		return (
			<div className="paletteContainer">
				<p>swatches</p>
			</div>				
			)
	}
})

export default PaletteContainer