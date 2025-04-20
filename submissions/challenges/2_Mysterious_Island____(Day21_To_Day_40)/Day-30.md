# **Day 30: The Ultimate Cipher Challenge** 🔥🔐  
*Final Showdown to Save the Multiverse*

### **📜 The Climax**  
At the heart of Mysterious Island lies an ancient terminal holding the multiverse's fate. The AI Guide warns:  
*"This cipher uses advanced Caesar encryption - decode it to prevent cosmic collapse!"*  

**Your Team:**  
🤖 *Echo:* "The offset shifts letters backward - wrap around at alphabet boundaries!"  
🥥 *Nariyal Bhai:* "Simple logic, but execution must be perfect!"  
🎭 *Mayur:* "This isn't just code - it's destiny!"  

---

### **🎯 Mission: Advanced Caesar Decoder**  
Build a program that:  
1. **Inputs:**  
   - Encrypted string  
   - Shift value (1-25)  
2. **Process:**  
   - Shifts letters backward while preserving case  
   - Ignores numbers/symbols  
   - Handles wrap-around (A←Z, a←z)  
3. **Outputs:** The original message  

**Bonus:** Add automatic shift detection!

---

### **🔍 Sample Decryptions**

#### **Case 1: Basic Decryption**  
**Input:**  
```
Cipher: "Uifsf jt op tqppo"  
Shift: 1  
```  
**Output:**  
`"There is no spoon"`

#### **Case 2: Mixed Characters**  
**Input:**  
```
Cipher: "Dro aesmu lbygx pyh TEWZC yfob dro vkji nyq."  
Shift: 10  
```  
**Output:**  
`"The quick brown fox JUMPS over the lazy dog."`

#### **Case 3: Edge Handling**  
**Input:**  
```
Cipher: "Aopz pz h alza!"  
Shift: 7  
```  
**Output:**  
`"This is a test!"`

---

### **💡 Cryptographic Toolkit**

**Python Solution:**
```python
def decrypt_cipher(text, shift):
    result = []
    for char in text:
        if char.isupper():
            result.append(chr((ord(char) - 65 - shift) % 26 + 65))
        elif char.islower():
            result.append(chr((ord(char) - 97 - shift) % 26 + 97))
        else:
            result.append(char)
    return ''.join(result)
```

**Key Techniques:**  
- ASCII manipulation (`ord()`/`chr()`)  
- Modular arithmetic for wrap-around  
- Case-sensitive processing  

**Optimization Tip:** Precompute shifted alphabets for O(1) lookups in large texts.

---

### **📝 Your Final Task**  
1. Implement in any language  
2. Save as: `day30_multiverse_cipher.[ext]`  
3. Handle these edge cases:  
   - Empty input  
   - Maximum shift (25)  
   - Non-alphabetic characters  

---

### **🌟 Words for the Champion**  
*"You've debugged algorithms and decrypted ciphers - now go forth and shape realities with your code!"*  

---

### **😄 Victory Humor**  
*"Why did the programmer break up with their keyboard?  
They needed space to celebrate their final commit!"*  

---

**- Team CodeQuest**  
*Est. 2025 | Building tomorrow's coders*  

---

**



