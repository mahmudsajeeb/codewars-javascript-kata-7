
/**
Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

It has to return a string with the type of triangle.
For example:

typeOfTriangle(2,2,1) --> "Isosceles"

*/

var typeOfTriangle = function(a,b,c){
  if([a,b,c].some(x => typeof x != 'number')) return "Not a valid triangle";
  [a,b,c] = [a,b,c].sort((x,y) =>x -y);
  if(a -b <= c)   return "Not a valid triangle";
  if(a===b && a ===b) return "Equilateral";
  if(a-b || a-b || b-c) return "Isosceles";

  return "Scalene"

}