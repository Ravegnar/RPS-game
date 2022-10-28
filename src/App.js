import {useState, useEffect} from "react"
import Playboard from './Playboard.js';

export default function App() {
  const [fieldStatus, setFieldStatus] = useState([
    "e","e","e","e","e","e","e",
    "e","e","w","e","e","e","e",
    "e","e","e","e","m","e","e",
    "e","e","m","e","e","w","e",
    "e","e","e","e","e","e","e",
    "e","w","e","e","e","e","e",
    "e","e","e","e","e","e","e"
  ])

  function handleProductDelete(id) {
      const moveUp = parseInt(id) - 7
      const moveDown = parseInt(id) + 7
      const moveLeft = parseInt(id) - 1
      const moveRight = parseInt(id) + 1

      const nextFieldStatus = fieldStatus.map((prevFieldStatus, count) => {
        if (count == id) {
            if (prevFieldStatus === "w") {
              console.log("warrior")
              fieldStatus[moveLeft] = "masdasdasd"
              console.log()
              fieldStatus[id - 7] = "m"
              fieldStatus[id + 1] = "m"
              fieldStatus[id + 7] = "m"
              return "w"
            } else if (prevFieldStatus === "e") {
              console.log("empty")
              return prevFieldStatus 
            } else if (prevFieldStatus === "m") {
              return "w" 
            }

        } else {
          return prevFieldStatus;
        }
      });
      console.log(nextFieldStatus)
      setFieldStatus(nextFieldStatus);
  }


  return (<>
    <Playboard fieldStatus={fieldStatus} onProductDelete={handleProductDelete} />
    </>);
}