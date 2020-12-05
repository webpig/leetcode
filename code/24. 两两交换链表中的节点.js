// 递归解法
const swapPairs = function(head) {
  // 如果节点为null或者next指向为null，则直接返回，不需要交换
  if (!head || !head.next) {
    return head
  }

  // 初始化前一个节点和后一个节点
  const firstNode = head
  const secondNode = head.next

  // 需要交换的节点组前一个节点指向已经交换好的节点
  firstNode.next = swapPairs(secondNode.next)
  // 将后一个节点指向前一个节点，实现反转
  secondNode.next = firstNode

  // 返回反转后的链表
  return secondNode
}

// 迭代解法
const swapPairs = function(head) {
  // 使用哨兵节点，方便处理头部节点
  const dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy

  // 必须同时存在两个节点才进行交换操作
  while (prev.next && prev.next.next) {
    // first需要交换的节点组的前一节点，second指向后一节点
    const first = prev.next
    const second = first.next

    // 交换两个节点
    first.next = second.next
    second.next = first

    // 指向交换后的头
    prev.next = second
    // 进行下一步操作
    prev = first
  }

  return dummy.next
}