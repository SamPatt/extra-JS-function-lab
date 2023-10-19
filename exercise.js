// Exercise 1 completed

// Exercise 2 Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function(num1, num2, num3) {
    let largest;
    if(num1 >= num2){
        largest = num1
    } else {
        largest = num2
    }
    if (num3 >= largest){
        return num3
    } else {
        return largest
    }
}
//console.log(maxOfThree(1,2,3))

// Exercise 3 Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
    char = char.toUpperCase()
    return char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
}

//console.log(isCharAVowel('a'))

// Exercise 4 Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11

const sumArray = function(arr) {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
}

//console.log(sumArray([2, 4, 5]));

function multiplyArray(arr) {
    let product = 1
    arr.forEach(element => {
        product*=element
    })
    return product
}

console.log(multiplyArray([2, 4, 5]))