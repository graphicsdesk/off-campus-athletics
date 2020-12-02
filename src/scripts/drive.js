import mapData from "../../data/CUtoBaker.json";
var routeData = mapData;


var geojsonPoint = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [

            ]
        }
    }]
};


module.exports = {
    routeData,
    geojsonPoint
  };