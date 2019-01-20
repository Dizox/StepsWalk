function initMap(){
    var opt = {
        center: {lat: 43, lng: 13},
        zoom: 2,
        scrollwheel: false,
        scaleControl: false,
        mapTypeControl: false,
        draggable: false,
        navigationControl: false,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false
    };

    var positionPoland = {lat: 52, lng: 20};
    var positionChina1 = {lat: 40, lng: 106.4};
    var positionChina2 = {lat: 29.431, lng: 107};
    var positionChina3 = {lat: 35.41, lng: 116.5};
    var positionIndia1 = {lat: 19.07, lng: 72.9};
    var positionIndia2 = {lat: 21.14, lng: 79};
    var positionMexico1 = {lat: 23.6, lng: -102.5};
    var positionMexico2 = {lat: 26.504, lng: -114.89};
    var positionMexico3 = {lat: 35.504, lng: -104.89};

    var srcBlueMarker = 'img/blueMarker.png';
    var srcGreenMarker = 'img/greenMarker.png';

    var styledMapType = new google.maps.StyledMapType([
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#63b5e5"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": 0.01
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "saturation": -31
                },
                {
                    "lightness": -33
                },
                {
                    "weight": 2
                },
                {
                    "gamma": 0.8
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 30
                },
                {
                    "saturation": 30
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": 20
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 20
                },
                {
                    "saturation": -20
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 10
                },
                {
                    "saturation": -30
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": 25
                },
                {
                    "lightness": 25
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": -20
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "100"
                },
                {
                    "gamma": "0.00"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        }
    ],
    {name: 'Styled Map'});


    var map = new google.maps.Map(document.getElementById("map"), opt);
    var markers = [];
    var data = [];
    data[0] = {"lat": "52", "lng": "20", "icon": "img/blueMarker.png", "countryName": "Poland", "cityName": "Krackow", "date": "APR 8, 2019 - APR 13, 2019", "text": "To offer life changing corrective foot and ankle surgery to underserved regions of the world, while educating local surgeons to promote continued care of patients with crippling foot and ankle deformities."};
    data[1] = {"lat": "40", "lng": "106.4", "icon": "img/blueMarker.png", "countryName": "China", "cityName": "Tangshan", "date": "APR 15, 2019 - APR 17, 2019", "text": "RandomTextTangshan"};
    data[2] = {"lat": "29.431", "lng": "107", "icon": "img/greenMarker.png", "countryName": "China", "cityName": "Tangshan1", "date": "APR 18, 2019 - APR 19, 2019", "text": "RandomTextTangshan1"};
    data[3] = {"lat": "35.41", "lng": "116.5", "icon": "img/blueMarker.png", "countryName": "China", "cityName": "Tangshan2", "date": "APR 20, 2019 - APR 21, 2019", "text": "RandomTextTangshan2"};
    data[4] = {"lat": "19.07", "lng": "72.9", "icon": "img/greenMarker.png", "countryName": "India", "cityName": "Mumbai", "date": "APR 22, 2019 - APR 23, 2019", "text": "RandomTextMumbai"};
    data[5] = {"lat": "21.14", "lng": "79", "icon": "img/blueMarker.png", "countryName": "India", "cityName": "Mumbai1", "date": "APR 24, 2019 - APR 25, 2019", "text": "RandomTextMumbai1"};
    data[6] = {"lat": "23.6", "lng": "-102.5", "icon": "img/greenMarker.png", "countryName": "Mexico", "cityName": "MexicoCity", "date": "APR 26, 2019 - APR 27, 2019", "text": "RandomTextMexico"};
    data[7] = {"lat": "26.504", "lng": "-114.89", "icon": "img/blueMarker.png", "countryName": "Mexico", "cityName": "MexicoCity1", "date": "APR 28, 2019 - APR 29, 2019", "text": "RandomTextMexico1"};
    data[8] = {"lat": "35.504", "lng": "-104.89", "icon": "img/greenMarker.png", "countryName": "Mexico", "cityName": "MexicoCity2", "date": "APR 30, 2019 - APR 31, 2019", "text": "RandomTextMexico2"};

    function scrollToFooterMap() {
        var scrollTFM = $(".map__footer").offset().top + $(".map__footer").outerHeight()  - $(window).height();
        $("html").animate({
            scrollTop: scrollTFM
        }, 700)
    }

    for (var enumerationData = function(i){
        markers[i] = new google.maps.Marker({
            position: {
                lat: parseInt(data[i]["lat"], 10),
                lng: parseInt(data[i]["lng"], 10)
            },
            map: map,
            icon: data[i]["icon"]
        });

        markers[i].addListener("click", function() {
            $(".map__country").html(data[i]["countryName"]);
            $(".map__city").html(data[i]["cityName"]);
            $(".map__date").html(data[i]["date"]);
            $(".map__text").html(data[i]["text"]);
            scrollToFooterMap();
        })
    }, i = 0; i < data.length; i++){
        enumerationData(i);
    }

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    $(window).on('resize', function () {
        if ($(window).width() < 1050) {
            map.setOptions({draggable: true});
        }else{
            map.setOptions({draggable: false});
        }
    })
}
