import DOM from 'react-dom'
import React, {Component} from 'react'
import DashView from './dash'
import SearchView from './searchView'

var PaletteContainer = React.createClass ({
	render: function() {	
		console.log("palette from searchView")
		console.log(this.palette)	
		return (
			<div className="paletteContainer">
				<p>swatches</p>
			</div>				
			)
	}
})

export default PaletteContainer