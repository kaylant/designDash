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
import Backbone from 'backbone'

import DashView from './views/dash'
import PaletteContainer from './views/palette'
import FontContainer from './views/fonts'
import IconContainer from './views/icons'
import NavBar from './views/navBar'

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

	// Router //

	var AppRouter = Backbone.Router.extend ({
		routes: {
			"search/:cityName" : "searchForCity",
			"dash" 	           : "toDash"
		},

		searchForCity: function() {
			window.location.hash = "search"
		},

		toDash: function() {
			window.location.hash = "dash"
			DOM.render(<DashView/>, document.querySelector('.container'))
		}, 

		initialize: function() {
			Backbone.history.start()
		}
	})

	var rtr = new AppRouter()

}

app()
