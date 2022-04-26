import React, { useState, useEffect } from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import useVisualMode from "../../hooks/useVisualMode.js";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../../helpers/selectors.js"
import "components/Appointment/styles.scss"

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "Form";
  const SAVING = "Saving"
  // const saveSuccessful = useEffect(transition(SHOW), [save])
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY);
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
      .then(()=>transition(SHOW)) 
  }
 return (
   <>
   <Header time={props.time}/>
     {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
     {mode === SHOW && (
       <Show
         student={props.interview.student}
         interviewer={props.interview.interviewer}
       />
     )}
     {mode === CREATE && (
       <Form
         interviewers={props.interviewers} onSave={save} onCancel={() => back()}
       />
     )}
     {mode === SAVING && (
       <Status message={"saving"}/>
     )}
   </>
  ) 
}
