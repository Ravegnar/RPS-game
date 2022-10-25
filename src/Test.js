export default function Td(props) {
    let {id, className, warrior, children, ...rest} = props
      
    let emptyField = warrior ? "warrior" : "empty-field"
    children = warrior ? "War" : ""
    if (className === undefined) {
      className = "";
    }
  
    return (
      <td id={id} className={`${emptyField} ${className}`} {...rest}>{children}</td>
    );
  }



  import {useState, useEffect} from "react"
  import Tr from './Tr.js';
  import Td from './Td.js';
  
  export default function Playboard() {
      const [clicked, setMoveClicked] = useState(false)
  
      useEffect(() => {
          console.log(clicked)
      },[clicked])
  
      function handleButtonClick(event) {
          const warriorId = event.target.id.split("-")
          const moveUp = parseInt(warriorId[1]) - 1
          const moveDown = parseInt(warriorId[1]) + 1
          const moveLeft = parseInt(warriorId[2]) - 1
          const moveRight = parseInt(warriorId[2]) + 1
          
          console.log('event.target', event.target)
  
          document.querySelector(`#td-${moveUp}-${warriorId[2]}`).classList.replace("empty-field", "move");
          document.querySelector(`#td-${moveDown}-${warriorId[2]}`).classList.replace("empty-field", "move");
          document.querySelector(`#td-${warriorId[1]}-${moveLeft}`).classList.replace("empty-field", "move");
          document.querySelector(`#td-${warriorId[1]}-${moveRight}`).classList.replace("empty-field", "move");
  
          const moveFields = document.querySelectorAll(".move")
          
          moveFields.forEach(moveField => {
              moveField.addEventListener("click", eventTwo => {
                  eventTwo.preventDefault()
                  console.log('eventTwo', eventTwo.target)
          
                  eventTwo.target.classList.replace("move", "warrior")
                  event.target.classList.replace("warrior", "empty-field")
                  moveFields.forEach(moveFieldsd => moveFieldsd.classList.replace("move", "empty-field"))
                  setMoveClicked(!clicked)
              })
          })
      }
  
      return (<>
          <section id="playboard">
              <table>
                  <tbody>
                      <tr id="tr-1">
                          <Td id="td-1-1" />
                          <Td id="td-1-2" />
                          <Td id="td-1-3" />
                          <Td id="td-1-4" />
                          <Td id="td-1-5" />
                          <Td id="td-1-6" />
                          <Td id="td-1-7" />
                      </tr>
                      <tr id="tr-2">
                          <Td id="td-2-1" />
                          <Td id="td-2-2" />
                          <Td id="td-2-3" warrior onClick={handleButtonClick}></Td>
                          <Td id="td-2-4"/>
                          <Td id="td-2-5" />
                          <Td id="td-2-6" />
                          <Td id="td-2-7" />
                      </tr>
                      <tr id="tr-3">
                          <Td id="td-3-1" />
                          <Td id="td-3-2" />
                          <Td id="td-3-3" />
                          <Td id="td-3-4" />
                          <Td id="td-3-5" />
                          <Td id="td-3-6" />
                          <Td id="td-3-7" />
                      </tr>
                      <tr id="tr-4">
                          <Td id="td-4-1" />
                          <Td id="td-4-2" />
                          <Td id="td-4-3" />
                          <Td id="td-4-4" />
                          <Td id="td-4-5" />
                          <Td id="td-4-6" />
                          <Td id="td-4-7" />
                      </tr>
                      <tr id="tr-5">
                          <Td id="td-5-1" />
                          <Td id="td-5-2" />
                          <Td id="td-5-3" />
                          <Td id="td-5-4" />
                          <Td id="td-5-5" />
                          <Td id="td-5-6" warrior onClick={handleButtonClick}></Td>
                          <Td id="td-5-7" />
                      </tr>
                      <tr id="tr-6">
                          <Td id="td-6-1" />
                          <Td id="td-6-2" warrior onClick={handleButtonClick}></Td>
                          <Td id="td-6-3" />
                          <Td id="td-6-4" />
                          <Td id="td-6-5" />
                          <Td id="td-6-6" />
                          <Td id="td-6-7" />
                      </tr>
                      <tr id="tr-7">
                          <Td id="td-7-1" />
                          <Td id="td-7-2" />
                          <Td id="td-7-3" />
                          <Td id="td-7-4" />
                          <Td id="td-7-5" />
                          <Td id="td-7-6" />
                          <Td id="td-7-7" />
                      </tr>
                  </tbody>
              </table>
          </section>
      </>)
    }