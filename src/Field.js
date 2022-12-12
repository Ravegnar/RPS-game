import {useState, useEffect} from "react"

export default function Field({id, status, onAction}) {
    const [fieldStatus, setFieldStatus] = useState([])
    const [team, setTeam] = useState([])
    const [selected, setSelected] = useState([])

    useEffect(() => {
        if (status[0] === "r") {
            setFieldStatus("rock")
        } else if (status[0] === "p") {
            setFieldStatus("paper")
        } else if (status[0] === "s") {
            setFieldStatus("scissor")
        } else if (status[0] === "t") {
            setFieldStatus("tapir")
        } else if (status[0] === "o") {
            setFieldStatus("spock")
        } else if (status[0] === "m") {
            setFieldStatus("move")
        } else {
            setFieldStatus("empty-field")
        }

        if (status[1] === "r") {
            setTeam("red")
        } else if (status[1] === "b") {
            setTeam("blue")
        }

        if (status[2] === "s") {
            setSelected("selected")
        }
    })

    return (
      <div id={id} className={`field ${fieldStatus} ${team} ${selected}`} onClick={(e) => onAction(id)} >{status}</div>
    );
  }