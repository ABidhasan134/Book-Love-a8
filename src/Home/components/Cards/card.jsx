// Cards.js
import React, { useContext } from 'react';
import NoteContext from '../../../context/noteContext';
import CardsItems from './cardsItems';

const Cards = () => {
    const cardInfo = useContext(NoteContext);
    // console.log(cardInfo);
    
    return (
        <div>
            <h1 className='sm:text-5xl text-3xl font-bold text-center sm:p-6 p-2 my-10'>Books</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-col-1 
            justify-center gap-6 mb-10 h-[665px]'>
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


