function greet(age, company) {
  console.log(`Hello ${this.name}, how are you doing ?, ${age}, ${company}`)
}

const user = {
  name: "Amandeep"
}

// calling greet function by attaching 'user' obj, 'this' inside greet function will point to 'user' object
greet.call(user, "21", "compABC");
