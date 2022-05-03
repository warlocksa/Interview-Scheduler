export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const foundDay = state.days.find(d => d.name === day);
  // if the day is undefined, appointments shall be empty
  if (foundDay === undefined) {
    return [];
  }
  return foundDay.appointments.map((id) =>
    state.appointments[id]
  )
}

export function getInterview(state, interview) {
  // if interview exist, update the interview. else return null.
  if (interview) {
    const result = { ...interview };
    result.interviewer = state.interviewers[interview.interviewer];
    return result;
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  const foundDay = state.days.find(d => d.name === day);
  // if the day is undefined, interviewers shall be empty
  if (foundDay === undefined) {
    return [];
  }
  return foundDay.interviewers.map((id) =>
    state.interviewers[id]
  )
}

