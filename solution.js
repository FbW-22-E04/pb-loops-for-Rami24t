//1:
let sum = 0;
for(i=1;i<21;i++)
{
sum+=i;
}
console.log(sum);

//2.
for(i=1;i<6;i++)
{
console.log( "There are",i,"bottles of beer on the table." );
}

//3.
for(i=0;i<21;i++)
{
if(i%2==0)
console.log( i,"is even");
else
console.log(i,"is odd");
}

//4.
for(i=0;i<11;i++)
{
console.log( i,"* 9 =", i*9);
}

//5.
for(i=1;i<101;i++)
{
if(i%3==0&&i%5==0)
console.log('FizzBuzz',i);
else if(i%3==0)
console.log('Fizz',i);
else if(i%5==0)
console.log('Buzz', i);
}

//6.
let sumOfMultiples = 0;
for(i=1;i<1001;i++)
{
if(i%3==0&&i%5==0)
{sumOfMultiples+=i;}
}
console.log('Sum of multiples of 15 under 1000 is',sumOfMultiples);
