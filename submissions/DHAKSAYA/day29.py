a=input("Enter first list:")
b=input("Enter Second list:")
s1=set(a.split())
s2=set(b.split())
c=""

r=s1.intersection(s2)
if not bool(r):
    print("No common elements found!")
else:
    for i in r:
        c=c+i+" "
    print(c)        


