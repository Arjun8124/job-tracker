import "./App.css";
import Nav from "./nav";
import JobSection from "./jobsection";
import Form from "./form";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);

  function onAddJob(newJob) {
    const jobWithId = {
      ...newJob,
      id: Date.now(),
    };
    setJobs([...jobs, jobWithId]);
  }

  function onRemoveJob(id) {
    const afterRemovedJobs = jobs.filter((job) => job.id !== id);
    setJobs(afterRemovedJobs);
  }

  function handleOpen() {
    setModal(true);
  }

  function handleClose() {
    setModal(false);
  }

  const filteredJobs = jobs.filter(
    (job) =>
      job.position.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Nav handleOpen={handleOpen} setSearch={setSearch} />
      <JobSection jobs={filteredJobs} onRemoveJob={onRemoveJob} />
      {modal ? <Form onAddJob={onAddJob} handleClose={handleClose} /> : <></>}
    </>
  );
}

export default App;
