    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "dojo/domReady!"
      ],
      function(
        Map, MapView,
        FeatureLayer
      ) {

        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
		  center:  [-73.950, 40.702],
		  zoom: 4
        });
		
		var template = PopupTemplate{
			title: "{FORESTNAME}"
			};
		
        var nationalForest = new FeatureLayer({
          url: "https://services.arcgis.com/QWISJZQTqrWSOOHJ/arcgis/rest/services/National_Forests/FeatureServer/0",
		  outFields: [*],
		  popupTemplate: template
        });

        map.add(nationalForest);

      });