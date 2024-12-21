function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); // This will compile but produce unexpected output.