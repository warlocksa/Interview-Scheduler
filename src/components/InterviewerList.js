import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const interviewerList = props.interviewers.map(ivL => {
    return (
      <li>
        <InterviewerListItem
          key={ivL.id}
          name={ivL.name}
          avatar={ivL.avatar}
          id={ivL.id}
          selected={ivL.id === props.interviewer}
          setInterviewer={props.setInterviewer}
        />
      </li>
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerList}
      </ul>
    </section>
  )
}