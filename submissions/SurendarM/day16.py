sum1=1 #initializing sum variable
a=int(input('Enter a number: ')) #getting input
for i in range(1,a+1): 
    sum1=sum1*i #calculating factorial
print('Factorial of',a,'is',sum1)