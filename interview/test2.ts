/**

Given a non-empty list of words, return the k elements that occur the most.

    Your answer should be sorted by occurrence from highest to lowest.

    If two words have the same occurrence, then the word with the lower alphabetical order comes first i.e. apple comes before banana.

    Input_list = ["lemon", "orange", "pear", "orange", "apple", "pineapple", "watermelon", "banana", "apple", "grape", "orange", "pear"]

k = 2

Results = ['orange', 'apple']

k = 3

Results = ['orange', 'apple', 'pear']

**/
// How many times each one repeats
// if there is a tie then use the alphabetic order
// arrange them based on the number of times they repeat in the descending order


const Input_list = ["lemon", "orange", "pear", "orange", "apple", "pineapple", "watermelon", "banana", "apple", "grape", "orange", "pear"];
const k =2;

interface fruits {
    name: string;
    count: number;
}

function arrangeFruits(Input_list, k) {
    const tempInput = [];
    const repeatedFruits: fruits[] = [];
    Input_list.forEach(item => {
        if (item === tempInput) {
            repeatedFruits.push(item, 1);
        }
        tempInput.push(item);
    })
}


console.log(arrangeFruits(Input_list, k));