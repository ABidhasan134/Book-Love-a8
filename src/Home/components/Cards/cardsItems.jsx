import React from "react";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const CardsItems = ({ items }) => {
//   const handleClick = () => {
//     // You can use any navigation logic here if required
//     // For example, if you want to navigate to a specific route, use history.push('/')
//     // console.log("Card clicked:", items);
//     // onClick={handleClick}
//   };

  return (
    <Link to={`/details/${items.bookId}`} >
      <div className="card w-96 bg-base-100 border-[2px] border-gray-300 mt-5 cursor-pointer">
        <figure className="px-10 pt-10">
          <img src={items.image} alt="Books" className="rounded-xl" />
        </figure>
        <div className="card-body items-start w-full">
          <div className=" flex gap-24 w-full justify-between">
            <button className="text-sky-400 shadow-sm shadow-green-100">
              {items.identity}
            </button>
            <p className="text-sky-400 shadow-sm shadow-green-100">
              {items.nickname}
            </p>
          </div>
          <h2 className="card-title">{items.bookName}</h2>
          <p>By: {items.author}</p>
          <hr className="border-1 border-gray-400 border-dashed w-full" />
        </div>
        <div className="flex justify-between mx-6 pb-6">
          <p>{items.category}</p>
          <div className="flex items-center">
            <p>{items.rating}</p>
            <CiStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardsItems;
