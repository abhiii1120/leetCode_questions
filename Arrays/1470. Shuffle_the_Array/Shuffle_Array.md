# 1470. Shuffle the Array

## 🧩 Problem Statement

Given the array `nums` consisting of `2n` elements in the form:

```text id="6s40oz"
[x1,x2,...,xn,y1,y2,...,yn]
```

Return the array in the form:

```text id="h0w1eq"
[x1,y1,x2,y2,...,xn,yn]
```

---

## 📌 Examples

**Example 1:**

```text id="sd6qll"
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
```

**Example 2:**

```text id="m04xq8"
Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
```

---

## ⚙️ Constraints

* `1 <= n <= 500`
* `nums.length == 2n`
* `1 <= nums[i] <= 10^3`

---

## 🚀 Approach

* Create a new array
* Traverse from `0` to `n - 1`
* Push:

  * first half element → `nums[i]`
  * second half element → `nums[n + i]`
* Return the new shuffled array

---

## 🧠 Explanation (Step-by-step)

Example:
Input: `nums = [2,5,1,3,4,7]`, `n = 3`

Array breakdown:

```text id="xaz8yw"
First Half  = [2,5,1]
Second Half = [3,4,7]
```

Now combine alternately:

1. Add `2` and `3`
2. Add `5` and `4`
3. Add `1` and `7`

Final Output:

```text id="9y6v89"
[2,3,5,4,1,7]
```

---

## ⏱️ Complexity

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(n)`

## ⚠️ Edge Cases

* Smallest possible array
* Duplicate numbers
* All elements same

---

## 🎯 Key Takeaways

* Used indexing to access both halves of the array
* Built shuffled array in a single traversal
* Simple and efficient solution

---

## 🏷️ Tags

`Array`

---
