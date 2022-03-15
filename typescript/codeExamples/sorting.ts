// sort an array of numbers and strings in descending


const numbers = [1,3,5,2,3];

const strings = ['orange', 'mango', 'ab', 'z'];


function sortNumbers(numbers) {
    numbers.sort(function (a,b) {
        return (a > b ? -1 : (a < b ? 1 : 0));
    })
    return numbers;
}

console.log(sortNumbers(numbers));
console.log(sortNumbers(strings));