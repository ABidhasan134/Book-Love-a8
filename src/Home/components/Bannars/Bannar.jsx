import React from 'react'
import { Link } from 'react-router-dom'

const Bannar = () => {
  return (
    <div className="hero bg-base-200 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://img.freepik.com/free-psd/realistic-book-cover-presentation_1310-24.jpg?t=st=1711383453~exp=1711387053~hmac=653e137226eb56f373694b377bf60612567eb20eaee89c31d52064e0b3cfd8d4&w=740" className="max-w-xl rounded-lg shadow-2xl" />
    <div >
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
        <Link to="/list"><button className="btn btn-primary mt-9">View The list</button></Link>
    </div>
  </div>
</div>
  )
}

export default Bannar
