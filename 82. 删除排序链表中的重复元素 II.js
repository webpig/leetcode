const deleteDuplicates = function(head) {
  const dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  let curr = head

  // 主要是将prev.next和curr.next进行对比，如果重复，则移动curr，直到遇到不重复的值
  while (prev.next && prev.next.next) {
    // 如果prev.next和curr.next的值不相等，则说明不重复，直接进入下一轮比较
    if (prev.next.val !== curr.next.val) {
      prev = prev.next
    } else {
      // 如果相等，则将curr移动，直到找出不相等的值
      while (curr && curr.next && prev.next.val === curr.next.val) {
        curr = curr.next
      }

      // 将prev指向不重复的元素，进行删除操作
      prev.next = curr.next
    }

    curr = curr.next
  }

  return dummy.next 
}