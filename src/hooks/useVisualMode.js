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
    if (history.length > 1) {
      history.pop()
      let x = history.length - 1
      setMode(history[x])
      setHistory(history)
    }
    else {
      setMode(history[0])
    }
  }


  return { mode, transition, back };
}
