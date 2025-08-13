import React from "react";
import "./EventsSection.css";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Lahore Music Fest",
      date: "Aug 20, 2025",
      location: "Lahore, Punjab",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Islamabad Tech Expo",
      date: "Sep 5, 2025",
      location: "Islamabad, ICT",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Karachi Food Carnival",
      date: "Sep 15, 2025",
      location: "Karachi, Sindh",
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="events-section">
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
