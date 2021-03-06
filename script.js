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
      color: [255, 255, 255], // Black
      width: 1,
    },
  };

  const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
  });
  graphicsLayer.add(pointGraphic);

  const point2 = {
    //Create a 2nd point
    type: "point",
    longitude: -111.789560,
    latitude: 43.824918,
  };
  const simpleMarkerSymbol2 = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // Black
      width: 1,
    },
  };

  const pointGraphic2 = new Graphic({
    geometry: point2,
    symbol: simpleMarkerSymbol2,
  });
  graphicsLayer.add(pointGraphic2);

  const point3 = {
    //Create a 3rd point
    type: "point",
    longitude: -111.774267,
    latitude: 43.855087,
  };
  const simpleMarkerSymbol3 = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // black
      width: 1,
    },
  };

  const pointGraphic3 = new Graphic({
    geometry: point3,
    symbol: simpleMarkerSymbol3,
  });
  graphicsLayer.add(pointGraphic3);

  const point4 = {
    //Create a 4th point
    type: "point",
    longitude: -111.771536,
    latitude: 43.848675,
  };
  const simpleMarkerSymbol4 = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // black
      width: 1,
    },
  };

  const pointGraphic4 = new Graphic({
    geometry: point4,
    symbol: simpleMarkerSymbol4,
  });
  graphicsLayer.add(pointGraphic4);

  const point5 = {
    //Create a 5th point
    type: "point",
    longitude: -111.777979,
    latitude: 43.842871,
  };
  const simpleMarkerSymbol5 = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // black
      width: 1,
    },
  };

  const pointGraphic5 = new Graphic({
    geometry: point5,
    symbol: simpleMarkerSymbol5,
  });
  graphicsLayer.add(pointGraphic5);

  const point6 = {
    //Create a 6th point
    type: "point",
    longitude: -111.779498,
    latitude: 43.837371,
  };
  const simpleMarkerSymbol6 = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // black
      width: 1,
    },
  };

  const pointGraphic6 = new Graphic({
    geometry: point6,
    symbol: simpleMarkerSymbol6,
  });
  graphicsLayer.add(pointGraphic6);

  const point7 = {
    //Create a 7th point
    type: "point",
    longitude: -111.780363,
    latitude: 43.836130,
  };
  const simpleMarkerSymbol7 = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // black
      width: 1,
    },
  };

  const pointGraphic7 = new Graphic({
    geometry: point7,
    symbol: simpleMarkerSymbol7,
  });
  graphicsLayer.add(pointGraphic7);

  const point8 = {
    //Create a 8th point
    type: "point",
    longitude: -111.778033,
    latitude: 43.833523,
  };
  const simpleMarkerSymbol8 = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // black
      width: 1,
    },
  };

  const pointGraphic8 = new Graphic({
    geometry: point8,
    symbol: simpleMarkerSymbol8,
  });
  graphicsLayer.add(pointGraphic8);

  const point9 = {
    //Create a 9th point
    type: "point",
    longitude: -111.778887,
    latitude: 43.832891,
  };
  const simpleMarkerSymbol9 = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // black
      width: 1,
    },
  };

  const pointGraphic9 = new Graphic({
    geometry: point9,
    symbol: simpleMarkerSymbol9,
  });
  graphicsLayer.add(pointGraphic9);


  const point10 = {
    //Create a 10th point
    type: "point",
    longitude: -111.777481,
    latitude: 43.830357,
  };
  const simpleMarkerSymbol10= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic10 = new Graphic({
    geometry: point10,
    symbol: simpleMarkerSymbol10,
  });
  graphicsLayer.add(pointGraphic10);

  const point11 = {
    //Create a 11th point
    type: "point",
    longitude: -111.777481,
    latitude: 43.830357,
  };
  const simpleMarkerSymbol11= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic11 = new Graphic({
    geometry: point11,
    symbol: simpleMarkerSymbol11,
  });
  graphicsLayer.add(pointGraphic11);

  const point12 = {
    //Create a 12th point
    type: "point",
    longitude: -111.783497,
    latitude: 43.824918,
  };
  const simpleMarkerSymbol12= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic12 = new Graphic({
    geometry: point12,
    symbol: simpleMarkerSymbol12,
  });
  graphicsLayer.add(pointGraphic12);

  const point13 = {
    //Create a 13th point
    type: "point",
    longitude: -111.784977,
    latitude: 43.824115,
  };
  const simpleMarkerSymbol13= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic13 = new Graphic({
    geometry: point13,
    symbol: simpleMarkerSymbol13,
  });
  graphicsLayer.add(pointGraphic13);

  const point14 = {
    //Create a 14th point
    type: "point",
    longitude: -111.789316,
    latitude: 43.821829,
  };
  const simpleMarkerSymbol14= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic14 = new Graphic({
    geometry: point14,
    symbol: simpleMarkerSymbol14,
  });
  graphicsLayer.add(pointGraphic14);

  const point15 = {
    //Create a 15th point
    type: "point",
    longitude: -111.785934,
    latitude: 43.821949,
  };
  const simpleMarkerSymbol15= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic15 = new Graphic({
    geometry: point15,
    symbol: simpleMarkerSymbol15,
  });
  graphicsLayer.add(pointGraphic15);

  const point16 = {
    //Create a 16th point
    type: "point",
    longitude: -111.789705,
    latitude: 43.820129,
  };
  const simpleMarkerSymbol16= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic16 = new Graphic({
    geometry: point16,
    symbol: simpleMarkerSymbol16,
  });
  graphicsLayer.add(pointGraphic16);

  const point17 = {
    //Create a 17th point
    type: "point",
    longitude: -111.789176,
    latitude: 43.817901,
  };
  const simpleMarkerSymbol17= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic17 = new Graphic({
    geometry: point17,
    symbol: simpleMarkerSymbol17,
  });
  graphicsLayer.add(pointGraphic17);

  const point18 = {
    //Create a 18th point
    type: "point",
    longitude: -111.804143,
    latitude: 43.812842,
  };
  const simpleMarkerSymbol18= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic18 = new Graphic({
    geometry: point18,
    symbol: simpleMarkerSymbol18,
  });
  graphicsLayer.add(pointGraphic18);

  const point19 = {
    //Create a 19th point
    type: "point",
    longitude: -111.777557,
    latitude: 43.810984,
  };
  const simpleMarkerSymbol19= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic19 = new Graphic({
    geometry: point19,
    symbol: simpleMarkerSymbol19,
  });
  graphicsLayer.add(pointGraphic19);

  const point20 = {
    //Create a 20th point
    type: "point",
    longitude: -111.810928,
    latitude: 43.804823,
  };
  const simpleMarkerSymbol20= {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // white
      width: 1,
    },
  };

  const pointGraphic20 = new Graphic({
    geometry: point20,
    symbol: simpleMarkerSymbol20,
  });
  graphicsLayer.add(pointGraphic20);

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
    color: [227, 139, 79, 0.15], // Orange, opacity 15%
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
