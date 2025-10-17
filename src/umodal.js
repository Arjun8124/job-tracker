import { useState } from "react";
import "./App.css";

export default function UModal({ setUpdateModal, onUpdateJob, currentJob }) {
  const [data, setData] = useState({
    position: currentJob.position,
    company: currentJob.company,
    duration: currentJob.duration,
  });

  function handleUpdateSubmit(e) {
    e.preventDefault();
    onUpdateJob(data);
    setUpdateModal(false);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleUpdateSubmit} className="form">
          <input
            type="text"
            placeholder="Update the position..."
            value={data.position}
            onChange={(e) => setData({ ...data, position: e.target.value })}
          />
          <input
            type="text"
            placeholder="Update the company..."
            value={data.company}
            onChange={(e) => setData({ ...data, company: e.target.value })}
          />
          <input
            type="text"
            placeholder="Update the duration..."
            value={data.duration}
            onChange={(e) => setData({ ...data, duration: e.target.value })}
          />
          <div className="Modal-buttons">
            <button type="submit">Update</button>
            <button type="button" onClick={() => setUpdateModal(false)}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
