a= input("Enter text:")
b=set(a.split())
d={}
for i in b:
    d[i]=a.count(i)
for i in d:
    print(i,":",d[i])    