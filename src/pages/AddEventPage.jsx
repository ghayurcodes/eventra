import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "./AddEventPage.css";

const LocationSelector = ({ setLocation }) => {
  const [marker, setMarker] = useState(null);

  useMapEvents({
    click(e) {
      setMarker(e.latlng);
      setLocation(e.latlng);
    },
  });

  return marker ? <Marker position={marker} /> : null;
};

// ✅ Helper component to move map when location changes
const RecenterMap = ({ location }) => {
  const map = useMap();
  if (location) {
    map.setView(location, 13); // zoom into selected place
  }
  return null;
};

const AddEventPage = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const timeoutRef = useRef(null);

  // 🔹 Fetch places from Nominatim API
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
    }, 500); // debounce 0.5s
  };

  const handleSelectSuggestion = (place) => {
    const coords = { lat: parseFloat(place.lat), lng: parseFloat(place.lon) };
    setLocation(coords);
    setSelectedMarker(coords);
    setQuery(place.display_name);
    setSuggestions([]);
  };

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
    setQuery("");
    setSelectedMarker(null);
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

          {/* 🔹 Search bar */}
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

          <div className="map-section">
            <p>Click on the map or search to select event location:</p>
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
              <RecenterMap location={location} />
              {selectedMarker && <Marker position={selectedMarker} />}
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
