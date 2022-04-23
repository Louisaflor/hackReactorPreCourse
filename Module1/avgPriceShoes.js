/*
Complete the getAveragePriceforShoes function that should return the average price of all shoes. The average price should be an integer.

A few ideas:

Can you write this function by only using one for loop iterating over one array inside of the function body?

It may not be necessary to iterate over the entire currentInventory object to solve this problem.

*/


//function
var getAveragePriceforShoes = function(inventory){
  var total = 0;
    for (var i = 0; i < inventory['shoes'].length; i++) {
      total += inventory['shoes'][i]['price']
    }

  return Math.ceil(total / inventory['shoes'].length)

};




//test cases

var currentInventory = {
  shoes: [
    {name: 'tasselled black low-top lace-up', price: 1000, designer: 'Brunello Cucinelli'},
    {name: 'tasselled green low-top lace-up', price: 1100, designer: 'Gucci'},
    {name: 'plain beige suede moccasin', price: 950, designer: 'Balenciaga'},
    {name: 'plain olive suede moccasin', price: 2000, designer: 'Balenciaga'}
  ],
  shirts: [
    {name: 'silk tall t-shirt', price: 1000, designer: 'Brunello Cucinelli'},
    {name: 'plain white t-shirt', price: 950, designer: 'Gucci'},
    {name: 'already popped collar', price: 900, designer: 'Balenciaga'}
  ],
  hats: [
    {name: 'red logo', price: 1000, designer: 'Brunello Cucinelli'},
    {name: 'tricorne', price: 700, designer: 'Gucci'},
    {name: 'viking helmet', price: 250, designer: 'Balenciaga'},
    {name: 'beret', price: 50, designer: 'Balenciaga'}
  ]
};

var output = getAveragePriceforShoes(currentInventory)
console.log(output)


// TODO
// Update averagePriceOfShoes so that is returns the average price of all shoes in currentInventory