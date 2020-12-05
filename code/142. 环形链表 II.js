/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
	const set = new Set()
	let curr = head

	while (curr) {
		if (set.has(curr)) {
			return curr
		}

		set.add(curr)
		curr = curr.next
	}

	return null
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
	let fast = head
	let slow = head

	while (true) {
		if (!fast || !fast.next) {
			return null
		}

		slow = slow.next
		fast = fast.next.next

		if (slow === fast) {
			break
		}
	}

	fast = head

	while (fast !== slow) {
		fast = fast.next
		slow = slow.next
	}

	return fast
};