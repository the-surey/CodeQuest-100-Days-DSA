a=input("Enter a sentence:")
v=0
c=0
s=['a','e','i','o','u']
for i in a:
    i.lower()
    if (i.isalpha()):
        if i in s:
            v+=1
        else:
            c+=1
print(f"Vowels:{v}\nConsonant:{c}")        