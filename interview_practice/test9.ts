// Given an array of integers greater than zero, find if it is possible to split it in two subarrays
// (without reordering the elements), such that the sum of the two subarrays is the same. Print the two subarrays.

const input = [1,2,3,2,3,1]

function findSplitPoint(arr,n)
{

    let leftSum = 0 ;

    // traverse array element
    for (let i = 0; i < n; i++)
    {
        // add current element to left Sum
        // 1
        leftSum += arr[i] ;

        // find sum of rest array
        // elements (rightSum)
        let rightSum = 0 ;

        for (let j = i+1 ; j < n ; j++ ) {
            // 2
            rightSum += arr[j];
        }

        // split point index
        if (leftSum == rightSum)
            return i+1 ;
    }

    // if it is not possible to
    // split array into two parts
    return -1;
}

function printTwoParts(arr,n)
{

    let splitPoint = findSplitPoint(arr, n);

    if (splitPoint == -1 || splitPoint == n )
    {
        console.log("Not Possible");
        return;
    }

    for (let i = 0; i < n; i++)
    {
        if(splitPoint == i)
            console.log("<br>");

        console.log(arr[i] + " ");

    }
}


console.log(printTwoParts(input, input.length));