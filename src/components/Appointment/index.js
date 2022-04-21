import React from "react";

import "components/Appointment/styles.scss"

export default function Appointment(props) {
  if(props.time)
  return(
    <article className="appointment">Appointment at {props.time}</article>
  )
  if(!props.time)
  return (
    <article className="appointment">There are no appointment</article>
  )
}