import "./App.css";
import Job from "./job";

export default function JobSection({
  jobs,
  onRemoveJob,
  setUpdateModal,
  update,
  getId,
}) {
  return (
    <div className="job-container">
      {jobs.length === 0 ? (
        <h1>Enter Some jobs</h1>
      ) : (
        jobs.map((job) => (
          <Job
            id={job.id}
            key={job.id}
            position={job.position}
            company={job.company}
            time={job.duration}
            onRemoveJob={onRemoveJob}
            setUpdateModal={setUpdateModal}
            update={update}
            getId={getId}
          />
        ))
      )}
    </div>
  );
}
