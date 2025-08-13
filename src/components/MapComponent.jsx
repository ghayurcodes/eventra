import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "./MapComponent.css";
import pinIcon from "./media/pin.png";

const customIcon = new L.Icon({
  iconUrl: pinIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -28],
});


function RecenterMap({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
}

export default function MapComponent() {
  const locations = [
    { id: 1, name: "Islamabad", position: [33.6844, 73.0479] },
    { id: 2, name: "Karachi", position: [24.8607, 67.0011] },
    { id: 3, name: "Lahore", position: [31.5204, 74.3587] },
  ];

  const [mapCenter, setMapCenter] = useState([33.6844, 73.0479]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMapCenter([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation not supported by this browser.");
    }
  }, []);

  return (
    <div className="map-section">
      <h2 className="map-title">Event Locations</h2>
      <MapContainer
        center={mapCenter}
        zoom={14}
        scrollWheelZoom={true}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        
        <RecenterMap center={mapCenter} />

        {locations.map((loc) => (
          <Marker key={loc.id} position={loc.position} icon={customIcon}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}

        <Marker position={mapCenter} icon={customIcon}>
          <Popup>{"Ghayur Home"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
