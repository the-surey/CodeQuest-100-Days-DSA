number=input("Enter a number:- \n")
digits = []
sum=0
for i in number:
    digits.append(i)
    sum += int(i)
expression = " + " .join(digits)
print(f"Sum of digits: {expression} = {sum}")
