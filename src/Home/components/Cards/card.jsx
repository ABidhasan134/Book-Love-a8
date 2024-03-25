// Cards.js
import React, { useContext } from 'react';
import NoteContext from '../../../context/noteContext';
import CardsItems from './cardsItems';

const Cards = () => {
    const cardInfo = useContext(NoteContext);
    // console.log(cardInfo);
    
    return (
        <div>
            <h1 className='text-5xl font-bold text-center p-6 my-10'>Books</h1>
            <div className='grid grid-cols-3 mb-10'>
            {
                cardInfo.map((book)=>{
                    // console.log(book);
                    return <CardsItems items={book}></CardsItems>
                })
            }
        </div>
        </div>
    );
};

export default Cards;


