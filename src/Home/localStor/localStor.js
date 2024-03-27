import { toast } from 'react-toastify';
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
    // removeFromWishList(id);
    stordIds.push(id); // Add the new ID to the array
    localStorage.setItem("book-id", JSON.stringify(stordIds)); // Store the updated array in local storage
  }
  if(wishSaveId.length>0){
    let wishIds = wishSaveId();
    const index = wishIds.indexOf(id);
    if (index !== -1) {
      wishIds.splice(index, 1)[0];
      localStorage.setItem("wish-id", JSON.stringify(wishIds));
    }
  }
  else{
    notify("Book already add")
  }
};
// console.log(getStorBookId());

const getWishId=()=>{
  const wishId=localStorage.getItem("wish-id");
  if(wishId){
    return JSON.parse(wishId);
  }
  return [];
}


const wishSaveId = (id) => {
  let wishIds = getWishId(); // 
  // console.log(!getStorBookId.includes(id))
  // const getone=getStorBookId.includes(id)

  if (!wishIds.includes(id) && !getStorBookId().includes(id)){
    notify("Book save in Wish List")
    // If ID is not already stored, add it
    wishIds.push(id);
    localStorage.setItem("wish-id", JSON.stringify(wishIds));
  } 
  else {
    // If ID already exists, remove it
      const index = wishIds.indexOf(id);
      // const exicut=savesordId.indexOf(id); 
      if (index !== -1) {
        const removedItem = wishIds.splice(index, 1)[0]; // Remove the ID from the array and get the removed item
        localStorage.setItem("wish-id", JSON.stringify(wishIds)); // Store the updated array in local storage
        savesordId(removedItem); // Pass the removed item to savesordId function
        notify("Book add to read")
      }
      else{
        notify("You have already read this book");
      }
      }
}


// const removeFromWishList = (id) => {
//   let wishIds = wishSaveId();
//   const index = wishIds.indexOf(id);
//   if (index !== -1) {
//     wishIds.splice(index, 1)[0];
//     localStorage.setItem("wish-id", JSON.stringify(wishIds));
//   }
// }


export { getStorBookId, getWishId, savesordId, wishSaveId };
