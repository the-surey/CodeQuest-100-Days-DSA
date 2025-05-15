a=input("Enter a sentence: ")
c=a.split()
k=0
for i in c:
    if(len(i)>=k):
        k=len(i)
        b=i
print("Longest word: ",b)        

