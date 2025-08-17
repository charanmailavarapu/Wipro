/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/
#include <stdio.h>

int main() {
int a,b,c;
printf("enter the number");
scanf("%d",&a);
scanf("%d",&b);
//scanf("%d",&c);
c=a+b;
printf("add of a+b+c= %d\n",c);
c=a-b;
printf("sub of a-b-c= %d\n",c);
c=a*b;
printf("mul of c=a*b= %d\n",c);
c=a/b;
printf("div of c=a/b= %d\n",c);
c=a%b;
printf("modula of c=ab= %d\n",c);
 return 0;
}