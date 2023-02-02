const addToDb = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity) {
    localStorage.setItem(id, parseInt(quantity) + 1);
  } else {
    localStorage.setItem(id, 1);
  }
};

export { addToDb };
