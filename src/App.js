import {useState, useEffect} from "react"
import Playboard from './Playboard.js';

export default function App() {
  const [selected, setSelected] = useState(null)
  const [whoPlay, setWhoPlay] = useState(true)
  const [choosen, setChoosen] = useState(null)
  const [statuses, setStatuses] = useState([
    ["r", "b", "n", "h"],["p", "b", "n", "h"],["s", "b", "n", "h"],["t", "b", "n", "h"],["o", "b", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],
    ["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],
    ["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],
    ["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],
    ["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],
    ["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"],
    ["r", "r", "n", "h"],["p", "r", "n", "h"],["s", "r", "n", "h"],["t", "r", "n", "h"],["o", "r", "n", "h"],["e", "x", "n", "h"],["e", "x", "n", "h"]
  ])

  const nowPlay = whoPlay ? "Red" : "Blue"
  const up = -7
  const down = 7
  const left = -1
  const right = 1

  useEffect(() => {
    console.log(statuses?.[selected]?.[0])
    if (selected === null) return
    if (statuses[selected][0] !== "e" && statuses[selected][0] !== "m") {
      if (selected > 7 && statuses[selected + up][0] === "e") {statuses[selected + up][0] = "m"}
      if (selected < 42 && statuses[selected + down][0] === "e") {statuses[selected + down][0] = "m"}
      if (selected % 7 !== 0 && selected > 1 && statuses[selected + left][0] === "e") {statuses[selected + left][0] = "m"}
      if (selected % 7 !== 6 && selected < 48 && statuses[selected + right][0] === "e") {statuses[selected + right][0] = "m"}
    }

    setStatuses(statuses)
  }, [statuses, selected])

  const handleAction = (id) => {
    if (statuses[id][0] !== "e" && statuses[id][0] !== "m") {statuses[id][2] = "s"}
    setSelected(id)
  }

  return (<>
    <h1>Now play {nowPlay}</h1>
    <Playboard statuses={statuses} onAction={handleAction} />
    </>);
}