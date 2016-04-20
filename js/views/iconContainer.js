import DOM from 'react-dom'
import React, {Component} from 'react'

import DashView from './dash'

var Icons = React.createClass ({
	render: function() {

		var head = document.head
		  , link = document.createElement('link')

		link.type = 'text/css'
		link.rel = 'stylesheet'
		link.href = `https://fonts.googleapis.com/icon?family=Material+Icons`
		head.appendChild(link)

		return (
			<div className="iconContainer">
				<p>Icons: Google Material</p>
				<i class="material-icons">attach_file</i>
				<i class="material-icons">reply</i>
				<i class="material-icons">link</i>
				<i class="material-icons">mail_outline</i>
				<i class="material-icons">forward</i>
				<i class="material-icons">important_devices</i>
				<i class="material-icons">invert_colors</i>
				<i class="material-icons">fingerprint</i>
				<i class="material-icons">stay_primary_portrait</i>
			</div>
			)
	}
})

export default Icons