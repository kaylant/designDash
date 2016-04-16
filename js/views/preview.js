import DOM from 'react-dom'
import React, {Component} from 'react'

var Preview = React.createClass ({

	_updateView: function(view){
		console.log("yes")
		var phone = document.getElementById("phone_1")
		if (view) {
			phone.className = "phone view_" + view
		}
	},

	_updateIframe: function() {
		console.log("woot")
		var iframe = iframe = document.getElementById("frame_1")
		var phone = document.getElementById("phone_1")
		iframe.src = document.getElementById("iframeURL").value
		phone.style.width = document.getElementById("iframeWidth").value + "px"
		phone.style.height = document.getElementById("iframeHeight").value + "px"

	}, 

	render: function() {
		return (
			<div className="previewContainer">	
				<div id="wrapper">
				  <div className="phone view_1" id="phone_1">
				    <iframe src="http://kaylansmith.com" id="frame_1"></iframe>
				  </div>
				</div>

				<div id="controls">
				  <div>
				    <label for="iframeURL">URL:</label>
				    <input onChange={this._updateIframe} type="text" id="iframeURL" placeholder="http://kaylansmith.com" value="http://kaylansmith.com" />
				  </div>
				  <div>
				    <label for="iframeWidth">Width:</label>
				    <input onChange={this._updateIframe} type="number" id="iframeWidth" placeholder="400" value="400" />
				  </div>
				  <div>
				    <label for="iframeHeight">Height:</label>
				    <input onChange={this._updateIframe} type="number" id="iframeHeight" placeholder="650" value="650" />
				  </div>
				  <div>
				    <label for="iframePerspective">Add perspective:</label>
				    <input onChange={this._updateIframe} type="checkbox" id="iframePerspective" checked="true" />
				  </div>
				</div>
				<div id="views">
				  <button value="1" onClick={this._updateView}>View 1 - Laying</button>
				  <button value="2" onClick={this._updateView}>View 2 - Side</button>
				  <button value="3" onClick={this._updateView}>View 3 - Front</button>
				</div>
			</div>				
			)
	}
})

export default Preview