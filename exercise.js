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

//Exercise 3 Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
    char = char.toUpperCase()
    return char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
}

console.log(isCharAVowel('a'))