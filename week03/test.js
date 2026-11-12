let firstName = "John";
let lastName = "Doe";

// function declaration (definition) 
function getFullName(firstName, lastName) {
    // return firstName + " " + lastName;
    return `${firstName} ${lastName}`;
}

console.log(getFullName(firstName, lastName));


// anonymous function expression 
firstName = "Maggie";
lastName = "McCausland";

const fullName = function (first, last) {
    return `${first} ${last}`;
}

console.log(fullName(firstName, lastName));


// arrow function expression
firstName = "Cliel";
lastName = "Roberts";

const yourFullName = (first, last) => `${first} ${last}`;

console.log(yourFullName(firstName, lastName));


// Write an expression that calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName

// document.querySelector('#fullName').textContent = fullName(firstName, lastName);


let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}