import {useState, useEffect} from "react"

export default function Td(props) {
    const {id, className, warrior, children, ...rest} = props
    const [status, setStatus] = useState("empty-field")

    useEffect(() => {
        if (warrior === true) {
            setStatus("warrior")
        }
    }, [status])
    

    function handleWarrior(event) {
        if (status === "empty-field") return;
        if (status === "move") return;
        if (status === "warrior") {
            const warriorId = event.target.id.split("-")
            const moveUpID = parseInt(warriorId[1]) - 1
            const moveDownID = parseInt(warriorId[1]) + 1
            const moveLeftID = parseInt(warriorId[2]) - 1
            const moveRightID = parseInt(warriorId[2]) + 1
            
            console.log('event.target', event.target.id)

            document.querySelector(`#td-${moveUpID}-${warriorId[2]}`).classList.replace("empty-field", "move");
            document.querySelector(`#td-${moveDownID}-${warriorId[2]}`).classList.replace("empty-field", "move");
            document.querySelector(`#td-${warriorId[1]}-${moveLeftID}`).classList.replace("empty-field", "move");
            document.querySelector(`#td-${warriorId[1]}-${moveRightID}`).classList.replace("empty-field", "move");
              
          const moveFields = document.querySelectorAll(".move")
          
          moveFields.forEach(moveField => {
              moveField.addEventListener("click", eventTwo => {
                console.log(eventTwo.target)
                setStatus("empty-field")
              })
          })
        }

    }
    

    return (
	    <td id={id} className={status} onClick={handleWarrior} {...rest}>{children}</td>
    );
}