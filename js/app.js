// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'
import HelloJS from 'hellojs'
import $ from 'jquery'

import FontContainer from './views/fonts'

var cId = 'OJ4amGS2A2d5Pow5zLETwzjjTq0ccUSKSygfbo9sQOQB3lHf2gNFaap5cvyJmAAu'
var cSecret = 'GBr1TLUVTvj8F0KBl6BBxsSPOsXLxjsxwsUZpZNLD3ymM08WYLeWLmiyRaK9ZNxI'

var ifUrl = 'https://www.iconfinder.com/api/v2/oauth2/authorize'

// $.ajax({
// 	url: ifUrl,
// 	data: {
// 		response_type: 'code',
// 		client_id: cId
// 	}
// }).then(function(resp){console.log(resp)})

var auth_code = 'WtDfYAKAui3cNBClQp4PF5eiG8i5YnMC7UrBp6Dyl4VKcXXdYL5fdHjwnlPrOcAR'

// console.log('doing ajax to get code')

// $.ajax({
// 	url: 'https://www.iconfinder.com/api/v2/oauth2/token',
// 	type: 'post',
// 	data: {
// 		client_id: cId,
// 		client_secret: cSecret,
// 		code: auth_code,
// 		grant_type: 'authorization_code'
// 	}
// }).then(function(resp){console.log(resp)})

function app() {

	var AppView = React.createClass ({
		render: function() {
			return (
				<div className="pageContainer">
					<PaletteContainer/>
					<FontContainer/>
					<IconContainer/>
					<NavBar/>
				</div>
				)
		}
	})

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

	var IconContainer = React.createClass ({
		render: function() {
			return (
				<div className="iconContainer">
					<div className="iconset">icons</div>
				</div>
				)
		}
	})

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

    DOM.render(<AppView/>, document.querySelector('.container'))
}

app()
