a=input("Enter input:")
b=a.split()
s=0
for i in range(len(b)):
    if(i%2 != 0):
        s+=int(b[i])
print("Hidden key:",s)        