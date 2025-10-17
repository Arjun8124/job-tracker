import "./App.css";
import Nav from "./nav";
import JobSection from "./jobsection";
import Form from "./form";
import UModal from "./umodal";
import { useEffect, useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [update, setUpdateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [id, getId] = useState(null);
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

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

  function onUpdateJob(data) {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? {
              ...job,
              position: data.position,
              company: data.company,
              duration: data.duration,
            }
          : job
      )
    );
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
      <JobSection
        jobs={filteredJobs}
        onRemoveJob={onRemoveJob}
        setUpdateModal={setUpdateModal}
        getId={getId}
      />
      {modal ? <Form onAddJob={onAddJob} handleClose={handleClose} /> : <></>}
      {update ? (
        <UModal
          setUpdateModal={setUpdateModal}
          onUpdateJob={onUpdateJob}
          currentJob={jobs.find((job) => job.id === id)}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
