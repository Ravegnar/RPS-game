import {useState, useEffect} from "react"
import Field from './Field.js';

export default function App() {
  const [selected, setSelected] = useState(null)
  const [lastSelected, setLastSelected] = useState(null)
  const [whoPlay, setWhoPlay] = useState(true)
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
    //console.count("")
    console.log(statuses?.[selected]?.[0])
    if (selected === null) return
    if (statuses[selected][0] !== "e" && statuses[selected][2] !== "m") {
      //přeoznačení - "m"
      if (statuses?.[lastSelected + up]?.[2] === "m") {statuses[lastSelected + up][2] = "n"}
      if (statuses?.[lastSelected + down]?.[2] === "m") {statuses[lastSelected + down][2] = "n"}
      if (statuses?.[lastSelected + left]?.[2] === "m") {statuses[lastSelected + left][2] = "n"}
      if (statuses?.[lastSelected + right]?.[2] === "m") {statuses[lastSelected + right][2] = "n"}

      //označení + "m"
      if (selected > 7 && statuses[selected + up][0] === "e") {statuses[selected + up][2] = "m"}
      if (selected < 42 && statuses[selected + down][0] === "e") {statuses[selected + down][2] = "m"}
      if (selected % 7 !== 0 && selected > 1 && statuses[selected + left][0] === "e") {statuses[selected + left][2] = "m"}
      if (selected % 7 !== 6 && selected < 48 && statuses[selected + right][0] === "e") {statuses[selected + right][2] = "m"}
      
      if (lastSelected !== null) {statuses[lastSelected][2] = "n"}
      setLastSelected(selected)
    } else if (statuses[selected][2] === "m") {
      //pohyb & - "m/w"
      if (statuses?.[lastSelected + up]?.[2] === "m") {statuses[lastSelected + up][2] = "n"}
      if (statuses?.[lastSelected + down]?.[2] === "m") {statuses[lastSelected + down][2] = "n"}
      if (statuses?.[lastSelected + left]?.[2] === "m") {statuses[lastSelected + left][2] = "n"}
      if (statuses?.[lastSelected + right]?.[2] === "m") {statuses[lastSelected + right][2] = "n"}

      if (lastSelected !== null) {statuses[lastSelected][2] = "n"}

      statuses[selected][0] = statuses[lastSelected][0]
      statuses[selected][1] = statuses[lastSelected][1]
      statuses[lastSelected][0] = "e"
      statuses[lastSelected][1] = "x"
      setWhoPlay(!whoPlay)
    }

    setStatuses([...statuses])
  }, [selected])

  const handleAction = (id) => {
    if (statuses[id][0] !== "e" && statuses[id][0] !== "m") {statuses[id][2] = "s"}
    setSelected(id)
  }

  return (<>
    <h1>Now play {nowPlay}</h1>
    <section id="playboard">
            {statuses.map((status, index) => (
                <Field
                    id={index}
                    key={index}
                    status={status}
                    onAction={handleAction}
                ></Field>
            ))}
        </section>
    </>);
}