
    if (statuses[selected][0] === "r") {
      //přeoznačení - "m"
      if (statuses[choosen + up][0] === "m") {statuses[choosen + up][0] = "e"}
      if (statuses[choosen + down][0] === "m") {statuses[choosen + down][0] = "e"}
      if (statuses[choosen + left][0] === "m") {statuses[choosen + left][0] = "e"}
      if (statuses[choosen + right][0] === "m") {statuses[choosen + right][0] = "e"}
      //označení + "m"
      if (statuses[moveUp] === "e") {statuses[moveUp] = "m"}
      if (statuses[moveDown] === "e") {statuses[moveDown] = "m"}
      if (statuses[moveLeft] === "e") {statuses[moveLeft] = "m"}
      if (statuses[moveRight] === "e") {statuses[moveRight] = "m"}
      setSelected(selected)
    } else if (statuses[selected] === "m") {
      //pohyb & - "m/w"
      if (statuses[choosen - 7] === "m") {statuses[choosen - 7] = "e"}
      if (statuses[choosen + 7] === "m") {statuses[choosen + 7] = "e"}
      if (statuses[choosen - 1] === "m") {statuses[choosen - 1] = "e"}
      if (statuses[choosen + 1] === "m") {statuses[choosen + 1] = "e"}
      statuses[choosen] = "e"
      
      statuses[selected] = "r"
      setWhoPlay(!whoPlay)
    }

    if (statuses[selected] === statuses[choosen]) {
      //přeoznačení - "m"
      if (statuses[moveUp] === "m") {statuses[moveUp] = "e"}
      if (statuses[choosen + 7] === "m") {statuses[choosen + 7] = "e"}
      if (statuses[choosen - 1] === "m") {statuses[choosen - 1] = "e"}
      if (statuses[choosen + 1] === "m") {statuses[choosen + 1] = "e"}
      setSelected(null)
    }

    statuses.splice(49, 60)
    setStatuses(statuses)
//    setChoosen(null)

useEffect(() => {
  const up = -7
  const down = 7
  const left = -1
  const right = 1

  if (selected[0] === "r" || "p" || "s" || "t" || "o") {
    console.log(selected)
  }


}, [statuses, selected])
