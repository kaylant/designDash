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
import Vibrant from 'node-vibrant'
import Scroll from 'react-scroll'

import SuperDash from './views/superDash'
import DashView from './views/dashView'
import SearchView from './views/searchView'
import Preview from './views/preview'
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

	// Model //
    var ImgModel = Backbone.Model.extend ({
    	url: "https://www.googleapis.com/customsearch/v1",

    	// key: "AIzaSyCJ8zb1jEVLaSvUnfalB2Nri5yCes1EKvw",
    	key: "AIzaSyDr6T8gkhLh6ZhsEX9MjtW9fMYk5ehPaKw",

    	//cx: "004196397515287344825:ve6rrdva0mi",
    	cx: "008940921588152958013:h64uer7a344",

    	defaults: {
    		image: {
    			link: './images/ocean.png'
    		},
			palette: []
    	},

    	parse: function(rawData) {
    		var objArr = rawData.items
    		for (var i = 0; i < objArr.length; i++) {
    			var singleObj = objArr[i]
    			var imgHeight = singleObj.image.height
    			if (imgHeight >= '700') {
    				return {
    					image: singleObj,
    					palette: null
    				}
    			}
    		}
    	}
    })

	// Router //

	var AppRouter = Backbone.Router.extend ({
		routes: {
			"search/:cityName" : "searchForCity",
			"*default"         : "showDefaults"
		},

		searchForCity: function(searchTerm) {
			var setPalette = function(mod) {
				var src = "/image?src=" + mod.get("image").link.replace('https','http')   
				Vibrant.from(src).getPalette(
					function(err, incomingPalette){
						mod.set({palette:incomingPalette})
					}
				)
				// window.V = Vibrant
				// window.src = src
			}
			var mod = this.nm
			this.nm.fetch({
				data: {
					key: this.nm.key,
					cx: this.nm.cx,
					searchType: "image",
					q: searchTerm
				}
			}).then(function(){
				setPalette(mod)
			})
			
			DOM.render(<SuperDash paletteData={this.nm} />, document.querySelector('.container'))
		},

		showDefaults: function() {
			window.location.hash = "home"
			var setPalette = function(mod) {
				Vibrant.from(mod.get('image').link).getPalette(
					function(err, incomingPalette){    					
						mod.set({palette:incomingPalette})
					}
				)
			}

			setPalette(this.nm)

			DOM.render(<SuperDash paletteData={this.nm} />, document.querySelector('.container'))
		},

		initialize: function() {
			this.nm = new ImgModel()
			Backbone.history.start()
		}
	})

	var rtr = new AppRouter()

}

app()
