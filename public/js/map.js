if (!coordinates || coordinates.length !== 2) {
    console.log("Map coordinates are not available for this listing.");
} else {    
    mapboxgl.accessToken = mapToken;
        
    const map = new mapboxgl.Map({
        container: "map", // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/streets-v12",   //style URL
        center: coordinates, // starting position [n
        zoom: 9, // starting zoom
    });

    const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(coordinates) //Listing.geometry.coordinates
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h4>${location}</h4><p>Exact Location provided after booking</p>`
            )
        )
        .addTo(map);
}