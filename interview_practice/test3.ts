/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 Example:
 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
 Explanation: 342 + 465 = 807.
 */

// adds an element at the end
// of list
    // A Linked list node /
class Node1 {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function push(head_ref , new_data) {
    // allocate node /
    var new_node = new Node1();

    // put in the data /
    new_node.data = new_data;

    // link the old list to the new node /
    new_node.next = (head_ref);

    // move the head to point to the new node /
    (head_ref) = new_node;
    return head_ref;
}

function addLinkedList(first, second) {
    // res is head node of the resultant list
    var res = null;
    var prev = null;
    var temp = null;
    var carry = 0, sum;

    // while both lists exist
    while (first != null || second != null) {
        sum = carry + (first != null ? first.data : 0) +
            (second != null ? second.data : 0);

        // update carry for next calculation
        carry = (sum >= 10) ? 1 : 0;

        // update sum if it is greater than 10
        sum = sum % 10;

        // Create a new node with sum as data
        temp = new Node1(sum);

        // if this is the first node then set
        // it as head of the resultant list
        if (res == null) {
            res = temp;
        }

            // If this is not the first
        // node then connect it to the rest.
        else {
            prev.next = temp;
        }

        // Set prev for next insertion
        prev = temp;
        // Move first and second pointers
        // to next nodes
        if (first != null) {
            first = first.next;
        }
        if (second != null) {
            second = second.next;
        }
    }

    if (carry > 0) {
        temp.next = new Node1(carry);
    }

    // return head of the resultant list
    return res;
}

function reverse(head) {
    let prev = null;
    let next = null;
    let current = head;
    while (current!==null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

let input1 = null;
let input2 = null;

input1 = push(input1, 2);
input1 = push(input1, 4);
input1 = push(input1, 3);

input2 = push(input2, 5);
input2 = push(input2, 6);
input2 = push(input2, 4);

// console.log(input1);
// console.log(input2);
const addedll = addLinkedList(input1,input2);

console.log(reverse(addedll));
