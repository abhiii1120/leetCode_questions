# 1470. Shuffle the Array

## 🧩 Problem Statement

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.

---

## 📌 Examples

**Example 1:**

Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.

**Example 2:**

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.

---

## ⚙️ Constraints

* arr is a valid JSON array
* 0 <= arr.length <= 1000

---

## 🚀 Approach

* Check if length of an array is there
* if present then using length-1 get last element and return it 
* if not present then return -1

---

## 🧠 Explanation (Step-by-step)

Example:
Input: const arr = [1, 2, 3];
 
 here arr.length is present and it's 3 so in condition we will get true and hence by logic this[this.length-1] will give us our value

Final Output:

arr.last()  // 3

---

## 🏷️ Tags

`Array`
