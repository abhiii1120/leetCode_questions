# 485. Max Consecutive Ones

## 🧩 Problem Statement

Given a binary array `nums`, return the maximum number of consecutive `1's` in the array.

---

## 📌 Examples

**Example 1:**

```text id="95l5jr"
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two 1's are consecutive, but the last three 1's are consecutive.
The maximum number of consecutive 1's is 3.
```

**Example 2:**

```text id="9uvq9r"
Input: nums = [1,0,1,1,0,1]
Output: 2
```

---

## ⚙️ Constraints

- `1 <= nums.length <= 10^5`
- `nums[i]` is either `0` or `1`

---

## 🚀 Approach

- Traverse through the array
- Keep track of current consecutive `1's`
- Reset counter when `0` is found
- Update maximum count whenever needed

---

## 🧠 Explanation (Step-by-step)

Example:
Input: `nums = [1,1,0,1,1,1]`

1. First `1` → current streak = 1
2. Second `1` → current streak = 2
3. `0` found → reset streak to 0
4. Next `1` → streak = 1
5. Next `1` → streak = 2
6. Next `1` → streak = 3

Maximum consecutive ones = `3`

---

## ⏱️ Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

---

## ⚠️ Edge Cases

- Array contains all `0's`
- Array contains all `1's`
- Single element array

---

## 🎯 Key Takeaways

- Used a running counter to track consecutive `1's`
- Reset counter whenever `0` appears
- Efficient linear traversal

---

## 🏷️ Tags

`Array` `Counting`

---
