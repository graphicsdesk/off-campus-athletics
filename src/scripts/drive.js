import { driveTime, followPoint } from "./config"
import mapData from "../../data/CUtoBaker.json";
import * as turf from '@turf/turf'
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