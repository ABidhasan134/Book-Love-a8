import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (message) => toast(message);

const getStoredBookId = () => {
  const storedId = localStorage.getItem("book-id");
  return storedId ? JSON.parse(storedId) : [];
};

const saveStoredId = (id) => {
  const storedIds = getStoredBookId();
  if (!storedIds.includes(id)) {
    notify("Book read added");
    storedIds.push(id);
    localStorage.setItem("book-id", JSON.stringify(storedIds));
  } else {
    notify("Book already added");
  }
};

const getWishId = () => {
  const wishId = localStorage.getItem("wish-id");
  return wishId ? JSON.parse(wishId) : [];
};

const saveWishId = (id) => {
  const wishIds = getWishId();
  const storedIds = getStoredBookId();
  
  if (!wishIds.includes(id) && !storedIds.includes(id)) {
    notify("Book saved in Wish List");
    wishIds.push(id);
    localStorage.setItem("wish-id", JSON.stringify(wishIds));
  } else {
    const index = wishIds.indexOf(id);
    if (index !== -1) {
      const removedItem = wishIds.splice(index, 1)[0];
      localStorage.setItem("wish-id", JSON.stringify(wishIds));
      saveStoredId(removedItem);
      notify("Book added to read");
    } else {
      notify("You have already read this book");
    }
  }
};

export { getStoredBookId, getWishId, saveStoredId, saveWishId };
