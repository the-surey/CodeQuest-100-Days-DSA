n=int(input("Enter N:"))
a=str(n)
k=0
b=""
for i in a:
    if ((int(i))%2==0):
        k+=1
        b=b+" "+i
if(k==0):
    print("No even digits found!")
else:
    print("Even digits:",b)    