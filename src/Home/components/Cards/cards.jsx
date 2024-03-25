// Cards.js
import React, { useContext } from 'react';
import NoteContext from '../../../context/noteContext';

const Cards = () => {
    const cardInfo = useContext(NoteContext);
    // console.log(cardInfo);
    
    return (
        <div>
            {/* Render your card components here using the cardInfo */}
        </div>
    );
};

export default Cards;


