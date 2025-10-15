import "./App.css";
import Job from "./job";
export default function JobSection() {
  return (
    <div className="job-container">
      <Job
        position="Software Developer Intern"
        company="Google"
        time="4 Months"
      />
      <Job
        position="Python Developer Intern"
        company="Nvidia"
        time="6 Months"
      />
      <Job position="Game Developer" company="Ubisoft" time="12 Months" />
      <Job
        position="Software Developer Intern"
        company="Amazon"
        time="2 Months"
      />
    </div>
  );
}
