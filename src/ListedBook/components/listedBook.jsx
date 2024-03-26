import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../context/noteContext";
import MarkedBook from "./markedBook";
import WishMake from "./wishMake";

const ListedBook = () => {
  const cardInfo = useContext(NoteContext);
  const [markedBooks, setMarkedBooks] = useState([]);
  const [markeWish, setMarkedWish] = useState([]);
  
  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem("wish-id")) || [];
    const filteredBooks = cardInfo.filter((book) =>
      getFromLocal.includes(book.bookId)
    );
    setMarkedWish(filteredBooks);
  }, [cardInfo]);

  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem("book-id")) || [];
    const filteredBooks = cardInfo.filter((book) =>
      getFromLocal.includes(book.bookId)
    );
    setMarkedBooks(filteredBooks);
  }, [cardInfo]);

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Read Book"
        checked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {markedBooks.map((book) =><MarkedBook book={book}/>
        )}
      </div>
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="WishList"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {markeWish.map((book) =><WishMake book={book}/>
        )}
      </div>
    </div>
  );
};

export default ListedBook;
