import "./App.css";
export default function Job({ id, position, company, time, onRemoveJob }) {
  return (
    <div className="card">
      <h1>{position}</h1>
      <h2>Company Name :- {company}</h2>
      <h3>Time Duration :- {time}</h3>
      <button className="remove-job" onClick={() => onRemoveJob(id)}>
        Delete
      </button>
    </div>
  );
}
