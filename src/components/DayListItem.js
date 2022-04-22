import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  console.log(props.selected,'props.selected')
  console.log(props);
  const dayListClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots===0
  });

  const formatSpots=()=>{
    if(props.spots===0) {
      return 'no spots remaining'
   }
   if(props.spots ===1) {
      return '1 spot remaining'
   }
    return `${props.spots} spots remaining`
  }
  return (
    <li onClick={() => props.onChange(props.value)} 
      className={dayListClass}
    >
      <h2 className="text--regular" >{props.value}</h2>
      <h3 className="text--light" >{formatSpots()}</h3>
    </li>
  );
}