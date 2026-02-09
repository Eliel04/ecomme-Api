/**const arr = [3, 6, 1, 9, 56];
const sum = arr.reduce((pre, curr) => {
    return pre + curr;
})
console.log(sum);
console.log("Eliel Kayembe");
console.log("house");

arr.shift();
console.log(arr);

const number = [2, 5, 6, 7 ,10, 56, 105];
function largestNumber(x) {
    
    return Math.max(...x)
}
console.log(largestNumber(number));

let greeting = "Bonjour";

function lengthOfString(x) {
    return x.length
}
console.log(lengthOfString(greeting))

const reversed = greeting.split("").reverse().join("");
console.log(reversed);

let sentence = "I love javaScript";
let reveSentence = sentence.split(" ").reverse().join(" ");
console.log(reveSentence)

function reverseParagraph(value) {
    let words = value.split(" ");
    let reversedWords = words.map(function(word) {
        return word.split("").reverse().join("");
    })
    return reversedWords.join(" ")
};
console.log(reverseParagraph(sentence));

const grammar = "house is ours";
let pluralForm = grammar.split(" ");

for (let i = pluralForm.length; i >= 0; i--) {
console.log(pluralForm[i]);
}

pluralForm.shift();
console.log(pluralForm);

pluralForm.unshift("This mansion");
console.log(pluralForm);//
**

const carsForRent = ["toyota", "BMW", "Benz", "audi"];
const soldCars = ["Kia", "Nissan", "Ford", "Chevrolet"];
let totalCars = carsForRent.concat(soldCars);
console.log(totalCars);

const numb = [2, 2, 5, 6, 7,7, 98, 45, 4, 45,9];
let uniqueNumbers = numb.filter((item, index) => {
    return numb.indexOf(item) === index;
})

console.log(uniqueNumbers);

const fruits = ["banana", "mangoe", "orange", "mangoe", "apple", "orange"];
let uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits);

let animals = ["dog", "cat", "lion", "tiger", "zebra"];
 let removeAnimals = animals.slice(1, 3);
console.log(removeAnimals);
let sting = animals.join("-");
console.log(sting);**/


const numb = [1, 2, 5, 8, 9, 11, 47, 76];



const user = [
    {name: "Eliel", age: 21},
    {name: "kayembe", age: 23},
    {name: "keys", age: 12},
    {name: "Kabasele", age: 54}
]

    const sortedNumb = user.sort((a, b) => a.age - b.age);

console.log(sortedNumb);
 
console.log("eliel" + 122);

function test(nub,...abc) {
    console.log(abc, typeof abc);
    console.log(nub, typeof nub  );
}
test(12, "keys");
