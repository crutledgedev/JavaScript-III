/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - has no context so literally is bound to the entire page/global unless in strict mode in which case it will show as undefined.
* 2. Implicit binding - occurs when dot notation is used to invoke a function and whatever is to the left of the dot becomes the context for `this` in the function
* 3. Explicit binding - occurs when .call(), .apply(), are used on a function and the context for `this` becomes the argument passed in. 
* 4. New Binding - creates a persistent `this` context 
*
* write out a code example of each explanation above
*/

// Principle 1

//code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const me = function(){
    name = "Chance";
    age = "47";
    console.log(`My Name is ${this.name} and I am ${this.age} years old`);
}; 

me();

// Principle 3
// code example for New Binding
var sayMyName = function () {
    console.log('My name is ' + this.name);
  };

  var chance = {
    name: 'Chance'
  }

  var sayMyName = sayMyName.bind(chance);
  sayMyName(); // 'My name is Jake'



// code example for Explicit Binding
const sophie ={
    type:  "cat",
    sound: "meow", 
}

const whatIs = function(){
    console.log(`I am a ${this.type} and I say ${this.sound}`);
}
whatIs.call(sophie);
