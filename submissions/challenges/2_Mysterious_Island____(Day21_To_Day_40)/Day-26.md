
# **Day 26: The Mystic Mirror Challenge** 🌟🔠  
*Vowel & Consonant Analysis*

### **📜 The Adventure Continues...**
You've discovered an ancient mystic mirror in the island's temple that analyzes words.  
The AI Guide reveals:  
*"This mirror responds only to those who can decode language patterns. Prove your skills by analyzing vowel and consonant counts!"*

---

### **🎯 Challenge: Letter Counter**
Create a program that:
1. Takes any sentence as input
2. Counts vowels (a,e,i,o,u) and consonants
3. Displays both counts (ignoring non-alphabets)

---

### **🔍 Sample Analysis**

#### **Example 1**  
**Input:**  
`"Hello World"`  
**Output:**  
```
Vowels: 3  
Consonants: 7
```

#### **Example 2**  
**Input:**  
`"CodeQuest"`  
**Output:**  
```
Vowels: 4  
Consonants: 4
```

---

### **💡 Expert Tips**
- **Case Handling:** Convert to lowercase first  
- **Validation:** Use `isalpha()` to filter letters  
- **Efficiency:** Single-pass iteration recommended  

**Python Snippet:**  
```python
vowels = set('aeiou')
for char in text.lower():
    if char.isalpha():
        # Your logic here
```

---

### **📝 Your Mission**
1. Implement in any language  
2. Save as: `day26_mirror_analysis.[ext]`  
3. Push to your repository  

---

### **🌟 Wisdom for Coders**  
*"Language shapes reality - your code interprets it."*

---

### **😄 Dev Humor**  
*"Why did the vowel break up with the consonant?  
It needed some 'space'!"*  

---

**Solved it?** **Day 27** awaits with greater challenges!  

*Happy Coding!*  
**- Team CodeQuest**  

