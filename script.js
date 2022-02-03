require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",

  "esri/Graphic",
  "esri/layers/GraphicsLayer",
], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
  esriConfig.apiKey = "AAPK35e8710d7f084cd8953019a2b8622c25bbbDeRUIcdkQT1Ew_Z57NBcE3eqhb4LQnIufcPMEvJv5tw7GseK7sxkSbfcpsHiC";

  const map = new Map({
    basemap: "arcgis-topographic", //Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-111.7579390, 43.811641], //Longitude, latitude for Rexburg: [-111.791793, 43.821431]
    zoom: 17,
    container: "viewDiv",
  });

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  const point = {
    //Create a point
    type: "point",
    longitude: -111.977581,
    latitude: 43.697315,
  };
  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [0, 0, 0], // White
      width: 1,
    },
  };

  const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
  });
  graphicsLayer.add(pointGraphic);

  const polyline = {
    type: "polyline",
    paths: [
      [-111.977073, 43.927411], //Longitude, latitude 1
      [-111.837293, 43.927131], //Longitude, latitude 2
      [-111.837383, 43.898533], //Longitude, latitude 3
      [-111.698050, 43.897835], //Longitude, latitude 4
      [-111.697790, 43.883416], //Longitude, latitude 5
      [-111.558960, 43.883259], //Longitude, latitude 6
      [-111.558878, 43.903228], //Longitude, latitude 7
      [-111.495287, 43.930270], //Longitude, latitude 8  
      [-111.398796, 43.923113], //Longitude, latitude 9
      [-111.399825, 43.621981], //Longitude, latitude 10
      [-111.566131, 43.621916], //Longitude, latitude 11
      [-111.566291, 43.626951], //Longitude, latitude 12
      [-111.625996, 43.626805], //Longitude, latitude 13
      [-111.626159, 43.655177], //Longitude, latitude 14
      [-111.716820, 43.655200], //Longitude, latitude 15
      [-111.930697, 43.767208], //Longitude, latitude 16
      [-111.983439, 43.753391], //Longitude, latitude 17
      [-111.983302, 43.797236], //Longitude, latitude 18
      [-111.977602, 43.797276], //Longitude, latitude 19
      [-111.977581, 43.927411], //Longitude, latitude 20
      
    ],
  };
  const simpleLineSymbol = {
    type: "simple-line",
    color: [226, 119, 40], // Orange
    width: 5,
  };

  const polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: simpleLineSymbol,
  });
  graphicsLayer.add(polylineGraphic);

  // Create a polygon geometry
  const polygon = {
    type: "polygon",
    rings: [
      [-111.818000, 43.847732], //Longitude, latitude 1
      [-111.808110, 43.847705], //Longitude, latitude 2
      [-111.808084, 43.840515], //Longitude, latitude 3
      [-111.798026, 43.840490], //Longitude, latitude 4
      [-111.798051, 43.836962], //Longitude, latitude 5
      [-111.786487, 43.836888], //Longitude, latitude 6
      [-111.784029, 43.835390], //Longitude, latitude 7
      [-111.780295, 43.839766], //Longitude, latitude 8
      [-111.780222, 43.846623], //Longitude, latitude 9
      [-111.782492, 43.846623], //Longitude, latitude 10
      [-111.782492, 43.847163], //Longitude, latitude 11
      [-111.780492, 43.847163], //Longitude, latitude 12
      [-111.780492, 43.847673], //Longitude, latitude 13
      [-111.777982, 43.847773], //Longitude, latitude 14
      [-111.777902, 43.854883], //Longitude, latitude 15
      [-111.785122, 43.854883], //Longitude, latitude 16
      [-111.785122, 43.855583], //Longitude, latitude 17
      [-111.786752, 43.855583], //Longitude, latitude 18
      [-111.786752, 43.860893], //Longitude, latitude 19
      [-111.781252, 43.862853], //Longitude, latitude 20
      [-111.777902, 43.862083], //Longitude, latitude 21
      [-111.761505, 43.862050], //Longitude, latitude 22
      [-111.768203, 43.853800], //Longitude, latitude 23
      [-111.767903, 43.853720], //Longitude, latitude 24
      [-111.767903, 43.853200], //Longitude, latitude 25
      [-111.769453, 43.853150], //Longitude, latitude 26
      [-111.768103, 43.854889], //Longitude, latitude 27
      [-111.769153, 43.854889], //Longitude, latitude 28
      [-111.7705393, 43.853189], //Longitude, latitude 29
      [-111.7748393, 43.853189], //Longitude, latitude 30
      [-111.7748393, 43.851850], //Longitude, latitude 31
      [-111.7755050, 43.850320], //Longitude, latitude 32
      [-111.7678920, 43.849971], //Longitude, latitude 33
      [-111.7679790, 43.840398], //Longitude, latitude 34
      [-111.7625390, 43.840398], //Longitude, latitude 35
      [-111.7579390, 43.838228], //Longitude, latitude 36
      [-111.7579390, 43.833228], //Longitude, latitude 37
      [-111.7580550, 43.831458], //Longitude, latitude 38
      [-111.7579390, 43.811641], //Longitude, latitude 39

   ],
  };

  const simpleFillSymbol = {
    type: "simple-fill",
    color: [227, 139, 79, 0.3], // Orange, opacity 30%
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
  };

  const popupTemplate = {
    title: "{Name}",
    content: "{Description}",
  };
  const attributes = {
    Name: "Graphic",
    Description: "Madison County",
  };

  const polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: simpleFillSymbol,
    attributes: attributes,
    popupTemplate: popupTemplate,
  });
  graphicsLayer.add(polygonGraphic);
});
