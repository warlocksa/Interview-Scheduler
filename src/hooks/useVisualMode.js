import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (replace) {
      setMode(mode)
      setHistory(prev => ([...prev.slice(0, -1), mode]))
    }
    // if the history need to replace, delete the last history
    else {
      setMode(mode)
      setHistory(prev => ([...prev, mode]))
    }
  }

  function back() {
    console.log(history)
    if (history.length > 1) {
      const newHistory = history.slice(0,-1)
      const newMode = newHistory[newHistory.length - 1]
      setMode(newMode)
      setHistory(newHistory)
    }
    // if history is empty, refresh the page
    else {
      setMode(history[0])
    }
  }
  return { mode, transition, back };
}
