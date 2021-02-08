/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let value1 = l1 ? l1.val : 0;
    let value2 = l2 ? l2.val : 0;

    // Calculate digit
    let total = value1 + value2 + carry;
    carry = Math.floor(total / 10);
    total %= 10;
    current.next = new ListNode(total);

    // Update pointers
    current = current.next;
    l1 = l1.next ? l1.next : null;
    l2 = l2.next ? l2.next : null;
  }

  return dummy.next;
};

