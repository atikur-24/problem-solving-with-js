// -----remove duplicate items an array-------------
// const candidateName = ['A', 'R', 'E', 'A', 'W', 'E', 'X', 'O', 'P', 'S', 'S', 'R', 'Y'];

// function removeDuplicate(candidateName) {
//   const unique = [];
//   for(let i = 0; i < candidateName.length; i++) {
//     const name = candidateName[i];
//     if(unique.includes(name) === false) {
//       unique.push(name);
//     }
//   }
//   return unique;
// }
// const finalCandidate = removeDuplicate(candidateName);
// console.log(finalCandidate);

// -------------cheapest phone------------
// const phones = [
//     {name: 'Samsung', camera: 12, storage: '64gb', price: 32000, color: 'black'},
//     {name: 'Walton', camera: 10, storage: '32gb', price: 44000, color: 'black'},
//     {name: 'iphone', camera: 13, storage: '128gb', price: 82000, color: 'white'},
//     {name: 'Xaomi', camera: 8, storage: '32gb', price: 20000, color: 'black'},
//     {name: 'Lava', camera: 5, storage: '8gb', price: 5300, color: 'silver'},
//     {name: 'Nokia', camera: 15, storage: '2526gb', price: 32000, color: 'black'},
//     {name: 'HTC', camera: 7, storage: '64gb', price: 15000, color: 'silver'}
//   ]

//   function cheapestPhone(phones) {
//     let cheapest = phones[0];
//     for (i = 0; i < phones.length; i++) {
//       const phone = phones[i];
//       if (phone.price < cheapest.price) {
//         cheapest = phone;
//       }
//     }
//     return cheapest;
//   }

//   const mySelection = cheapestPhone(phones);
//   console.log(mySelection);

// -------------simple shopping Cart------------
// const shoppingCart = [
//     {name: 'panjabi', price: 1200, quantity: 2},
//     {name: 'pant', price: 700, quantity: 3},
//     {name: 'shoe', price: 500, quantity: 2},
//     {name: 'belt', price: 200, quantity: 1},
//     {name: 'cap', price: 100, quantity: 4}
//   ]

//   function totalCost(products) {
//     let sum = 0;
//     for (i = 0; i < products.length; i++) {
//       const product = products[i];
//       const totalProduct = product.price * product.quantity;
//       sum += totalProduct;
//     }
//     return sum;
//   }

//   const expense = totalCost(shoppingCart);
//   console.log(expense);
