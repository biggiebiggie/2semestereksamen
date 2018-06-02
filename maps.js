function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: {
                    lat: 55.693098,
                    lng: 12.543117
                }
            });

            let marker = new google.maps.Marker({
                position: {
                    lat: 55.693098,
                    lng: 12.543117
                },
                map: map
            });

            //	 })
            //            var geocoder = new google.maps.Geocoder();
            //
            //            window.addEventListener("load", function() {
            //                geocodeAddress(geocoder, map);
            //            });
            //
            var infowindow = new google.maps.InfoWindow({
                content: '<h2>Keramiker Inge Vincents</h2>' + '<p>Åbningstider: Mandag Onsdag Fredag: 10-17:30<br>Tirsdag: 11-17<br>Torsdag: 10-18<br>Lørdag: 11-16</p>' + '<p>Besøg mig på: </p><a href="http://www.vincents.dk/da/">www.vincents.dk</a>'
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        }

        //        function geocodeAddress(geocoder, resultsMap) {
        //            var address = "Jægersborggade 43, 2200 København, Danmark";
        //            geocoder.geocode({
        //                'address': address
        //            }, function(results, status) {
        //                if (status === 'OK') {
        //                    resultsMap.setCenter(results[0].geometry.location);
        //                    var marker = new google.maps.Marker({
        //                        map: resultsMap,
        //                        position: results[0].geometry.location
        //                    });
        //                } else {
        //                    alert('Geocode was not successful for the following reason: ' + status);
        //                }
        //            });
        //        }
