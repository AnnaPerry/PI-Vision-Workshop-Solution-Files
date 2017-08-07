(function (PV) {
	'use strict';

    function symbolVis() { };
    PV.deriveVisualizationFromBase(symbolVis);
	
	var definition = {
		typeName: 'barchart',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function(){
			return {
				DataShape: "Table",
				Height: 150,
				Width: 150
			}		
		}

	}
	
	
	function getConfig(){
		return {
			"type": "serial",
			"categoryField": "attribute",
			"startDuration": 1,
			"categoryAxis": {
				"gridPosition": "start"
			},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "[[title]] of [[attribute]]:[[value]]",
					"fillAlphas": 1,
					"id": "AmGraph-1",
					"title": "graph 1",
					"type": "column",
					"valueField": "value"
				}
			],
			"guides": [],
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					"title": "Axis title"
				}
			],
			"allLabels": [],
			"balloon": {},
			"legend": {
				"enabled": true,
				"useGraphSettings": true
			},
			"titles": [
				{
					"id": "Title-1",
					"size": 15,
					"text": "Chart Title"
				}
			],
			"dataProvider": ""
		}		
	}
	
	
	
	symbolVis.prototype.init = function(scope, elem) {
	
		var symbolContainerDiv = elem.find("#container")[0]; symbolContainerDiv.id = "barChart_" + Math.random().toString(36).substr(2, 16);
		var chartConfig = getConfig();
		var chart = AmCharts.makeChart(symbolContainerDiv.id, chartConfig);
		
			
		function convertDatatoChartFormat(data){
			return data.Rows.map(function(item){
				return {
						value: item.Value,
						attribute: item.Label
					}				
			});
			
		}
		
		this.onDataUpdate = dataUpdate;
		function dataUpdate(data){
			if(!data) return;
			
			var dataprovider = convertDatatoChartFormat(data);
			chart.dataProvider = dataprovider;
			chart.validateData();			
		}
		
		
	
	};
	
	
	PV.symbolCatalog.register(definition); 
	
})(window.PIVisualization);
