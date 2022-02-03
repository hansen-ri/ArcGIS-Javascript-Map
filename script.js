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
    center: [-111.791793, 43.821431], //Longitude, latitude for Rexburg: [-111.791793, 43.821431]
    zoom: 12,
    container: "viewDiv",
  });

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  const point = {
    //Create a point
    type: "point",
    longitude: -111.809485,
    latitude: 43.802464,
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
      [-111.7580490, 43.811599], //Longitude, latitude 39
      [-111.7621890, 43.811599], //Longitude, latitude 40
      [-111.7630250, 43.810699], //Longitude, latitude 41
      [-111.7630450, 43.807986], //Longitude, latitude 42
      [-111.7680450, 43.807986], //Longitude, latitude 43
      [-111.7680450, 43.804356], //Longitude, latitude 44
      [-111.7730550, 43.804356], //Longitude, latitude 45
      [-111.7730690, 43.800756], //Longitude, latitude 46
      [-111.7680690, 43.800756], //Longitude, latitude 47
      [-111.7680690, 43.797156], //Longitude, latitude 48
      [-111.7815500, 43.797156], //Longitude, latitude 49
      [-111.7815500, 43.798006], //Longitude, latitude 50
      [-111.7867700, 43.801826], //Longitude, latitude 51
      [-111.7879780, 43.801826], //Longitude, latitude 52
      [-111.7879780, 43.797156], //Longitude, latitude 53
      [-111.7955080, 43.797186], //Longitude, latitude 54
      [-111.7955180, 43.802616], //Longitude, latitude 55
      [-111.7980080, 43.802596], //Longitude, latitude 56
      [-111.7980080, 43.800756], //Longitude, latitude 57
      [-111.8140831, 43.800786], //Longitude, latitude 58
      [-111.8158931, 43.797186], //Longitude, latitude 59
      [-111.8180531, 43.797186], //Longitude, latitude 60
      [-111.8190531, 43.794186], //Longitude, latitude 61
      [-111.8298400, 43.793586], //Longitude, latitude 62
      [-111.8298400, 43.797186], //Longitude, latitude 63
      [-111.8279400, 43.797186], //Longitude, latitude 64
      [-111.8280115, 43.811656], //Longitude, latitude 65
      [-111.8329715, 43.811656], //Longitude, latitude 66
      [-111.8329715, 43.818856], //Longitude, latitude 67
      [-111.8367915, 43.818856], //Longitude, latitude 68
      [-111.8367915, 43.821976], //Longitude, latitude 69
      [-111.8332615, 43.821976], //Longitude, latitude 70
      [-111.8332615, 43.822806], //Longitude, latitude 71
      [-111.8279515, 43.823476], //Longitude, latitude 72
      [-111.8279515, 43.818843], //Longitude, latitude 73
      [-111.8180205, 43.818843], //Longitude, latitude 74
      [-111.817961, 43.826055], //Longitude, latitude 75

      [-111.810216, 43.826100], //Longitude, latitude 76
      [-111.810648, 43.836929], //Longitude, latitude 77
      [-111.818048, 43.836929], //Longitude, latitude 78
    ],
  };

  const simpleFillSymbol = {
    type: "simple-fill",
    color: [227, 139, 79, 0.15], // Orange, opacity 30%
    outline: {
      color: [255, 153, 55],
      width: 1,
    },
  };

  const popupTemplate = {
    title: "{Name}",
    content: "{Description}",
  };
  const attributes = {
    Name: "Graphic",
    Description: "City of Rexburg",
  };

  const polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: simpleFillSymbol,
    attributes: attributes,
    popupTemplate: popupTemplate,
  });
  graphicsLayer.add(polygonGraphic);
});
