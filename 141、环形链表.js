const hasCycle = function(head) {
  // 使用快慢指针，如果两个指针中途会相等则有环，否则无环
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false 
}

// 使用set

const hasCycle = function(head) {
  const set = new Set()
  let curr = head

  while (curr) {
    if (set.has(curr)) {
      return true
    } else {
      set.add(curr)
    }

    curr = curr.next
  }

  return false
}