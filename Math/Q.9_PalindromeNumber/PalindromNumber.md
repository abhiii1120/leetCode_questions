# 9. Palindrome Number

## 🧩 Problem Statement

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

A palindrome reads the same forward and backward.

---

## 📌 Examples

**Example 1:**

```
Input: x = 121
Output: true
```

**Example 2:**

```
Input: x = -121
Output: false
```

**Example 3:**

```
Input: x = 10
Output: false
```

---

## 🚀 Approach

* A negative number can never be a palindrome → return `false`
* Store the original number
* Reverse the number using modulo (`% 10`) and division (`Math.floor`)
* Compare reversed number with original number

---

## 🧠 Explanation (Step-by-step)

Let’s take `x = 121`:

1. Extract last digit → `121 % 10 = 1`
2. Build reverse → `0 * 10 + 1 = 1`
3. Remove last digit → `121 / 10 = 12`
4. Repeat:

   * `12 % 10 = 2` → reverse = `12`
   * `1 % 10 = 1` → reverse = `121`
5. Compare:

   * original = `121`
   * reversed = `121` ✅

---

## ⏱️ Complexity

* **Time Complexity:** `O(log n)` (number of digits)
* **Space Complexity:** `O(1)`

---

## 🎯 Key Takeaways

* No string conversion used ✅
* Pure math-based solution
* Efficient and interview-friendly

---
