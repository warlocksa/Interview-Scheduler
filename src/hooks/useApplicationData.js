import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  // const setAppointments = appointments => setState({ ...state, appointments });
  const setDay = day => setState({ ...state, day });

  const updateSpots = function (state, appointments, id) {
    // find the day
    const foundDay = state.days.find(d => d.name === state.day);
    // look at the appointment id`s (array)
    let spots = 0;
    const appointment = foundDay.appointments.map((id) =>
      state.appointments[id]
    )
    console.log("appointment",appointment)
    for (let app of appointment) {
      if (!app.interview) {
        spots++
      }
    }
    console.log("spots",spots)
    // count the ones where appointment is null (falsey)
    const day = { ...foundDay, spots }
    console.log("day", day)
    const days = state.days.map(d => d.name === state.day ? day : d);
    // return an updated days array
    return days;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const temp = {...state}
    temp.appointments = appointments
    const days = updateSpots(temp)  
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => (
      setState({
        ...state,
        days,
        appointments,
      })))
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const temp = { ...state }
    temp.appointments = appointments
    const days = updateSpots(temp) 
    return axios.delete(`/api/appointments/${id}`)
      .then(() => setState({ ...state, days, appointments }))
  }

  useEffect(() => {
    //axios request here...
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}