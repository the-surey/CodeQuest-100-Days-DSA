
# **Day 27: The Campus Code Challenge** 🎓💻  
*Group Project Debugging Simulation*

### **📜 The Scenario**  
You've arrived at a college campus where group projects are in full swing. This time, your project contains a secret code that could save the multiverse!

**The AI Guide says:**  
*"Your group project is incomplete. Debug each module just like fixing a college assignment!"*

**The Glitch (villain)** has corrupted all functions. Your mission is to identify and fix the buggy modules.

---

### **🎯 Challenge: Debugging Filter**  
Write a program that:  
1. Takes space-separated integers (module scores)  
2. Filters out scores below 50 (buggy modules)  
3. Prints modules needing debugging  

*Threshold: Scores < 50 need fixes*

---

### **🔍 Example Input/Output**

#### **Example 1**  
**Input:**  
`65 42 70 55 30`  
**Output:**  
`Modules to debug: 42 30`

#### **Example 2**  
**Input:**  
`80 90 75 60`  
**Output:**  
`All modules are working fine!`

---

### **💡 Pro Tips**  
- Use list comprehension for efficient filtering  
- Handle edge cases (empty input/all passing)  
- Python: `scores = [int(x) for x in input().split()]`

---

### **📝 Your Task**  
1. Implement in any language  
2. Save as: `day27_campus_code.[ext]`  
3. Push to your repo  

---

# **Day 28: Caesar Cipher Challenge** 🔐✨  
*Classic Decryption Exercise*

### **📜 The Discovery**  
You find an ancient scroll with a coded message:  
*"Only those who decode this cipher shall find the hidden treasure."*

---

### **🎯 Challenge: Cipher Decoder**  
Create a program that:  
1. Takes cipher text + shift value  
2. Shifts letters backward (decrypts)  
3. Preserves case and non-alphabets  

*Note: Wrap around from A->Z if needed*

---

### **🔍 Example Input/Output**

#### **Example 1**  
**Input:**  
`"Uifsf jt op tqppo"`  
`Shift: 1`  
**Output:**  
`"There is no spoon"`

#### **Example 2**  
**Input:**  
`"Dro aesmu lbygx pyh TEWZC yfob dro vkji nyq."`  
`Shift: 10`  
**Output:**  
`"The quick brown fox JUMPS over the lazy dog."`

---

### **💡 Expert Tips**  
- Python: Use `ord()/chr()` with modulo 26  
- Handle uppercase/lowercase separately  
- C++: `char shifted = (c - 'a' - shift) % 26 + 'a'`

---

### **📝 Your Mission**  
1. Code in any language  
2. Save as: `day28_caesar_cipher.[ext]`  
3. Submit via PR  

---

### **🌟 Developer Wisdom**  
*"Great code isn't written - it's debugged and refined."*

### **😄 Coding Humor**  
*"Why do programmers confuse Halloween and Christmas?  
Because Oct 31 == Dec 25!"*

---

**Happy Coding!**  
**- Team CodeQuest**  

