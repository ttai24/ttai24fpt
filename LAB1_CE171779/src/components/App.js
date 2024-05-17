import React, { Component } from "react";
import '../styles/App.css';

// Commented out class-based component, could be used instead of functional component
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>My Demo React App!</h1>
//             </div>
//         );
//     }
// }

// Exporting the default functional component for use in the application
function HelloWorld() {
  return <div><h1>Pham Thang Tai - CE171779</h1></div>;  // Renders a div containing an h1 element with some text
}
export default HelloWorld;  // Exports the HelloWorld component

// Class definition for Person
class Person {
  constructor(name, age) {
    this.name = name;  // Initializes the name property
    this.age = age;  // Initializes the age property
  }

  sayHello() {
    // Logs a greeting message to the console
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of the Person class
const person = new Person("Tai", 21);
// Calling the sayHello method on the person instance
person.sayHello();




