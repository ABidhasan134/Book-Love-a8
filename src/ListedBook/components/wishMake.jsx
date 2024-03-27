import React from 'react'
import { FaRegFileLines, FaUsers } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const WishMake = ({book}) => {
    // console.log(book);
  return (
    <div>
     
    <div className="hero border-2 border-pink-100 rounded-md justify-start my-4 w-auto">
      <div className="hero-content flex-col lg:flex-row">
        <img className="h-96" src={book.image} />
        <div>
          <h1 className="text-5xl font-bold">{book.bookName}</h1>
          <p className="py-6">By:{book.author}</p>
          {/* tags and location  */}
          <div className="sm:flex grid  items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
            <p className="font-bold ">Tags:</p>
            <p className="sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">
              #{book.tags[0]}
            </p>
            <p className="sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">
              #{book.tags[1]}
            </p>
            </div>
            <div className="flex items-center sm:ml-10 ml-2">
              <IoLocationOutline></IoLocationOutline>
              <p>Year of publishing{book.yearOfPublishing}</p>
            </div>
          </div>
          {/* tags and location end */}
          <div className="sm:flex items-center gap-3 text-2xl opacity-70 grid">
            <div className="flex items-center gap-3">
            <FaUsers></FaUsers>
            <p>Publisher: {book.publisher}</p>
            </div>
            <div className="flex items-center gap-2">
            <FaRegFileLines className="sm:ml-10"></FaRegFileLines>
            <p>{book.totalPages}</p>
            </div>
          </div>
          {/* location section end */}
          <hr className="border-1 border-gray-400 my-4 w-max-auto" />
          <button className="btn bg-sky-100 text-sky-500 rounded-badge  mx-4  my-4">
            Category: {book.category}
          </button>
          <button className="btn bg-orange-100 text-orange-500 rounded-badge mx-4  my-4">
            Rating:{book.rating}
          </button>
          <Link to={`/details/${book.bookId}`} ><button className="btn bg-green-500 text-white rounded-badge mx-4 my-4 sm:ml-0 ml-24">
            View Details
          </button></Link>
          {/* to={`/details/${items.bookId}` */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default WishMake
