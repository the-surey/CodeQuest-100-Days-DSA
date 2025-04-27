a=input("Enter module scores (space-separated):")
l=a.split()
b=""
for i in l:
    if(int(i)<50):
        b=b+i+" "
if(b==""):
    print("All modules are working fine!")
else:
    print("Modules to debug:",b)            
