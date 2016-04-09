import Fonts from './fonts'
import CreateFragment from 'react-addons-create-fragment'

console.log("font table")

var createFragment = require('react-addons-create-fragment')

var FontTable = createFragment({
		head: 'Lobster',
		subhead:'Open Sans',
		content:'Courier'
	})

// var FontTable = createFragment({Lobster: {subhead:'Open+Sans',
// 						   content:'Courier'}
// 				})

export default FontTable