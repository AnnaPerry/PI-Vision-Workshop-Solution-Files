(function (PV) {
	'use strict';

    function symbolVis() { };
    PV.deriveVisualizationFromBase(symbolVis);
	
	var definition = {
		typeName: 'barchart',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		getDefaultConfig: function(){
			return {
				Height: 150,
				Width: 150
			}		
		}

	}
	
	
	function getConfig(){
		return {
			"type": "serial",
			"categoryField": "category",
			"startDuration": 1,
			"categoryAxis": {
				"gridPosition": "start"
			},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "[[title]] of [[category]]:[[value]]",
					"fillAlphas": 1,
					"id": "AmGraph-1",
					"title": "graph 1",
					"type": "column",
					"valueField": "column-1"
				},
				{
					"balloonText": "[[title]] of [[category]]:[[value]]",
					"fillAlphas": 1,
					"id": "AmGraph-2",
					"title": "graph 2",
					"type": "column",
					"valueField": "column-2"
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
			"dataProvider": [
				{
					"category": "category 1",
					"column-1": 8,
					"column-2": 5
				},
				{
					"category": "category 2",
					"column-1": 6,
					"column-2": 7
				},
				{
					"category": "category 3",
					"column-1": 2,
					"column-2": 3
				}
			]
		}		
	}
	
	
	
	symbolVis.prototype.init = function(scope, elem) {
	
		var symbolContainerDiv = elem.find("#container")[0]; 
		symbolContainerDiv.id = "barChart_" + Math.random().toString(36).substr(2, 16);
		var chartConfig = getConfig(); AmCharts.makeChart(symbolContainerDiv.id, chartConfig)
	
	};
	
	
	PV.symbolCatalog.register(definition); 
	
})(window.PIVisualization);
