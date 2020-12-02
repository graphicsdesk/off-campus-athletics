
import { routeData, geojsonPoint } from './drive';
import {
    driveTime,
    driveSmoothness,
    followPoint,
    followZoomLevel,
    followBearing,
    followPitch,
    config
} from './config';
import "intersection-observer";
import scrollama from "scrollama";
import * as turf from '@turf/turf';

console.log(routeData)

function createLine() {

    // get the coordinates of the line you want to highlight
    let extentArray = routeData.features[0].geometry.coordinates;

    // create a turf linestring based on the line coordinates
    const line = turf.lineString(extentArray);

    // calculate the total length of the line
    const lineDistance = turf.lineDistance(line);

    // how many points you want along the path (more = smoother animation)
    const rects = driveTime;

    // calculate the distance between each point on the path
    const segments = lineDistance / rects;

    // what units do you want to use?
    const units = 'miles';

    // based on the number of points...
    for (let i = 0; i <= rects; i++) {

        // calculate point location for each segment
        const pointonline = turf.along(line, (segments * i));

        // push new x,y
        let newX = pointonline.geometry.coordinates[0];
        let newY = pointonline.geometry.coordinates[1];

        geojsonPoint.features[0].geometry.coordinates.push([newX, newY]);

        // draw our initinal point
        if (i === 0) {
            let initPoint = turf.point([newX, newY]);

            // if you want to follow the point...
            if (followPoint === true) {
                map.setCenter([newX, newY]);
            }

            map.getSource('pointSource').setData(initPoint);
        }

        // once 'i' equals the number of points then we're done building our line 
        if (i == rects) {
            map.getSource('lineSource').setData(geojsonPoint);
        }
    }

}

function changeCenter(index) {

    // Set center to a subsample of the line, say every 10th or 25th
    let subsampleIndex = 100;

    let currentJson = geojsonPoint.features[0].geometry.coordinates.slice(0, index);
    let center = geojsonPoint.features[0].geometry.coordinates[index];
    let centerX = center[0];
    let centerY = center[1];
    let movingLine = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": currentJson
            }
        }]
    };
    let movingPoint = turf.point([centerX, centerY]);
    map.getSource('lineSource').setData(movingLine);
    map.getSource('pointSource').setData(movingPoint);

    // if you want to follow the point...
    if (followPoint === true) {
        if (index % subsampleIndex == 0) {
            console.log("changeCenter(index) = ", index, center)
            map.jumpTo({
                center: [centerX, centerY]
            });
        }
    }
}


var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}


function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    // center: config.chapters[0].location.center,
    // zoom: config.chapters[0].location.zoom,
    // bearing: config.chapters[0].location.bearing,
    // pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

var marker = new mapboxgl.Marker();
if (config.showMarkers) {
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

//map markers 
var geojson = {
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
            coordinates: [-73.9603, 40.81794]
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
            coordinates: [-73.95926, 40.82053]
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
            coordinates: [-73.95241, 40.82851]
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
            coordinates: [-73.95241, 40.82851]
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
            coordinates: [-73.94606, 40.84041]
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
            coordinates: [-73.9386, 40.8566]
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
            coordinates: [-73.93629, 40.85929]
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
            coordinates: [-73.91622, 40.8721]
        },
        properties: {
            title: '1',
            description: 'test test'
        }
    }]
};

// instantiate the scrollama
var scroller = scrollama();

function handleStepProgress(response) {
    let stepProgress;

    if (response.element.id.slice(0, 5) === 'drive') {
        let driveSlideNum = parseInt(response.element.id.slice(-1));
        if (driveSlideNum === 0) {
            map.setLayoutProperty('animatedLine', 'visibility', 'visible');
            stepProgress = Math.round(response.progress * driveSmoothness);
        } else {
            stepProgress = Math.round(response.progress * driveSmoothness + driveSmoothness * driveSlideNum);
        }
        changeCenter(stepProgress);
    }
}

map.on("load", function () {
    console.log(routeData)
    let w = window.innerWidth;
    let initBounds = routeData.features[0].geometry.coordinates;

    if (followPoint === false) {
        var bounds = initBounds.reduce(function (bounds, coord) {
            return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(initBounds[0], initBounds[0]));

        if (w >= 500) {
            map.fitBounds(bounds, {
                padding: { top: 150, bottom: 150, right: -100, left: 200 },
                duration: 0
            });
        } else {
            map.fitBounds(bounds, {
                padding: 20,
                duration: 0
            });
        }
    } else {
        map.setZoom(followZoomLevel);
        map.setBearing(followBearing);
        map.setPitch(followPitch);
    }

    map.addSource('lineSource', {
        "type": "geojson",
        "data": geojsonPoint
    });

    map.addSource('pointSource', {
        "type": "geojson",
        "data": geojsonPoint
    });

    map.addLayer({
        "id": "animatedLine",
        "type": "line",
        "source": "lineSource",
        'paint': {
            'line-opacity': 1,
            'line-color': '#333',
            'line-width': 3.5
        },
        'layout': {
            'visibility': 'none'
        }
    });

    map.addLayer({
        "id": "animatedPoint",
        "type": "circle",
        "source": "pointSource",
        'paint': {
            'circle-radius': 5,
            'circle-opacity': 1,
            'circle-color': '#333'
        },
        'layout': {
            // 'visibility': 'none'
        }
    });

    var markers = []
    // setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');

            //slide index VYG
            let index = parseInt(response.element.id.slice(-1));
            // create a HTML element for each feature
            var m = geojson.features[index];
            var el = document.createElement('div');
            el.className = 'mark';
            var colorIndex = ["#9BCBEB", "#011F5B", "#046A38", "#FF671F", "#7C2529", "#B31B1B", "#A41034", "#00356B", "#9BCBEB"]
            var options = {
                "color": colorIndex[response.index]
            }
            // make a marker for the feature and add to the map
            if (response.index >= markers.length) {
                var marker = new mapboxgl.Marker(options) // (el) is the custom marker
                    .setLngLat(m.geometry.coordinates)
                    .addTo(map);
                markers.push(marker)
            }
            // map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
        })
        .onStepExit(response => {
            if (response.direction == "up") {
                markers[response.index].remove();
                markers.pop();
            }
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        })
        .onStepProgress(handleStepProgress);

    createLine();
});

// setup resize event
window.addEventListener('resize', scroller.resize);

