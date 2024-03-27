import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../context/noteContext";
import MarkedBook from "./markedBook";
import WishMake from "./wishMake";
import { IoChevronDown } from "react-icons/io5";

const ListedBook = () => {
  const cardInfo = useContext(NoteContext);
  const [markedBooks, setMarkedBooks] = useState([]);
  const [displayBook, setDisplayBook] = useState([]);
  const [markeWish, setMarkedWish] = useState([]);
  const [wishDisplay, setWishDisplay] = useState([]);

  const handelShort = (etype) => {
    if (etype === "all") {
      setDisplayBook(markedBooks);
      // console.log("all");
    } else if (etype === "page") {
      const sortedBooks = [...markedBooks].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setDisplayBook(sortedBooks);
    } else if (etype === "rating") {
      const sortedrat = [...markedBooks].sort((a, b) => b.rating - a.rating);
      setDisplayBook(sortedrat);
    } else if (etype === "year") {
      const sortedrat = [...markedBooks].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setDisplayBook(sortedrat);
    }
    // Add additional sorting logic for other criteria if needed
  };
  //
  // wish sort start
  const handelWish = (etype) => {
    if (etype === "all") {
      setWishDisplay(wishDisplay);
      console.log("all");
    } else if (etype === "page") {
      const sortedBooks = [...markeWish].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setWishDisplay(sortedBooks);
    } else if (etype === "rating") {
      const sortedrat = [...markeWish].sort((a, b) => b.rating - a.rating);
      setWishDisplay(sortedrat);
    } else if (etype === "year") {
      const sortedrat = [...markeWish].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setWishDisplay(sortedrat);
    }
  };
  // wish short function end
  // finding wish data
  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem("wish-id")) || [];
    const filteredBooks = cardInfo.filter((book) =>
      getFromLocal.includes(book.bookId)
    );
    setMarkedWish(filteredBooks);
    setWishDisplay(filteredBooks);
  }, [cardInfo]);
  // stop finding wish data
  // finding read book data
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
    <div>
      <div className="bg-pink-50 p-4 flex justify-center items-center rounded-s-2xl mb-4">
        <h1 className="text-5xl font-bold">Book</h1>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        {/* Read section start */}
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
          <div className="justify-center text-center">
            <details className="dropdown">
              <summary className="m-1 btn bg-green-500 hover:bg-green-600">
                sort by<IoChevronDown></IoChevronDown>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a onClick={() => handelShort("all")}>All</a>
                </li>
                <li>
                  <a onClick={() => handelShort("rating")}>Reating</a>
                </li>
                <li>
                  <a onClick={() => handelShort("page")}>Number of Page</a>
                </li>
                <li>
                  <a onClick={() => handelShort("year")}>Publishing Year</a>
                </li>
              </ul>
            </details>
          </div>

          {displayBook.map((book) => (
            <MarkedBook book={book} />
          ))}
        </div>
        {/* Read section end */}
        {/* wish area start */}
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
          <div className="justify-center text-center">
            <details className="dropdown">
              <summary className="m-1 btn bg-green-500 hover:bg-green-600">
                sort by<IoChevronDown></IoChevronDown>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a onClick={() => handelWish("all")}>All</a>
                </li>
                <li>
                  <a onClick={() => handelWish("rating")}>Reating</a>
                </li>
                <li>
                  <a onClick={() => handelWish("page")}>Number of Page</a>
                </li>
                <li>
                  <a onClick={() => handelWish("year")}>Publishing Year</a>
                </li>
              </ul>
            </details>
          </div>

          {wishDisplay.map((book) => (
            <WishMake book={book} />
          ))}
        </div>
        {/* wish area start */}
      </div>
    </div>
  );
};

export default ListedBook;
