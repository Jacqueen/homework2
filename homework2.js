var myAge = function(year, yearOfBirth)
{ var age = (year - yearOfBirth);
return age;
};
var result = myAge(2017,1999);
console.log(result);

if (myAge>=18) {
console.log("Congrats you're an adult");
}
else {
 console.log("Enjoy your free life!");
}
var name = 'Jaqlin';
var surname = 'Mardirossian';
var fullName = 'Jaqlin' + 'Mardirossian';
console.log(fullName);