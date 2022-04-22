import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const dayListItem = props.days.map(day => {
    return (
      <li>
        <DayListItem
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={day.name === props.value}
          onChange={props.onChange}
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