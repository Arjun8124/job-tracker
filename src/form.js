import { useState } from "react";

export default function Form({ onAddJob, handleClose }) {
  const [formData, setFormData] = useState({
    id: Date.now(),
    position: "",
    company: "",
    duration: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddJob(formData);
    setFormData({ position: "", company: "", duration: "" });
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter the position..."
            value={formData.position}
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter the company..."
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter the duration..."
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
          />
          <div className="Modal-buttons">
            <button type="submit">Add Job</button>
            <button onClick={handleClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}
