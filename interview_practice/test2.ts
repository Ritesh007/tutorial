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

// interface fruits {
//     name: string;
//     count: number;
// }

function friutsCount(Input_list) {
    const counts = {};
    Input_list.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
}

function sortObject(list) {
    var sortable = [];
    for (var key in list) {
        sortable.push([key, list[key]]);
    }

    sortable.sort(function(a, b) {
        return (a[1] > b[1] ? -1 : (a[1] < b[1] ? 1 : 0));
    });

    var orderedList = {};
    for (var i = 0; i < sortable.length; i++) {
        orderedList[sortable[i][0]] = sortable[i][1];
    }

    return orderedList;
}

function arrangeFruits(Input_list, k) {
    const friutCount = friutsCount(Input_list);
    const friutDesecdingCount = sortObject(friutCount);
    let arrayFruits = [];
    for (let key in friutDesecdingCount) {
        arrayFruits.push(key);
    }
    return arrayFruits.slice(0,k);
}


console.log(arrangeFruits(Input_list, k));
