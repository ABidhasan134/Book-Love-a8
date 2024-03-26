import React from "react";
import { Link } from "react-router-dom";

const ErrorHandel = () => {
  return (
    <div className="grid justify-center relative top-72 gap-4 text-center">
      <div role="alert" className="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span className="text-5xl">Error! page Not found.</span>
</div>
      
      <Link to="/">
        <button className="btn text-2xl text-black bg-sky-400 hover:bg-sky-700 hover:text-white">Go to Home</button>
      </Link>
    </div>
  );
};

export default ErrorHandel;
