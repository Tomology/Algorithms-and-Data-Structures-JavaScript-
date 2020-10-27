/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    // Check heads aren't null
    if (headA === null || headB === null) return null;


    let aPointer = headA;
    let bPointer = headB;

    // While the pointers aren't equal, loop through the list, if the end of the list is reached then start traversing the other list
    // (this removes the difference in length), if they intersect they will meet and their values will equal each other, otherwise,
    // they will both equal each other when they have reached the end of the list and their values are null.

    

    while (aPointer != bPointer) {
        aPointer = aPointer === null ? headB : aPointer.next;
        bPointer = bPointer === null ? headA : bPointer.next;
    }

    return aPointer;
};