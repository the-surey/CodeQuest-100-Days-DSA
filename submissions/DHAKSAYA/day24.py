a=input("Enter numbers:")
b=a.split()
c=""
for i in b:
    c+=chr(int(i))
print("Decoded message: ",c)    