(function (PV) {
	'use strict';

    function symbolVis() { };
    PV.deriveVisualizationFromBase(symbolVis);
	
	var definition = {
		typeName: 'basicvalue',
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
		
		this.onDataUpdate = dataUpdate;
		
		function dataUpdate(newdata){
			scope.Time = newdata.Time;
			scope.Value = newdata.Value;
		}
		
	};
	
	PV.symbolCatalog.register(definition); 
	
})(window.PIVisualization);
