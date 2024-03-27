import React from "react";

const ShowWriters = ({ person }) => {
  // console.log(person)
  return (
    <div className="hero min-h-screen bg-orange-50 rounded-2xl mb-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={person.img} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{person.name}</h1>
          <p className="py-6 text-2xl">{person.biography}</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
          <hr className="border-1 border-gray-400 my-4 w-max-auto" />
          <div className="flex items-center gap-16">
            <p className="font-bold">Genre:</p>
            <div className="flex items-center gap-2">
              <p className="sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">
                {person.genre[0]}
              </p>
              <p className="sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">
                {person.genre[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowWriters;
