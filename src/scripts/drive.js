import mapData from "../../data/CUtoBaker.json";
var routeData = mapData;
var stepProgressMarkerTrigger = [3, 4, 7, 7, 12, 17, 18, 25].map(function (x) { return x * 40; });

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

//map markers 
var markerCoords = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-73.96373, 40.80807]
        },
        properties: {
            title: '1',
            description: 'Columbia'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-73.96030, 40.81794]
        },
        properties: {
            title: '2',
            description: 'UPenn'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-73.95924, 40.82055]
        },
        properties: {
            title: '3',
            description: 'Dartmouth'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-73.95243, 40.82848]
        },
        properties: {
            title: '4',
            description: 'Princeton'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-73.95207, 40.82889]
        },
        properties: {
            title: '4',
            description: 'Brown'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-73.94607, 40.84038]
        },
        properties: {
            title: '4',
            description: 'Cornell'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-73.93861, 40.85659]
        },
        properties: {
            title: '4',
            description: 'Harvard'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-73.93626, 40.8593]
        },
        properties: {
            title: '4',
            description: 'Yale'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-73.91622, 40.87210]
        },
        properties: {
            title: '1',
            description: 'test test'
        }
    }]
};


module.exports = {
    routeData,
    geojsonPoint,
    stepProgressMarkerTrigger,
    markerCoords
  };