import React, { useContext, useEffect, useState } from 'react'
import ShowWriters from './showWriters';
// import NoteState from '../context/noteState';
// import WriterState from '../writerContext/WriterState'

const Pepoles = () => {
    // const writerInfo=useContext();
    // console.log(writerInfo);
    const [writerInfo, setWriterInfo] = useState([]);
    useEffect(() => {
        fetch("./writer.json")
            .then(res => res.json()) // <-- Added () after res.json
            .then(data => setWriterInfo(data))
            .catch(error => console.error("Error fetching writer", error));
    }, []);
    console.log(writerInfo);
  return (
    <div className='container'>
      <div>
            <h1>Our writer</h1>
      </div>
      <div>
        {
            writerInfo.map((element)=>{
               return <ShowWriters person={element}></ShowWriters>
            })
        }
      </div>
    </div>
  )
}

export default Pepoles
