#include <stdio.h>
int main(){
    int digit,N,EvenDigit=0;
    printf("Enter a number: ");
    scanf("%d", &N);
     printf("Even Digit: ");
     while(N>0){
        digit = N%10;
    if(digit%2 == 0){
        printf("%d ", digit);
        EvenDigit=1;
    }  
    N /= 10;
  }
  if(EvenDigit == 0){
    printf("No Even Digits found");
  }
  return 0;
}