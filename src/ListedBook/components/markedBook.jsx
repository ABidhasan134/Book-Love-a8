import React, { useContext, useEffect, useState } from "react";
// import NoteContext from '../../context/noteContext';

const MarkedBook = ({ book }) => {
  console.log(book);
  // State to hold the filtered list of marked books
  // const [markedBooks, setMarkedBooks] = useState([]);
  // const cardInfo = useContext(NoteContext);

  // useEffect(() => {
  //     const getFromLocal = JSON.parse(localStorage.getItem("book-id")) || [];
  //     // Filter the items based on the IDs stored in local storage
  //     const filteredBooks = cardInfo.filter(book => getFromLocal.includes(book.bookId));
  //     // Update state with the filtered list of marked books
  //     setMarkedBooks(filteredBooks);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cardInfo]);

  return (
    <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={book.image} />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default MarkedBook;
