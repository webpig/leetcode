/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	const set = new Set()
	let curr = head

	while (curr) {
		if (set.has(curr)) {
			return true
		}

		set.add(curr)
		curr = curr.next
	}

	return false
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	let fast = head
	let slow = head

	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next

		if (slow === fast) {
			return true
		}
	}

	return false
};