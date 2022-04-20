import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const dayListItem = props.days.map(dLI => {
    return (
      <li>
      <DayListItem
        key={dLI.id}
        name={dLI.name}
        spots={dLI.spots}
        selected={dLI.name === props.day}
        setDay={props.setDay}
      />
      </li>
    );
  });
  return (
    <ul>
      {dayListItem}
    </ul>
  )
}