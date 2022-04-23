/*
Create a function listAllShirts that returns a of all the shirts. The summary should be an array.

A few ideas:

Can you solve this by only using one for loop iterating over one array?

It may not be necessary to iterate over the entire currentInventory object to solve this problem.

*/

//function
var listAllShirts = function(inventory) {
  var nameOfShirts = []
  for (var i = 0; i < inventory['shirts'].length; i++) {
    var currentShirt = inventory['shirts'][i]
    nameOfShirts.push(currentShirt['designer'] + " " + currentShirt['name'] + " " + currentShirt['price'])
  }
  return nameOfShirts
}


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

var output = listAllShirts(currentInventory)
console.log(output)


// TODO
// Create a function listAllShirts that returns an array of strings with a summary of all shirts with designer, name, and price.
// Partial example output:
// createSummary(currentInventory) -> ['Brunello Cucinelli silk tall t-shirt 1000', ...];