const add = (first, second) => {
  return first + second;
};

const multiply = (first, second) => {
  return first * second;
};

// const numbers = [20, 24, 235, 65, 89];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0);  // total=20+24+235+65+89

// const items = [
//   { id: 1, name: 'alta', price: 100 },
//   { id: 2, name: 'alta', price: 200 },
//   { id: 3, name: 'alta', price: 300 },
//   { id: 4, name: 'alta', price: 400 },
//   { id: 5, name: 'alta', price: 500 },
// ];
// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer, 0); /// itemTotal=1500

const getTotalPrice = (products) => {
  const reducer = (previous, current) => previous + current.price;
  const total = products.reduce(reducer, 0);
  return total;
};

export { add, multiply, getTotalPrice as getTotal };
