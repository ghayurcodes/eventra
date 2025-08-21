// src/pages/AddEventPage.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "./AddEventPage.css";

const LocationSelector = ({ setLocation }) => {
  const [marker, setMarker] = useState(null);

  useMapEvents({
    click(e) {
      setMarker(e.latlng);
      setLocation(e.latlng); // pass coordinates to parent
    },
  });

  return marker ? <Marker position={marker} /> : null;
};

const AddEventPage = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !location) {
      alert("Please provide all event details!");
      return;
    }
    console.log("Event Added:", { title, location });
    alert("Event added successfully!");
    setTitle("");
    setLocation(null);
  };

  return (
    <div className="add-event-container">
      <div className="add-event-card">
        <h2>Add New Event</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="map-section">
            <p>Click on the map to select event location:</p>
            <MapContainer
              center={[30.3753, 69.3451]} // Pakistan center
              zoom={5}
              scrollWheelZoom={true}
              className="map-container"
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationSelector setLocation={setLocation} />
            </MapContainer>
          </div>

          {location && (
            <p className="location-info">
              📍 Selected: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
            </p>
          )}

          <button type="submit" className="btn-primary">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEventPage;
