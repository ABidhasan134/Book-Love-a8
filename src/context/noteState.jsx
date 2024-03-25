// noteState.js
import React, { useEffect, useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
      fetch("./selfMade.json")
      .then(res => res.json())
      .then(data => setCardInfo(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  
  return (
    <NoteContext.Provider value={cardInfo}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
