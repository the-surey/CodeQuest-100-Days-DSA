s=input()
x=""
if (s[0]=="_"):
    k=ord(s[1])-2


for i in s:
    if(i=="_"):
        k=k+1
        x=x+chr(k)
    else:
        x=x+i
        k=ord(i)    
print(x)