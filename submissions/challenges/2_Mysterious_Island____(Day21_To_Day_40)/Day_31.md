# **Day 31: The Rotating Compass – The Magic of Array Rotation!** �🔄  

### **📜 The Story**  
In the jungle of Mysterious Island, you find an old compass that keeps spinning—completely out of control!  
Echo says,  
*"Hey, this compass isn’t pointing in the right direction. To fix it, you need to rotate a list of numbers. Just write some code and let the compass show the correct path!"*  

Nariyal Bhai smiles and says,  
*"Just like how group projects in college need coordination, here you need to shift numbers the right way!"*  

Mayur adds dramatically,  
*"Rotation means seeing things from a new angle. Your job is to rotate these numbers by a fixed number of steps—and the path will reveal itself!"*  

---

### **🎯 Challenge: Rotate the Array – The Magic Trick**  
Write a program that:  
1. **Takes a list of integers as input** (space-separated).  
2. **Takes an integer \( K \)** as input, representing how many positions to rotate the array to the right.  
3. **Rotates the array by \( K \) positions.**  
4. **Prints the rotated array.**  

*Note:*  
- If \( K \) is larger than the array length, use \( K \mod \text{(array length)} \) for rotation.  
- Rotation means moving each element to the right; elements that go past the end should wrap around to the start.  

---

### **🔍 Example Input/Output**  

#### **Example 1**  
**Input:**  
```
Enter numbers: 1 2 3 4 5  
Enter rotation value (K): 2  
```  
**Output:**  
```
Rotated Array: 4 5 1 2 3  
```  

#### **Example 2**  
**Input:**  
```
Enter numbers: 10 20 30 40 50 60  
Enter rotation value (K): 3  
```  
**Output:**  
```
Rotated Array: 40 50 60 10 20 30  
```  

#### **Example 3**  
**Input:**  
```
Enter numbers: 7 8 9  
Enter rotation value (K): 4  
```  
**Output:**  
```
Rotated Array: 9 7 8  
```  

---

### **💡 Hints**  
- **Method 1:**  
  - Calculate the effective rotation using \( K \mod \text{(array length)} \).  
  - Split the array into two parts and swap them.  
- **Method 2:**  
  - Use a loop to shift elements one by one, \( K \) times.  
- **Python Trick:**  
  - Slicing makes it easy:  
    ```python
    rotated = arr[-K:] + arr[:-K]  
    ```  
- Handle edge cases (like \( K = 0 \) or \( K = \text{array length} \)).  

---

### **📝 Your Task**  
- Write your solution in **any programming language** (Python, C++, Java, etc.).  
- Save your file as `day31_rotating_compass.[ext]` (e.g., `day31_rotating_compass.py`).  

---

### **🌟 Motivational Quote**  
*"Just like changing direction makes a journey feel new, every rotation gives you fresh ideas. Keep shifting your perspective and keep coding!"* 🚀  

---

### **😂 Echo’s Dad Joke of the Day**  
*"Why did the array get dizzy?"*  
Because it was **rotating non-stop!** 😆  

---

The mystical compass is now fixed, pointing the right way. Your coding skills are unraveling the secrets of Mysterious Island. Get ready for **Day 32**, where new challenges await!
