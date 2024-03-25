import React from 'react'
import { Link } from 'react-router-dom'

const ErrorHandel = () => {
  return (
    <div>
        Opps!!
        <Link to="/"><button className='btn  text-black'>Go to Home</button></Link>
    </div>
  )
}

export default ErrorHandel
