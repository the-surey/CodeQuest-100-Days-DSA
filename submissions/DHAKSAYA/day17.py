n=int(input("Enter the number of terms:"))
a=[]
for i in range(n):
    if (i==0 or i==1):
        a.append(i)
    else:
        a.append(a[i-2]+a[i-1])
for i in a:
    print(i,end=" ")