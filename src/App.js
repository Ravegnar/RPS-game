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
      const nextFieldStatus = fieldStatus.map((prevFieldStatus, count) => {
        if (count == id) {
          return "w";
        } else {
          return prevFieldStatus;
        }
      });
      setFieldStatus(nextFieldStatus);
  }


  return (<>
    <Playboard fieldStatus={fieldStatus} onProductDelete={handleProductDelete} />
    </>);
}