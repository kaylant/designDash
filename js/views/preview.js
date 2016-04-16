import DOM from 'react-dom'
import React, {Component} from 'react'

var Preview = React.createClass ({

	_updateView: function(evt){
		var phone = document.getElementById("phone_1")
		var newView = evt.target.value
		if (evt) {
			phone.className = "phone view_" + newView
		}
	},

	getInitialState: function() {
	   return {width: 400,
			   height: 650}
	},

	_updateWidth: function(evt) {
		var iframe = document.getElementById("frame_1")
		var phone = document.getElementById("phone_1")
		this.setState({width: evt.target.value})
		phone.style.width = document.getElementById("iframeWidth").value + "px"
	},

	_updateHeight: function(evt) {
		var iframe = document.getElementById("frame_1")
		var phone = document.getElementById("phone_1")
		this.setState({height: evt.target.value})
		phone.style.height = document.getElementById("iframeHeight").value + "px"
	}, 

	_updateIframe: function() {
		iframe.src = document.getElementById("iframeURL").value
	}, 

	render: function() {
		// var styleObj = {perspective: "1500px"}
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
				    <input onChange={this._updateWidth} type="number" id="iframeWidth" placeholder="400" value={this.state.width} />
				  </div>
				  <div>
				    <label for="iframeHeight">Height:</label>
				    <input onChange={this._updateHeight} type="number" id="iframeHeight" placeholder="650" value={this.state.height} />
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