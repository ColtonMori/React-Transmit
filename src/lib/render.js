/**
 * @copyright © 2015, Rick Wong. All rights reserved.
 */
"use strict";

var React    = require("./react");
var ReactDOM = require("./react-dom");
var assign   = React.__spread;

/**
 * @function render
 */
module.exports = function (Component, props, targetDOMNode, callback) {
	var myProps = assign({}, props, window.__reactTransmitPacket || {});

	if (window.__reactTransmitPacket) {
		delete window.__reactTransmitPacket;
	}

	ReactDOM.render(React.createElement(Component, myProps), targetDOMNode, callback);
};
