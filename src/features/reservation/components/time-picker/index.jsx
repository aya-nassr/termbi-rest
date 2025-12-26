import { useState } from "react";
import "./style.css";

export function TimePicker({ selectedTime, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const times = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  const handleSelect = (t) => {
    onChange(t);
    setIsOpen(false);
  };

  return (
    <div className="custom-time-picker-wrapper">
      <div className="custom-input-trigger" onClick={() => setIsOpen(!isOpen)}>
        {selectedTime ? selectedTime : "Select Time"}
        <span className="arrow-icon">⌄</span>
      </div>

      {isOpen && (
        <div className="time-grid-dropdown">
          {times.map((t) => (
            <button
              key={t}
              type="button"
              className={`time-slot-btn ${selectedTime === t ? "active" : ""}`}
              onClick={() => handleSelect(t)}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="overlay-click" onClick={() => setIsOpen(false)}></div>
      )}
    </div>
  );
}
