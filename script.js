//using var and Data Ty
var name = "Ali";               // String

var age = 25;                   // Number

var isStudent = true;          // Boolean(true or false)

var person = { name: "Haider", age: 5 }; // Object

var fruits = ["Apricot", "Berry", "Cherry"]; // Array

console.log("1) Data Types:");

console.log("String:", name);

console.log("Number:", age);

console.log("Boolean:", isStudent);

console.log("Object:", person);

console.log("Array:", fruits);

// 2) Arithmetic operations

var num1 = 5;

var num2 = 2;

console.log("2) Arithmetic Operations:");

console.log("Addition:", num1 + num2);

console.log("Subtraction:", num1 - num2);

console.log("Multiplication:", num1 * num2);

console.log("Division:", num1 / num2);

console.log("Modulus:", num1 % num2);

// 3) Checking by using if and else  whether the number is positive, negative, or zero

var inputNumber = -1;

console.log("3) Positive, Negative, or Zero:");

if (inputNumber > 0) {

    console.log(inputNumber + " is positive.");

    } else if (inputNumber < 0) {

        console.log(inputNumber + " is negative.");

        } else {

            console.log(inputNumber + " is zero.");

            }

            // 4) Array operations on students

            var students = ["Ayesha", "Bilal", "Sana", "Zain", "Fahad"];

            console.log("4) Original Students Array:");

            console.log(students);

            // Add a student

            students.push("Lily");

            console.log("Added 'Lily':");

            console.log(students);

            // Remove the last student

            students.pop();

            console.log("Removed last student:");

            console.log(students);

            // Sort the array

            students.sort();

            console.log("Sorted Students:");

            console.log(students);

            // Display the array in reverse order

            console.log("Students in Reverse Order:");

            console.log(students.slice().reverse());</script></body><html>
