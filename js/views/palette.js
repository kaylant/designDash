import DOM from 'react-dom'
import React, {Component} from 'react'
import DashView from './dash'

var PaletteContainer = React.createClass ({
	render: function() {
		return (
			<div className="paletteContainer">
				<div className="swatch1">swatch1</div>
				<div className="swatch2">swatch2</div>
				<div className="swatch3">swatch3</div>
				<div className="swatch4">swatch4</div>
				<div className="swatch5">swatch5</div>
			</div>
			)
	}
})

export default PaletteContainer