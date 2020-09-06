// g为需要反转节点的前驱结点，p为当前反转节点
const reverseBetween = function(head, m, n) {
  const dummy = new ListNode(0)
  dummy.next = head
  
  let g = dummy
  let p = head

  // 将p移到需要反转位置
  for (let i = 0; i < m - 1; i++) {
    p = p.next
    g = g.next
  }

  // 头插法：删除p的后驱节点，g指向该删除节点，实现反转
  for (let i = 0; i < n - m; i++) {
    const next = p.next
    p.next = p.next.next
    next.next = g.next
    g.next = next
  }

  return dummy.next
}