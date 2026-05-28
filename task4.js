/* 
Task 1 — Smart Attendance Checker
Concept:
if else
logical operator
function
Scenario:
A student can enter exam hall only if:
attendance >= 75
fees paid = true
Expected:
Allowed for Exam
Otherwise:
Not Allowed*/

function checkAttendance(attendance, feesPaid) {
    if (attendance >= 75 && feesPaid) {
        return "Allowed for Exam";
    } else {
        return "Not Allowed";
    }
}
//console.log(checkAttendance(80, true)); // Allowed for Exam
//console.log(checkAttendance(70, true)); // Not Allowed
//console.log(checkAttendance(80, false)); // Not Allowed     
let attendance = parseFloat(prompt("Enter attendance percentage:"));
let feesPaid = confirm("Has fees been paid?");
console.log(checkAttendance(attendance, feesPaid));
/*Task 2 — Mobile Password Strength Checker
Concept:
string
conditions
Requirement:
Check password:
minimum 8 characters
should contain number
should contain uppercase
Example:
Abc12345
Output:
Strong Password*/

function checkPasswordStrength(password) {
    if (password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password)) {
        return "Strong Password";
    } else {
        return "Weak Password";
    }
}
//console.log(checkPasswordStrength("Abc12345")); // Strong Password
//console.log(checkPasswordStrength("abc12345")); // Weak Password          

/* Task 3 — Find Second Largest Number
Concept:
loop
conditions
variables
Input:
[10,50,80,20,90,70]
Output:
80*/

function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        } 
    }
    return secondLargest;
}  
/*Task 4 — Bus Seat Booking System
Concept:
array
loop
conditions
Requirement:
Create 10 seats.
If seat booked:
Seat Already Booked
Else:
Seat Booked Successfully*/

function bookSeat(seats, seatNumber) {
    if (seats[seatNumber] === "booked") {
        return "Seat Already Booked";
    } else {
        seats[seatNumber] = "booked";
        return "Seat Booked Successfully";
    }
}
let seats = new Array(10).fill("available");
console.log(bookSeat(seats, 3)); // Seat Booked Successfully
console.log(bookSeat(seats, 3)); // Seat Already Booked 
/*Task 5 — ATM Cash WithdrawLogic
Concept:
function
return
conditions
Rules:
balance = 10000
user cannot withdraw more than balance
minimum balance should maintain 1000
Example:
Withdraw:
9500
Output:
Insufficient Balance*/

function withdrawCash(balance, amount) {
    if (amount > balance) {
        return "Insufficient Balance";
    } else if (balance - amount < 1000) {
        return "Minimum Balance Should Be Maintained";
    } else {
        balance -= amount;
        return `Withdrawal Successful. Remaining Balance: ₹${balance}`;
    }
}
console.log(withdrawCash(10000, 9500)); // Insufficient Balance
console.log(withdrawCash(10000, 9000)); // Minimum Balance Should Be Maintained
console.log(withdrawCash(10000, 8000)); // Withdrawal Successful. Remaining Balance: ₹2000


/*Task 6 — Product Search Engine
Concept:
array
for of
string methods
Requirement:
Search product from array.
Example:
["iphone","samsung","realme","oppo"]
Search:
realme
Output:
Product Found*/

function searchProduct(products, searchTerm) {
    for (let product of products) {
        if (product.toLowerCase() === searchTerm.toLowerCase()) {
            return "Product Found";
        }
    }
    return "Product Not Found";
}
let products = ["iphone", "samsung", "realme", "oppo"];
console.log(searchProduct(products, "realme")); // Product Found
console.log(searchProduct(products, "nokia")); // Product Not Found 

/*Task 7 — Voting Eligibility System
Concept:
nested if
logical operators
Rules:
Person can vote only if:
age >= 18
has voter id
citizenship = Indian*/
function checkVotingEligibility(age, hasVoterId, citizenship) {
    if (age >= 18) {
        if (hasVoterId) {
            if (citizenship === "Indian") {
                return "Eligible to Vote";
            }
        }
    }
    return "Not Eligible to Vote";
}
console.log(checkVotingEligibility(20, true, "Indian")); // Eligible to Vote
console.log(checkVotingEligibility(17, true, "Indian")); // Not Eligible to Vote
console.log(checkVotingEligibility(20, false, "Indian")); // Not Eligible to Vote
console.log(checkVotingEligibility(20, true, "American")); // Not Eligible to Vote  

/*Task 8 — Online Food Order Bill
Concept:
function
parameters
arithmetic operators
Requirement:
Calculate:
food price
GST
delivery charge
discount
Final Output:
Total Bill : ₹450*/
function calculateBill(foodPrice, gst, deliveryCharge, discount) {
    let total = foodPrice + gst + deliveryCharge - discount;
    return `Total Bill: ₹${total}`;
}
console.log(calculateBill(300, 50, 30, 20)); // Total Bill: ₹360


/*Task 9 — Reverse Word Without reverse()
Concept:
loop
string
Input:
javascript
Output:
tpircsavaj*/
function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}
console.log(reverseWord("javascript")); // tpircsavaj
console.log(reverseWord("hello")); // olleh

/*Task 10 — Mini Instagram Like System
Concept:
variable
function
ternary operator
Requirement:
When user clicks like:
Liked ❤️
Else:
Like 🤍
Also maintain total likes count.
*/
let totalLikes = 0;
function toggleLike(isLiked) {
    if (isLiked) { 
        totalLikes--;
        return "Like 🤍";
    } else {
        totalLikes++;
        return "Liked ❤️";
    }
}
console.log(toggleLike(false)); // Liked ❤️
console.log(toggleLike(true)); // Like  🤍