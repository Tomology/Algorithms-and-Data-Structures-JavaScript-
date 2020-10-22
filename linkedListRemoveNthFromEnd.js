/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    dummyHead = new ListNode(0);
    dummyHead.next = head;

    let slow = dummyHead;
    let fast = dummyHead;

    // [1, 2] n = 1
    // slow = 0, fast = 0;
    // i = 1, i <= 2 YES : fast = 1, slow = 0;
    // i = 2, i <= 2 YES : fast = 2, slow = 0;
    // i = 3, i <= 2 NO;
    // fast != null YES : slow = 1, fast = null
    // fast != null NO;
    // slow.next (2) = slow.next.next (null)
    // [1, null];
    // return dummyHead.next(1)

    // [1, 2, 3, 4, 5], n = 2
    // Modified = [0, 1, 2, 3, 4, 5]
    // i = 1, i <= 3 YES : fast = 1, slow = 0;
    // i = 2, i <= 3 YES : fast = 2, slow = 0;
    // i = 3, i <= 3 YES : fast = 3, slow = 0;
    // i = 4, i <= 3 NO;
    // fast != null YES : slow = 1, fast = 4;
    // fast != null YES : slow = 2, fast = 5;
    // fast != null YES : slow = 3, fast = null;
    // fast != null NO;
    // slow.next (4) = slow.next.next (null);
    // [1, 2, 3, null, 5];

    // [1, 2, 3, 4, 5, 6, 7, 8], n = 4
    // Modified = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    // i = 1, i <= 5


    for (let i = 1; i <= n + 1; i++){
        fast = fast.next;
    }

    while (fast != null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummyHead.next;


};