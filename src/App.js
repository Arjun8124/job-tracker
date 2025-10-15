import "./App.css";
import Nav from "./nav";
import JobSection from "./jobsection";
import Form from "./form";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [jobs, setJobs] = useState([]);

  function onAddJob(newJob) {
    setJobs([...jobs, newJob]);
  }

  function handleOpen() {
    setModal(true);
  }

  function handleClose() {
    setModal(false);
  }

  return (
    <>
      <Nav handleOpen={handleOpen} />
      <JobSection jobs={jobs} />
      {modal ? <Form onAddJob={onAddJob} handleClose={handleClose} /> : <></>}
    </>
  );
}

export default App;
