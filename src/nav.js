import "./App.css";
export default function Nav({ handleOpen }) {
  return (
    <div className="navbar">
      <h2 className="icon">💼Job Tracker🏢</h2>
      <div className="right-nav">
        <input
          className="Search"
          type="text"
          placeholder="Search For Jobs..."
        />
        <button className="addJob" type="button" onClick={handleOpen}>
          ➕Add New Job
        </button>
      </div>
    </div>
  );
}
