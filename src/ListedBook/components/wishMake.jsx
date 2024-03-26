import React from 'react'
import { FaRegFileLines, FaUsers } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'

const WishMake = ({book}) => {
    // console.log(book);
  return (
    <div>
     
      <div className="hero border-2 border-pink-100 rounded-md justify-start my-4">
        <div className="hero-content flex-col lg:flex-row">
          <img className="h-96" src={book.image} />
          <div>
            <h1 className="text-5xl font-bold">{book.bookName}</h1>
            <p className="py-6">By:{book.author}</p>
            {/* tags and location  */}
            <div className="flex items-center gap-4 mb-6">
              <p className="font-bold ">Tags:</p>
              <p className="text-sky-400 shadow-sm shadow-green-100">
                #{book.tags[0]}
              </p>
              <p className="text-sky-400 shadow-sm shadow-green-100">
                #{book.tags[1]}
              </p>
              <div className="flex items-center ml-10">
                <IoLocationOutline></IoLocationOutline>
                <p>Year of publishing{book.yearOfPublishing}</p>
              </div>
            </div>
            {/* tags and location end */}
            <div className="flex items-center gap-3 text-2xl opacity-70">
              <FaUsers></FaUsers>
              <p>Publisher: {book.publisher}</p>
              <FaRegFileLines className="ml-10"></FaRegFileLines>
              <p>{book.totalPages}</p>
            </div>
            <hr className="border-1 border-gray-400 my-4 w-max-auto" />
            <button className="btn bg-sky-100 text-sky-500 rounded-badge  mx-4">
              Category: {book.category}
            </button>
            <button className="btn bg-orange-100 text-orange-500 rounded-badge mx-4">
              Rating:{book.rating}
            </button>
            <button className="btn bg-green-500 text-white rounded-badge mx-4">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishMake
