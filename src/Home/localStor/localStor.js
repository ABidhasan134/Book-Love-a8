import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (massage) => toast(massage);

const getStorBookId=()=>{
  const stordId=localStorage.getItem("book-id");
  if(stordId){
    return JSON.parse(stordId);
  }
  // notify("Book is empty")
  return [];
}

const savesordId = (id) => {
  let stordIds = getStorBookId(); // Retrieve existing IDs from local storage
  if (!stordIds.includes(id)) { // Check if the ID is not already stored
    notify("Book read add")
    stordIds.push(id); // Add the new ID to the array
    localStorage.setItem("book-id", JSON.stringify(stordIds)); // Store the updated array in local storage
  }
  else{
    notify("Book already add")
  }
};
// getStorBookId();

const getWishId=()=>{
  const wishId=localStorage.getItem("wish-id");
  if(wishId){
    return JSON.parse(wishId);
  }
  return [];
}


const wishSaveId = (id) => {
  let wishIds = getWishId(); // Retrieve existing IDs from local storage
  const chackIds=getStorBookId();
  // console.log(wishIds);

  if (!wishIds.includes(id) && !chackIds.includes(id)){
    notify("Book save in Wish List")
    // If ID is not already stored, add it
    wishIds.push(id);
    localStorage.setItem("wish-id", JSON.stringify(wishIds));
  } else {
    // If ID already exists, remove it
    const index = wishIds.indexOf(id);
    if (index !== -1) {
      const removedItem = wishIds.splice(index, 1)[0]; // Remove the ID from the array and get the removed item
      localStorage.setItem("wish-id", JSON.stringify(wishIds)); // Store the updated array in local storage
      savesordId(removedItem); // Pass the removed item to savesordId function
      notify("Book add to read")
    }
    else{
      notify("You already readed this book")
    }
  }
}


export{getStorBookId,savesordId,getWishId,wishSaveId}