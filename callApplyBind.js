function greet(age, company) {
  console.log(`Hello ${this.name}, how are you doing ?, ${age}, ${company}`)
}

const user = {
  name: "Amandeep"
}

// call - immediately invokes the function with a specified this value and arguments passed one by one.



// calling greet function by attaching 'user' obj, 'this' inside greet function will point to 'user' object
greet.call(user, "21", "compABC");


// apply - immediately invokes the function, but arguments are passed as an array.

function greetFromCityAndCountry(city, country) {
  console.log(`Hi I am ${this.name} from ${city}, ${country}`)
}

greetFromCityAndCountry.apply(user, ["Bangalore", "India"])

