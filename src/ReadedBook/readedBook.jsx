import React, { useContext, useEffect, useState } from 'react';
import NoteContext from '../context/noteContext';
import ShowChart from './showChart';


const ReadedBook = () => {
  const cardInfo = useContext(NoteContext);
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem("book-id")) || [];
    const filteredBooks = cardInfo.filter((book) =>
      getFromLocal.includes(book.bookId)
    );
    setChart(filteredBooks);
  }, [cardInfo]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ShowChart data={chart} />
    </div>
  );
}

export default ReadedBook;
