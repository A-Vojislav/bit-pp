let x,y,z;

x=7;
y=7;
z=5;

if (x==y && y==z) {
    console.log('equilateral')
} else if (x == z || x == y || z == y) {
    console.log('isosceles')
}  else {
    console.log('scalene')
}