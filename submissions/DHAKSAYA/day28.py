def decode_cipher(text, shift):
    decoded_text = ""
    
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            shifted = (ord(char) - base - shift) % 26 + base
            decoded_text += chr(shifted)
        else:
            decoded_text += char
    
    return decoded_text

ciphered_text = input("Enter the ciphered text: ")
shift_value = int(input("Enter the shift value: "))
original_message = decode_cipher(ciphered_text, shift_value)
print("Decoded message:", original_message)
