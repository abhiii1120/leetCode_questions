# 162. Find Peak Element

## 🧩 Problem Statement

A peak element is an element that is strictly greater than its neighbors.
Given a `0-indexed` integer array `nums`, find a peak element and return its index.
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that:
nums[-1] = nums[n] = -∞

---

## 📌 Examples

**Example 1:**

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element.


**Example 2:**

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: 6 is a peak element.

---

## ⚙️ Constraints

* `1 <= nums.length <= 1000`
* `-2^31 <= nums[i] <= 2^31 - 1`
* `nums[i] != nums[i + 1]`

---

## 🚀 Approach

This problem is solved using **Binary Search**.

### Key Observation

* If `nums[mid] < nums[mid + 1]`

  * Peak exists on the **right side**
* Otherwise

  * Peak exists on the **left side including mid**

Using this observation, we reduce the search space by half every time.

---

## 🧠 Explanation (Step-by-step)

Example:

nums = [1,2,3,1]

### Step 1

st = 0
ed = 3
mid = 1
nums[mid] = 2
nums[mid+1] = 3

Since:

2 < 3

Move right:

st = mid + 1

---

### Step 2

st = 2
ed = 3
mid = 2
nums[mid] = 3
nums[mid+1] = 1

Since:

3 > 1

Peak is on left side including mid:

ed = mid

Now:

st == ed

Return index `2`

---

## ⏱️ Complexity

* **Time Complexity:** `O(log n)`
* **Space Complexity:** `O(1)`

---

## ⚠️ Edge Cases

* Array with only one element
* Peak at beginning
* Peak at end
* Multiple peak elements

---

## 🎯 Key Takeaways

* Binary Search can be used on unsorted arrays with proper observation
* Compared `mid` with `mid + 1` to determine direction
* Efficient logarithmic solution

---

## 🏷️ Tags

`Array` `Binary
