import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

import NoteContext from "../../../context/noteContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify, saveStoredId, saveWishId } from "../../localStor/localStor";
// import ShowDitails from './showDitails';

const CardDitails = () => {
  // geting data from loder
  const idget = useLoaderData();
  // all data from context Api
  const cardInfo = useContext(NoteContext);
// add tost 

  const handelStor=(id)=>{
    saveStoredId(id);
    // notify("Add to read successfully!");
  }
  const handelWishList=(id)=>{
    // console.log(id);
    saveWishId(id);
  }

  const book = cardInfo.find((book) => book.bookId == idget);
  // console.log(book);
  return (
    <div className="card lg:card-side bg-sky-50 shadow-xl">
      <figure>
        <img src={book.image} alt="Album" />
      </figure>
      <div className="p-10 w-full">
        <h2 className="card-title text-5xl">{book.bookName}</h2>
        <p className="text-2xl py-5">By: {book.author}</p>
        <hr className="border-1 border-gray-400 w-full" />
        <p className="text-2xl p-1">{book.category}</p>
        <hr className="border-1 border-gray-400 w-full" />
        <p>
          <span className="font-bold text-2xl">Review:</span> {book.review}
        </p>
        {/* tag section */}
        <section className="flex gap-10 items-center mt-5">
          <p className="text-2xl font-semibold">Tag</p>
          <p className="shadow-md p-4 bg-sky-50 rounded-3xl text-sky-600">
            #{book.tags[0]}
          </p>
          <p className="shadow-md p-4 bg-sky-50 rounded-3xl text-sky-600">
            #{book.tags[1]}
          </p>
      
        </section>
        <hr className="border-1 border-gray-400 w-full mt-6" />

        <div className="mt-6 gap-6">
          <div className="flex">
            <p className="w-48">Number of page:</p>
            <p className="font-bold">{book.totalPages}</p>
          </div>
          <div className="flex">
            <p className="w-48">Publisher</p>
            <p className="font-bold">{book.publisher}</p>
          </div>
          <div className="flex">
            <p className="w-48">Year of publishing</p>
            <p className="font-bold">{book.yearOfPublishing}</p>
          </div>
          <div className="flex">
            <p className="w-48">Reating</p>
            <p className="font-bold">{book.rating}</p>
          </div>
        </div>

        <div className="card-actions mt-6 gap-6">
          <button
            onClick={() => handelStor(book.bookId)}
            className="btn bg-transparent border-2 border-sky-300 hover:bg-sky-400 text-2xl"
          >
            Read
          </button>
          <button onClick={()=>handelWishList(book.bookId)}
          className="btn hover:bg-transparent border-2 border-green-400 bg-green-400 text-2xl">
            Wish List
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default CardDitails;
