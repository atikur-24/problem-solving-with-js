var myComputer = {
    brand: "intel",
    price: 30000,
    processor: "i3",
    ram: "8GB",
    storage: 256,
};

// declare
var storageCount = myComputer.storage;
// console.log(storageCount);
var storageCount2 = myComputer["storage"];
// console.log(storageCount2);
var properties = Object.keys(myComputer);
// console.log(properties);
var values = Object.values(myComputer);
// console.log(values);

myComputer.price = 45000;
var propertyName = "price";
var propertyValue = myComputer[propertyName];
// console.log(propertyName);
// console.log(propertyValue);

myComputer[propertyName] = 556;
// console.log(myComputer);
