function greeter(person: string): string {
  return "Hello, " + person;
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

let user = ["Jane", "Doe"];

// Type Guard Usage
if (isString(user)) {
  console.log(greeter(user));
} else {
  console.log("Invalid input type. Please provide a string");
}

// or Explicit Type Checking 
let userName: string = user.join(" ");
console.log(greeter(userName));