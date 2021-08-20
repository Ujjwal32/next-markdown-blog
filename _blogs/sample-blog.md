---
title: "Sample blog"
date: "August 21 2021"
excerpt: "Sample blog with Next js using markdown."
cover_image: "/images/blogs/firstImage.jpg"
---

# Sample Blog

- Array\*is one of the most used data types. We, as a developer, have to deal with many arrays while developing our applications. Sometimes looping through the array using various loops alone is not sufficient for us. So, there comes the higher order array methods in rescue. We have various built in array methods that make our life easier while dealing with arrays. In this article, we are going to see the definition and the implementation of various higher order array methods.

First, let's know about the higher order functions. A _higher order function_ is a function that takes a function as an argument, or returns a function. For example, the map function takes another function as an argument. We will discuss the map function later in this article.

```js
function higherOrderfunction(callback) {}
```

For this article we will take the array people to demonstrate the working of the array methods. So, don't get confused if you see _people_ array later in the examples and you don't see the array itself. Now let's start the adventure.

```js
const people = [
  { name: "John", adult: true, age: 19 },
  { name: "Joe", adult: true, age: 23 },
  { name: "Mira", adult: false, age: 10 },
  { name: "David", adult: false, age: 14 },
];
```

### **Array.filter()**

_Filter_, as the name suggests, is used to filter out arrays based on the conditions we provide. It saves us from writing tedious for loop. This method returns the array of the filtered elements from the main array. The basic syntax for this method is:

```js
const filteredArray = Array.filter((element, index, array) => {
  /* filtering condition*/
});
```

_element _: it is the current element that is being processed based on the filtering condition
_index_: this represents the index of the current element
_array_ : this is the array we are filtering
index and array are optional parameters.

*Filter *method takes the element of the main array and filters it based on the condition we pass and returns it if it satisfies the condition. If none of the elements satisfies the condition, the *filter *method returns an empty array. Now let’s see it’s implementation.

```js
const adult = people.filter((person) => person.age > 18);
console.log(adult);
// output: [{name: 'John',adult: true,age: 19},{name: 'Joe',adult: true,age: 23}]
```

*adult *is now a filtered array which consists of the person whose age is greater than 18.

### **Map**

*Map *transforms the array. In other words, it takes the element of the given array, transforms it according to the transformation condition we give and returns the array of those transformed elements. Let’s understand through code.

```js
const mappedArray = people.map((person) => person.age + 2);
console.log(mappedArray); //output: [21,25,12,16]
```

In this example, map loops through every element of the people array and adds 2 to the age of every person and returns the array of the transformed array, transformed in the sense that the age of every person is increased by 2. This may not be the brightest example but I hope you see what’s going on here.

### **Reduce**

This reduces an array to a single value based on the reducer function we provide. Suppose we need to sum the age of every person in the people array. Traditionally with the loops, we loop through each person and carry out the sum as given below:

```js
let sum = 0;
for (let i = 0; i < people.length; i++) {
  sum = sum + people[i].age;
}
console.log(sum); //66
```

Now using *reduce *method, we can achieve the same result as:

```js
const sumOfAges = people.reduce(
  (accumulator, person) => accumulator + person.age,
  0
);
console.log(sumOfAges); //output: 66
```

Pretty clean right?
Now, let’s understand what is going on here. First, let’s understand the parameters of the callback function. *Accumulator *accumulates all the values previously returned by the callback function. If it’s the first time the function is called then it consists of the initial value provided, in our case that is 0. Basically, what we are saying here is, start to add the ages from 0. *person *is the current element of the array.
Let’s understand in this way:

```js
//first step
//as we have provided the initial value as 0
accumulator = 0;
//and the current element i.e the first element of the array people
person = { name: "John", adult: true, age: 19 };
//the reducer function returns accumulator + person.age which is the stored in accumulator i.e
accumulator = accumulator + person.age; // accumulator = 0 + 19

//second step
//accumulator now stores the returned value of previous iteration i.e 0 + 19 = 19
//and the person now is the second element of the array
person = { name: "Joe", adult: true, age: 23 };
//now the calculation is done as
accumulator = accumulator + person.age; // accumulator = 19 + 23 = 42
```

These steps are stored until the final calculation is done. If the initial value is not given, the first element of the array is taken as the initial accumulator and the current element is taken from the second element.

```js
const array = [2, 4, 1, 5];
const sum = array.reduce((accumulator, current) => accumulator + current);
//in the first iteration accumulator = 2 and current = 1
console.log(sum); //output: 12
```

### **forEach()**

Similar to *map *function, it takes a callback function as an argument and transforms the array elements. But unlike *map *method, it doesn’t return a new array instead returns undefined. So, if you want to play with the transformed array, then forEach() method is not for you. But if you simply want to apply some changes in array elements, then you can use it as follow:

```js
people.forEach((person) => {
  const age = person.age + 2;
  console.log(age); // 21 25 12 16
});
```

Remember this example? Scroll a bit above and you will see similar examples in the *map *method as well. But in this case, it doesn’t return an array. Let's see if it returns something:

```js
const usedForEach = people.forEach((person) => {
  const age = person.age + 2;
  return age;
});
console.log(usedForEach); //undefined
```

So, if you want to work with the transformed array, you should make use of the *map *method and not rely on the _forEach()_.

### **sort()**

*Sort *method sorts the element in the array. It sorts the elements as strings in alphabetical order.

```js
const teams = ["real madrid", "barcelona", "villarreal"];
const sortedTeams = teams.sort();
console.log(sortedTeams); // "barcelona","real madrid","villarreal"]
```

These teams are sorted alphabetically as b comes first and r and the v.
If we have numbers to be sorted and don’t want them to be interpreted as strings, we have to provide a compare function to sort method as an argument.

```js
const array = [9, 80, 2, 100];
const sortedArray = array.sort((a, b) => a - b);
console.log(sortedArray); // [2,9,80,100]
```

Comparefunction takes the two elements and returns negative, zero or positive based on the subtraction. If returned negative then a is smaller than b. If you want to know more about the compare function refer to [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) .

### **Chaining methods**

You can also chain these methods to get the result you want.

```js
const adultAgeSum = people
  .filter((person) => person.adult)
  .map((adult) => adult.age)
  .reduce((accumulator, current) => accumulator + current);

console.log(adultAgeSum); // output: 42
```

Firstly, the *filter *method returns an array of adult people i.e returns a person if the *adult *is true. *map *method then returns the array of ages of the adults and the *reduce *method finally adds all the ages.

### **Conclusion**

In real life projects, you might encounter many use cases of these higher order methods which will make your work easier. So, knowing all these methods will surely be helpful in your coding journey. Let me know if I missed something.
