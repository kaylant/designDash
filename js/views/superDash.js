import DOM from 'react-dom'
import React, {Component} from 'react'
import Scroll from 'react-scroll'

import DashView from './dash'
import SearchView from './searchView'
import Preview from './preview'

var SuperDash = React.createClass ({
	render: function () {
		return (
			<div className="superDashContainer">
				<SearchView data={this.props.paletteData}/>
				<DashView/>
				<Preview/>
				<Section/>
			</div>
			)
	}
})

var Link    = Scroll.Link;
var Element = Scroll.Element;
var Events  = Scroll.Events;
var scroll  = Scroll.animateScroll;


var Section = React.createClass({
  componentDidMount: function() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

  },
  scrollToTop: function() {
    scroll.scrollToTop();
  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
                <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
                <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
                <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
                <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500}>Test 5</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <Element name="test1" className="element">
          test 1
        </Element>

        <Element name="test2" className="element">
          test 2
        </Element>

        <Element name="test3" className="element">
          test 3
        </Element>

        <a onClick={this.scrollToTop}>To the top!</a>
      
      </div>
    );
  }
});


DOM.render(<Section />, document.querySelector('.container'));

export default SuperDash