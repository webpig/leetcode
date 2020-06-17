
/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
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
// function getIntersectionNode(headA, headB) {
//   if (!headA || !headB) {
//     return null
//   }

//   let pA = headA
//   let pB = headB

//   // pA遍历完指向headB，pB遍历完指向headA，这样加起来的长度就是一样了：headB + headA = headA + headB
//   // 若是有相同的节点，那么就是相交了；否则直接遍历到结尾，两者都为null，返回
//   while (pA !== pB) {
//     pA = pA ? pA.next : headA
//     pB = pB ? pB.next : headB
//   }

//   return pA
// }

// 计算headA和headB的长度，然后让长度较长的移动几步（两者长度差值），再判断是否相等
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null
  }

  let lenA = 0
  let lenB = 0
  let pA = headA
  let pB = headB

  let curr = headA
  while (curr) {
    lenA++
    curr = curr.next
  }

  curr = headB
  while (curr) {
    lenB++
    curr = curr.next
  }

  let diff = Math.abs(lenA - lenB)

  if (lenA > lenB) {
    while (diff--) {
      pA = pA.next
    }
  }

  if (lenB > lenA) {
    while (diff--) {
      pB = pB.next
    }
  }

  // while (pA) {
  //   if (pA === pB) return pA

  //   pA = pA.next
  //   pB = pB.next
  // }
  while (pA !== pB) {
    pA = pA.next
    pB = pB.next
  }

  return pA
}
