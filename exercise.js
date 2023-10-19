console.log('Yo!')

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
console.log(maxOfThree(1,2,3))