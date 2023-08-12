// Question 1

// var input1 = +prompt("Enter any number");
// var input2 = +prompt("Enter any number");
// if (input1 > input2) {
    // document.write("The Larger Number is " + input1);
// }
// else if (input2 > input1) {
    // document.write("The Larger Number is " + input2);
// }
// else {
    // document.write("Both Numbers are Equal")
// };


// Question 2

// var input = +prompt("Enter any number");
// if (input > 0) {
//     alert("The Number is +");
// }
// else if (input < 0) {
//     alert("The number is -");
// }
// else {
//     alert("The number is Zero");
// };


// Question 3

// var num = [];
// for (var i = 0; i < 5; i++) {
//     var number = prompt("Enter number " + (i + 1) + ":");
//     number = parseFloat(number);
//     num.push(number);
// }
// var largestNumber = num[0];

// for (var i = 1; i < num.length; i++) {
//   if (num[i] > largestNumber) {
//     largestNumber = num[i];
//   }
// }
// document.write("The largest number is: " + largestNumber);


// Question 4

// for (var  i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         document.write(i + " is even" + "<br>");
//     }
//     else {
//         document.write(i + " is odd" + "<br>");
//     }
// }


// Question 5

// var marks = [80, 90, 65, 55, 75];
// var totalMarks = 0;
// for (var i = 0; i < marks.length; i++) {
//   totalMarks += marks[i];
// }
// var averageMarks = totalMarks / marks.length;
// var grade;
// if (averageMarks < 60) {
//   grade = 'F';
// } else if (averageMarks < 70) {
//   grade = 'D';
// } else if (averageMarks < 80) {
//   grade = 'C';
// } else if (averageMarks < 90) {
//   grade = 'B';
// } else {
//   grade = 'A';
// }
// document.write("Average Marks: " + averageMarks + "<br>");
// document.write("Grade: " + grade);


// Question 6

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         document.write("FizzBuzz" + " ");
//     } else if (i % 3 === 0) {
//         document.write("Fizz" + " ");
//     } else if (i % 5 === 0) {
//         document.write("Buzz" + " ");
//     } else {
//         document.write(i + " ");
//     }
//   }
  

// Question 7

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write(j + " ");
//   }
//   document.write("<br>");
// }


// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("❤️");
//     }
//     document.write("<br>");
// };


// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*");
//       }
//     document.write("<br>");
// };


// for (var i = 1; i <= 5; i++) {
//    for (var j = 1; j <= i; j++) {
//         document.write(i + " ");
//     }
//     document.write("<br>");
// };


// for (var i = 5; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//         document.write(i + " ");
//     }
//     document.write("<br>");
// };  