/*JavaScript Array & Spread Operator Tasks
Beginner Level Tasks
Task 1 — Spread Operator
Create 2 arrays:
let frontEnd = ["HTML","CSS"]
let backEnd = ["Node","MongoDB"]
Using spread operator:
Merge both arrays
Print the merged array*/
let frontEnd = ["HTML","CSS"]
let backEnd = ["Node","MongoDB"]
let merged = [...frontEnd, ...backEnd]
console.log(merged)

/*Task 2 — Copy Array
Create:
let original = [1,2,3]
Using spread operator:
Copy array into another variable
Add 4 into copied array
Print both arrays
Check original array changed or not*/
let original = [1,2,3]
let copy = [...original]
copy.push(4)
console.log(original)
console.log(copy)

/*Task 3 — Object Merge
Create 2 objects:
let student1 = {
  name : "Rahul"
}

let student2 = {
  role : "Developer"
}
Using spread operator:
Merge objects
Print result*/

let student1 = {
  name : "Rahul"
}
let student2 = {
  role : "Developer"
}
let mergedObj = {...student1, ...student2}
console.log(mergedObj)

/*Task 4 — Rest Operator
Create function:
function total(a,b,...rest)
Tasks:
Print a
Print b
Print remaining values
Print total count of remaining values
Call function with 8 values.
Destructuring Tasks*/

function total(a,b,...rest){
  console.log(a)
  console.log(b)
  console.log(rest)
  console.log(rest.length)
} 
total(1,2,3,4,5,6,7,8)
  
/*Task 5 — Array Destructuring
Create:
let colors = ["red","green","blue","yellow"]
Tasks:
Store all values into separate variables using destructuring
Print only blue color*/

let colors = ["red","green","blue","yellow"]
let [red,green,blue,yellow] = colors
console.log(blue)

/*Task 6 — Nested Array Destructuring
Create:
let data = [1,[2,[3,[4]]]]
Tasks:
Access all values using destructuring only
Print:
1 2 3 4*/

let data = [1,[2,[3,[4]]]]
let [one, [two, [three, [four]]]] = data
console.log(one, two, three, four)

/*Task 7 — Object Destructuring
Create:
let mobile = {
  brand : "Samsung",
  price : 20000,
  color : "black"
}
Tasks:
Destructure all properties
Print:
Samsung black
Array Manipulation Tasks*/

let mobile = {
  brand : "Samsung",
  price : 20000, 
  color : "black"
}
let {brand, price, color} = mobile
console.log(brand, color)

/*Task 8 — push() & pop()
Create:
let numbers = [1,2,3]
Tasks:
Add 4,5,6 using push
Remove last value using pop
Print final array*/

let numbers = [1,2,3]
numbers.push(4,5,6)
numbers.pop()
console.log(numbers)

/*Task 9 — shift() & unshift()
Create:
let fruits = ["banana","orange"]
Tasks:
Add "apple" in first position
Remove first value
Print final result*/

let fruits = ["banana","orange"]
fruits.unshift("apple")
fruits.shift()
console.log(fruits)

/*Task 10 — splice()
Create:
let arr = [1,2,30,40,5,6]
Tasks:
Remove 30 and 40
Add 3 and 4
Print final array
Expected Output:
[1,2,3,4,5,6]*/

let arr = [1,2,30,40,5,6]
arr.splice(2,2,3,4)
console.log(arr)
/*Task 11 — concat()
Create 2 arrays:
let a = [1,2]
let b = [3,4]
Tasks:
Merge using concat
Add extra values 5,6
Print result*/

let a = [1,2]
let b = [3,4]
let mergedConcat = a.concat(b, [5,6])
console.log(mergedConcat)

/*Task 12 — slice()
Create:
let marks = [10,20,30,40,50,60]
Tasks:
Extract only 30,40,50
Print extracted array*/

let marks = [10,20,30,40,50,60]
let extracted = marks.slice(2,5)
console.log(extracted)

/*Task 13 — flat()
Create:
let nest = [1,[2,[3,[4,[5]]]]]
Tasks:
Convert nested array into single array
Print result*/

let nest = [1,[2,[3,[4,[5]]]]]
let flat = nest.flat(Infinity)
console.log(flat)

/*Task 14 — fill()
Create:
let arr = [1,2,3,4,5]
Tasks:
Replace last 2 values with "done"
Print array*/

let arr = [1,2,3,4,5]
arr.fill("done", 3)
console.log(arr)

/*Task 15 — includes()
Create:
let values = [10,20,30,40]
Tasks:
Check 20 exists or not
Check 100 exists or not*/

let values = [10,20,30,40]
console.log(values.includes(20))
console.log(values.includes(100))

/*Task 16 — indexOf()
Create:
let arr = [1,2,3,4,3,2]
Tasks:
Find first index of 3
Find first index of 2*/

let arr = [1,2,3,4,3,2]
console.log(arr.indexOf(3))
console.log(arr.indexOf(2))

/*Task 17 — lastIndexOf()
Using same array:
let arr = [1,2,3,4,3,2]
Tasks:
Find last index of 3
Find last index of 2*/

let arr = [1,2,3,4,3,2]
console.log(arr.lastIndexOf(3))
console.log(arr.lastIndexOf(2))

/*Task 18 — sort()
Create:
let nums = [100,2,55,1,9]
Tasks:
Sort array
Observe wrong output
Then solve using compare function*/

let nums = [100,2,55,1,9]
nums.sort()
console.log(nums) // Wrong output
nums.sort((a,b) => a - b)
console.log(nums) // Correct output

/*Task 19 — reverse()
Create:
let letters = ["a","b","c","d"]
Tasks:
Reverse array
Print output
Real-Time Logical Tasks*/

let letters = ["a","b","c","d"]
letters.reverse()
console.log(letters)

/*Task 20 — Student Management
Create student array:
let students = ["Rahul","Ajay","Kumar"]
Tasks:
Add new student
Remove one student
Replace one student name
Reverse student list*/

let students = ["Rahul","Ajay","Kumar"]
students.push("Naveen")
students.splice(1,1) // Remove Ajay
students[0] = "Rohit" // Replace Rahul with Rohit
students.reverse()
console.log(students)

/*Task 21 — Shopping Cart
Create:
let cart = ["Shoes","Watch","Phone"]
Tasks:
Add "Laptop"
Remove "Watch"
Check "Phone" exists or not
Print total cart items
*/

let cart = ["Shoes","Watch","Phone"]
cart.push("Laptop")
cart.splice(cart.indexOf("Watch"), 1) // Remove Watch
console.log(cart.includes("Phone")) // Check if Phone exists
console.log(cart.length) // Total cart items

/*Task 22 — Employee Database
Create object:
let employee = {
  name : "Naveen",
  role : "Web Developer",
  salary : "5LPA"
}
Tasks:
Destructure all values
Copy object using spread operator
Change salary in copied object only
Check original object changed or not*/

let employee = {
  name : "Naveen",
  role : "Web Developer",
  salary : "5LPA"
}
let {name, role, salary} = employee
console.log(name, role, salary)

//Advanced Logical Tasks

/*Task 23 — Custom Function
Create function:
function company(name,...skills)
Tasks:
Print employee name
Print all skills
Print total skill count
Example Call:
company("Naveen","HTML","CSS","JS","React")*/

function company(name,...skills){
  console.log(name)
  console.log(skills)
  console.log(skills.length)
}
company("Naveen","HTML","CSS","JS","React")

/*Task 24 — Array Analyzer
Create array:
let data = [1,2,3,4,5,6,7,8,9,10]
Tasks:
Extract first 5 values
Reverse array
Check number 7 exists or not
Find index of 10
*/

let data = [1,2,3,4,5,6,7,8,9,10]
let firstFive = data.slice(0,5)
console.log(firstFive)

/*Task 25 — Complete Challenge
Create:
let users = [
  {name:"Rahul",role:"Developer"},
  {name:"Ajay",role:"Designer"},
  {name:"Kumar",role:"Tester"}
]
Tasks:
Add new user
Remove last user
Merge another array of users
Print all user names only
Reverse final array*/

let users = [
  {name:"Rahul",role:"Developer"},
  {name:"Ajay",role:"Designer"},
  {name:"Kumar",role:"Tester"}
]
users.push({name:"Naveen", role:"Manager"})
users.pop()
let newUsers = [{name:"Rohit", role:"Developer"}, {name:"Sreehari", role:"Designer"}]
users = users.concat(newUsers)
let userNames = users.map(user => user.name)
console.log(userNames)
users.reverse()
console.log(users)