import { useRef, useState, useEffect, useCallback } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibWJidGtkZXZqaW05MSIsImEiOiJja3R0cXNxYmIwM2J0MnBtbWgzMHpnbzBpIn0.2aoySEqBh3XRrXp3d2mg4g';

export default function GMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(104.88);
  const [lat, setLat] = useState(11.56);
  const [zoom] = useState(9);

  const loadMap = useCallback(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
  }, [lat, lng, zoom])

  useEffect(() => {
    // Get golocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLng(pos.coords.longitude)
        setLat(pos.coords.latitude)

        loadMap()
      }, (err) => {
        console.log(err);
        loadMap()
      }, { maximumAge: 60000, timeout: 3000 })
    } else {
      loadMap()
    }
  }, [loadMap])

  return (
    <div className="map">
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}
