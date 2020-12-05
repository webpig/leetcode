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
var reverseList = function(head) {
	let prev = null
	let curr = head

	while (curr) {
		const next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}

	return prev
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
var reverseList = function(head) {
	if (!head || !head.next) {
		return head
	}

	const p = reverseList(head.next)
	head.next.next = head
	head.next = null

	return p
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
var reverseList = function(head) {
	let [prev, curr] = [null, head]

	while (curr) {
		[curr.next, prev, curr] = [prev, curr, curr.next]
	}

	return prev
};