// Exercise 1 completed

// Exercise 2 

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

// Exercise 3 

function isCharAVowel(char) {
    char = char.toUpperCase()
    return char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
}

//console.log(isCharAVowel('a'))

// Exercise 4 

const sumArray = function(arr) {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
}

//console.log(sumArray([2, 4, 5]));

// Exercise 5

function multiplyArray(arr) {
    let product = 1
    arr.forEach(element => {
        product*=element
    })
    return product
}

//console.log(multiplyArray([2, 4, 5]))

// Exercise 6

const numArgs = function(parameter) {
    return arguments.length
}

//console.log(numArgs(1,2,3,4,5))

// Exercise 7

function reverseString(str) {
    return str.split('').reverse().join('')
}

//console.log(reverseString("rockstar"))

// Exercise 8

const longestStringInArray = function(arrStrings) {
    let longestString = 0
    arrStrings.forEach(function(arr)  {
        if(arr.length >= longestString) {
            longestString = arr.length
        }
    })
    return longestString
}

//console.log(longestStringInArray(['Quick red fox', 'jumps over', 'the lazy', 'dog']))

// Exercise 9

function stringsLongerThan(arrStrings, num) {
    let longStringArr = []
    arrStrings.forEach(arr => {
        if (arr.length > num) {
            longStringArr.push(arr)
        }
    });
    return longStringArr
}

//console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));