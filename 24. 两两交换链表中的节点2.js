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
var swapPairs = function(head) {
	const dummy = new ListNode(0)
	dummy.next = head
	let prev = dummy

	while (prev.next && prev.next.next) {
		let first = prev.next
		let second = prev.next.next

		first.next = second.next
		second.next = first

		prev.next = second
		prev = first
	}

	return dummy.next
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
var swapPairs = function(head) {
	if (!head || !head.next) {
		return head
	}

	const first = head
	const second = head.next

	first.next = swapPairs(second.next)
	second.next = first

	return second
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
var swapPairs = function(head) {
	if (!head || !head.next) {
		return head
	}

	const next = head.next

	head.next = swapPairs(next.next)
	next.next = head

	return next
};