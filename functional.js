let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


// Returns a URL-friendly version of a string
// Example: "North Dakota" >- "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

//urls: imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

//urls: functional version
function functionalUrls(elements) {
  return elements.map( (element) => urlify(element));
}
console.log(functionalUrls(states));

// return complete URLS per exercise 6.1.1
function fullUrls(elements) {
  return elements.map( (element) => `htps://example.com/${urlify(element)}`);
}
console.log(fullUrls(states));

// exercise 6.2.1 a filter function for Dakotas
function findDakotas(elements) {
  return elements.filter( element => element.toLowerCase().includes("dakota"));
}
console.log(findDakotas(states));

function findDoubles(elements) {
  return elements.filter( element => element.split(/\s+/).length === 2);
}
console.log(findDoubles(states));

// REDUCE EXAMPLES

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: Imperative solution

function imperativeSum(elements) {
  let total = 0;
  numbers.forEach( function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

function functionalSum (elements){
  return elements.reduce((total, n) => { return total += n });
}
console.log(functionalSum(numbers));
