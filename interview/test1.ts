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

const Input = [2,10,1,3,4];

function profit(Input) {
    const tmpInput = [];

    Input.forEach((item, index) => {
        // wrong syntax
        if (item < tmpInput) {
            if (index == Input.length()) {
                return '0';
            }
        }
        tmpInput.push(item);
    });
    const tmpInput1 = [];
    let leastValue;
    let leastValueIndex;
    let greatValue;
    Input.forEach((item, index) => {
        // wrong syntax
        if (item < tmpInput1) {
            // 1 is assigned
            leastValue = item;
            // index [2] is assigned
            leastValueIndex = index;
        }
        // wrong syntax
        if ( item > tmpInput1 && (leastValueIndex !== undefined)) {
            // 10 assigned
            greatValue = item;
        }
        tmpInput1.push(item);
    });
    const diff = greatValue - leastValue;
    return diff;
}

console.log(profit(Input));