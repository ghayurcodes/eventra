import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
} from "react-leaflet";
import "./AddEventPage.css";

// 🔹 Helper to recenter map when location changes
const RecenterMap = ({ location }) => {
  const map = useMap();
  if (location) {
    map.setView(location, 13, { animate: true });
  }
  return null;
};

const AddEventPage = () => {
  const [title, setTitle] = useState("");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState(null);
  const timeoutRef = useRef(null);

  // 🔹 Fetch places from Nominatim API (debounced)
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      if (value.length < 3) {
        setSuggestions([]);
        return;
      }
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
      );
      const data = await res.json();
      setSuggestions(data);
    }, 400);
  };

  const handleSelectSuggestion = (place) => {
    const coords = { lat: parseFloat(place.lat), lng: parseFloat(place.lon) };
    setLocation(coords);
    setQuery(place.display_name);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !location) {
      alert("⚠️ Please provide both title and location!");
      return;
    }
    console.log("Event Added:", { title, location });
    alert("✅ Event added successfully!");
    setTitle("");
    setQuery("");
    setLocation(null);
  };

  return (
    <div className="add-event-container">
      <div className="add-event-card">
        <h2>Add New Event</h2>
        <form onSubmit={handleSubmit}>
          {/* Event Title */}
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Location Search */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search location..."
              value={query}
              onChange={handleSearch}
            />
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((place) => (
                  <li
                    key={place.place_id}
                    onClick={() => handleSelectSuggestion(place)}
                  >
                    {place.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Show map only when location is selected */}
          {location && (
            <div className="map-section fade-in">
              <MapContainer
                center={location}
                zoom={13}
                scrollWheelZoom={false}
                className="map-container"
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RecenterMap location={location} />
                <Marker position={location} />
              </MapContainer>
              <p className="location-info">
                📍 {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="btn-primary">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEventPage;
