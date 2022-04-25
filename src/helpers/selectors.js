export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  let result = [];
  const filteredday = state.days.filter(Day => Day.name === day)

  if (filteredday.length === 0) {
    return result;
  }
  if (filteredday.length > 0) {
    for (let appointmentId of filteredday[0].appointments) {
      for (let Appointment of Object.keys(state.appointments)) {
        if (appointmentId == Appointment) {
          result.push(state.appointments[Appointment]);
        }
      }
    }
    return result;
  }
}

export function getInterview(state, interview) {
  if (interview) {
    const result = { ...interview };
    result.interviewer = state.interviewers[interview.interviewer];
    return result;
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  let result = [];
  const filteredday = state.days.find(Day => Day.name === day)
  if (!filteredday) {
    return result;
  }
  if (filteredday) {
    const appointmentIds = filteredday.appointments
    for (let appointmentId of appointmentIds) {
      if (state.appointments[appointmentId].interview) {
        let itv = state.appointments[appointmentId].interview;
        result.push(state.interviewers[itv.interviewer])
      }
    } 
  }
  return result;
}

