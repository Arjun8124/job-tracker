import "./App.css";
export default function Job({
  id,
  position,
  company,
  time,
  onRemoveJob,
  setUpdateModal,
  getId,
}) {
  const handleCardClick = (e) => {
    if (e.target.className !== "remove-job") {
      setUpdateModal(true);
      getId(id);
    }
  };
  return (
    <div className="card" onClick={handleCardClick}>
      <h1>{position}</h1>
      <h2>Company Name :- {company}</h2>
      <h3>Time Duration :- {time}</h3>
      <button className="remove-job" onClick={() => onRemoveJob(id)}>
        Delete
      </button>
    </div>
  );
}
