import {useState, useEffect} from "react"

export default function Field(props) {
    const {id, fieldStatus} = props
    const [status, setStatus] = useState([])

    useEffect(() => {
        if (fieldStatus[id] === "w") {
            setStatus("warrior")
        } else if (fieldStatus[id] === "m") {
            setStatus("move")
        } else {
            setStatus("empty-field")
        }
    })

    return (
      <div id={id} className={`field ${status}`} onClick={() => props.onProductDelete(id)}>{fieldStatus[id]}</div>
    );
  }