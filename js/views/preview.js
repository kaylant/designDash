import DOM from 'react-dom'
import React, {Component} from 'react'

var Preview = React.createClass ({
	render: function() {		
		return (
			<div className="previewContainer">			
				<div className="previewScreen">
					<div className="mapToScreen"></div>
				</div>
			</div>				
			)
	}
})

export default Preview