(function (PV) {
	"use strict";

    var def = {
    	typeName: "helloworld",
    	inject: ['$rootScope'],
    	init: init
    }

    function init($rootScope) {

    	$rootScope.showAlert = function() {
      		alert("Hello, world");
    	}

    }
	
	PV.toolCatalog.register(def);
})(window.PIVisualization);