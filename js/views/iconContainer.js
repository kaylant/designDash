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
				<div className="iconsRow">
					<i class="material-icons">build</i>
					<i class="material-icons">attach_file</i>
					<i class="material-icons">reply</i>
					<i class="material-icons">link</i>
					<i class="material-icons">mail_outline</i>
					<i class="material-icons">forward</i>
					<i class="material-icons">important_devices</i>
					<i class="material-icons">invert_colors</i>
					<i class="material-icons">fingerprint</i>
					<i class="material-icons">stay_primary_portrait</i>
					<i class="material-icons">done</i>
					<i class="material-icons">lock_open</i>
					<i class="material-icons">apps</i>
					<i class="material-icons">more_vert</i>
					<i class="material-icons">person</i>
					<i class="material-icons">group_add</i>
					<i class="material-icons">check_box</i>
					<i class="material-icons">star</i>
					<i class="material-icons">star_border</i>
					<i class="material-icons">poll</i>
					<i class="material-icons">wifi</i>
					<i class="material-icons">fullscreen</i>
					<i class="material-icons">close</i>
				</div>
			</div>
			)
	}
})

export default Icons