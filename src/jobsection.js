import "./App.css";
import Job from "./job";

export default function JobSection({ jobs }) {
  return (
    <div className="job-container">
      {jobs.length === 0 ? (
        <h1>Enter Some jobs</h1>
      ) : (
        jobs.map((job) => (
          <Job
            position={job.position}
            company={job.company}
            time={job.duration}
          />
        ))
      )}
    </div>
  );
}
