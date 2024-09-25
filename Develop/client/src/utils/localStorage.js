export const getSavedBookIds = () => {
  try {
    const savedBookIds = localStorage.getItem('saved_books')
      ? JSON.parse(localStorage.getItem('saved_books'))
      : [];
    return savedBookIds;
  } catch (err) {
    console.error("Error retrieving saved book IDs:", err);
    return []; // Return an empty array in case of an error
  }
};

export const saveBookIds = (bookIdArr) => {
  if (bookIdArr.length) {
    console.log("Saving book IDs:", bookIdArr);
    localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
  } else {
    console.log("Removing saved books from local storage");
    localStorage.removeItem('saved_books');
  }
};

export const removeBookId = (bookId) => {
  const savedBookIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : null;

  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds.filter((savedBookId) => savedBookId !== bookId);
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));
  
  console.log("Updated saved book IDs after removal:", updatedSavedBookIds); // Log updated IDs

  return true;
};
