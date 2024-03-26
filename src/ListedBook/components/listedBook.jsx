import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../context/noteContext";
import MarkedBook from "./markedBook";
import WishMake from "./wishMake";
import { IoChevronDown } from "react-icons/io5";

const ListedBook = () => {
  const cardInfo = useContext(NoteContext);
  const [markedBooks, setMarkedBooks] = useState([]);
  const [markeWish, setMarkedWish] = useState([]);
  const [displayBook,setDisplayBook]=useState([]);

  const handelShort = (etype) => {
    if (etype === "all") {
      setDisplayBook(markedBooks);
      console.log("all")
    } else if (etype === "page") {
      const sortedBooks = [...markedBooks].sort((a, b) => a.totalPages - b.totalPages);
      setDisplayBook(sortedBooks);
    }
    else if (etype === "rating") {
      const sortedrat = [...markedBooks].sort((a, b) => b.rating - a.rating);
      setDisplayBook(sortedrat);
    }
    else if (etype === "year") {
      const sortedrat = [...markedBooks].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      setDisplayBook(sortedrat);
    }
    // Add additional sorting logic for other criteria if needed
  };

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
    setDisplayBook(filteredBooks);
  }, [cardInfo]);
  // console.log(displayBook);

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
        <div className="border-2 border-red-500 justify-center text-center">
          <details className="dropdown">
          <summary className="m-1 btn bg-green-500 hover:bg-green-600">sort by<IoChevronDown></IoChevronDown></summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={()=>handelShort("all")}>All</a>
            </li>
            <li>
              <a onClick={()=>handelShort("rating")}>Reating</a>
            </li>
            <li>
              <a onClick={()=>handelShort("page")}>Number of Page</a>
            </li>
            <li>
              <a onClick={()=>handelShort("year")}>Publishing Year</a>
            </li>
          </ul>
          </details>
        </div>

        {displayBook.map((book) => (
          <MarkedBook book={book} />
        ))}
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
        {markeWish.map((book) => (
          <WishMake book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedBook;
