import React, { useEffect, useState } from 'react';
import WriterContext from './writeContext';

const WriterState = (props) => {
    const [writerInfo, setWriterInfo] = useState([]);

    useEffect(() => {
        fetch("./writer.json")
            .then(res => res.json()) // <-- Added () after res.json
            .then(data => setWriterInfo(data))
            .catch(error => console.error("Error fetching writer", error));
    }, []);
    console.log(writerInfo);
    return (
        <WriterContext.Provider value={writerInfo}>
            {props.children}
        </WriterContext.Provider>
    );
}

export default WriterState;

