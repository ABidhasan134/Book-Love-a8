import React, { useContext } from 'react'
import NoteContext from '../context/noteContext';

const ListedBook = () => {
  const cardInfo = useContext(NoteContext);
    console.log(cardInfo);
  return (
    <div>
        this is list
    </div>
  )
}

export default ListedBook
