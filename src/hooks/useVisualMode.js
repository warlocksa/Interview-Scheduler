import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (!replace) {
      setMode(mode)
      setHistory([...history, mode])
    }
    else {
      history.pop()
      setMode(mode)
      setHistory([...history, mode])
    }
  }

  function back() {
    const historyCopy = [...history]
    if (historyCopy.length > 1) {
      const newMode = historyCopy.pop()
      setMode(newMode)
      setHistory(historyCopy)
    }
    else {
      setMode(historyCopy[0])
    }
  }
  return { mode, transition, back };
}
