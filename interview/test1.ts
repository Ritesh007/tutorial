/** Say you have an array for which the ith element is the price of a given stock on day i.
 *
 If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

 Note that you cannot sell a stock before you buy one.

 Example 1:

 Input: [7,1,5,3,6,4]

 Output: 5

 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

 Not 7-1 = 6, as selling price needs to be larger than buying price.

 Example 2:

 Input: [7,6,4,3,1]

 Output: 0

 Explanation: In this case, no transaction is done, i.e. max profit = 0.

 **/
// check the least number
// check the greatest number after the least number
// diff b/w them

const Input = [8,10,3,1];
function isDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] >= arr[i]) {
            return 1;
        }
    }
    return 0;
}

function getGreatestValue(arr) {
    let max = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i] && i !== 0) {
            max = arr[i];
            index = i;
        }
    }
    return {max: max, index: index};
}

function getLeastValueBeforeGreatest(arr, j) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min < arr[i] && i < j) {
            min = arr[i];
        }
    }
    return min;
}


function profit(Input) {
    if (isDescending(Input) === 0 ) {
        return 0;
    }
    const max = getGreatestValue(Input).max;
    const maxIndex = getGreatestValue(Input).index;
    const min = getLeastValueBeforeGreatest(Input, maxIndex);
    const diff = max - min;
    return diff;
}

console.log(profit(Input));
