import React, { useState } from 'react';
import "components/Appointment/styles.scss"
import InterviewerList from "components/InterviewerList"
import Button from "components/Button";

export default function Form(props) {
  const [error, setError] = useState("");
  function validate() {
      if (student === "") {
        setError("Student name cannot be blank");
        return;
      }
    if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
  setError("")
    props.onSave(student, interviewer);
  }
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const reset=() => {
    props.onCancel()
    setStudent("")
    setInterviewer(null)
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
          /*
            This must be a controlled component
            your code goes here
          */
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
          
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
        /* your code goes here */
          interviewers={props.interviewers}
          onChange={setInterviewer}
          value={interviewer}
        />
        <form onSubmit={event => event.preventDefault()}></form>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={ reset }>Cancel</Button>
          <Button confirm onClick={() => validate()}>Save</Button>
        </section>
      </section>
    </main>
  )
}
