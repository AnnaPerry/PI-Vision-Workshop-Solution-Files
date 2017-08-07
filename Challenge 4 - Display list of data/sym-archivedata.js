(function (PV) {
	'use strict';

    function symbolVis() { };
    PV.deriveVisualizationFromBase(symbolVis);
	
	var definition = {
		typeName: 'archivedata',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		getDefaultConfig: function(){
			return {
				Height: 150,
				Width: 150
			}		
		}
	}
	
	symbolVis.prototype.init = function(scope, elem) {
		
		scope.DataItems = dataItems;
		
	};
	
	var dataItems = [
		{
			Time: "8/8/2017 06:00:00 AM",
			Value: 0
		},
		{
			Time: "8/9/2017 09:00:00 AM",
			Value: 100
		}
	]
	
	
	PV.symbolCatalog.register(definition); 
	
})(window.PIVisualization);
