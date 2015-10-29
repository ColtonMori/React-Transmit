/**
 * @copyright © 2015, Rick Wong. All rights reserved.
 */
"use strict";

module.exports = {
	isContainer:           require("./isContainer"),
	createContainer:       require("./createContainer"),
	render:                require("./render"),
	renderToString:        require("./renderToString"),
	injectIntoMarkup:      require("./injectIntoMarkup"),
	setPromiseConstructor: function (PromiseConstructor) {
		require("./promiseProxy").Promise = PromiseConstructor;
	}
};
