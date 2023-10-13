import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const [location, setLocation] = useState(null);

  const centaurusMallPosition = [33.7073, 73.0477];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <MapContainer
      center={location || centaurusMallPosition}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {location && (
        <Marker position={[location.lat, location.lng]}>
          <Popup>You are here!</Popup>
        </Marker>
      )}
      <Marker position={centaurusMallPosition}>
        <Popup>Centaurus Mall, Islamabad</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
