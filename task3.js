/* 1. Student Login Check

Ask username and password using prompt().

If username = "admin" and password = "1234"
→ print "Login Success"
Else print "Invalid User" */

const username = prompt("Enter Username:");
const password = prompt("Enter Password:");
if(username === "admin" && password === "1234"){
    console.log("Login Success");
}
else{
    console.log("Invalid User");
}

/*
2. ATM Balance System
Create a variable balance = 5000
Withdraw amount using prompt()
If amount less than balance → "Withdraw Success"
Else → "Insufficient Balance"*/

let bal=5000;
let withdraw= parseFloat(prompt("Enter withdrawal amount:"));
if(withdraw < bal){
    console.log("Withdraw Success");
}
else{
    console.log("Insufficient Balance");
}

/*
3. Traffic Signal Project
Using switch
"red" → stop
"yellow" → ready
"green" → go*/
switch(prompt("Traffic Signal Color:").toLowerCase()){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Color");
}

/*4. Age Eligibility Checker
Take age from user.
age >= 18 → "Eligible for Vote"
Else → "Not Eligible"*/
let kidage= parseFloat(prompt("Enter your age:"))
if(kidage>=18 && kidage < 120){
    console.log("Eligible for Vote");
}
else{
    console.log("Not Eligible");
}

/*5. Shopping Discount System
Take product price.
Above 5000 → 20% discount
Above 3000 → 10% discount
Else → no discount*/
let prodprice= parseFloat(prompt("Enter Product price:"));
if(prodprice>=5000){
    console.log("20% discount"+" Final price: "+(prodprice-(prodprice*0.2)));
}
else if (prodprice>=3000){
    console.log("10% discount"+"Final Price: "+(prodprice-(prodprice*0.1)));

}
else{
    console.log("No discount");
} 

/*6. Password Strength Checker
Check password length.
length >= 8 → "Strong Password"
Else → "Weak Password"*/
let pass= prompt("Enter Password:");
if(pass.length>=8){
    console.log("Strong Password");
}
else{
    console.log("Weak Password");
}

/*7. Mobile Battery Warning
Take battery percentage.
<= 10 → "Battery Low"
<= 50 → "Battery Medium"
Else → "Battery Full"*/
let battery= parseFloat(prompt("Enter Battery Percentage:"));
if(battery<=10){
    console.log("Battery Low");
}
else if(battery<=50){
    console.log("Battery Medium");
}
else{
    console.log("Battery Full");
}

/*8. Employee Salary Bonus
Create salary variable.
salary >= 50000 → 15% bonus
salary >= 30000 → 10% bonus
Else → 5% bonus*/
let salary=parseFloat(prompt("Enter salary:"));
if(salary>=50000){
    console.log("15% bonus"+" Final Salary: "+(salary+(salary*0.15)));
}
else if(salary>=30000){
    console.log("10% bonus"+" Final Salary: "+(salary+(salary*0.1)));
} 
else{
    console.log("5% bonus"+" Final Salary: "+(salary+(salary*0.05)));
}  

/*9. Online Food Order
Take order amount.
Above 499 → "Free Delivery"
Else → "Delivery Charge Added"*/
let ordamt=parseFloat(prompt("Enter Order Amount:"));
if(ordamt>499){
    console.log("Free Delivery");
}
else{
    console.log("Delivery Charges Added");
}

/*10. Movie Ticket Booking
Take age.
Below 5 → Free ticket
Below 18 → Child ticket
Else → Adult ticket*/
let age=prompt("Enter child's age:");
if(age<5){
    console.log("Free Ticket");
}
else if(age<18){
    console.log("Child Ticket");
}
else{
    console.log("Adult Ticket");
}

/*11. Instagram Likes Counter
Using for loop
Print:
Like 1
Like 2
Like 3
Like 4
Like 5*/
let n=5;
for(let i=1;i<=n;i++){
    console.log("Like "+i);
}

/*12. Countdown Timer
Using while loop
Print:
5
4
3
2
1
Start */
let count=5;
while(count>0){
    console.log(count);
    count--;
}
console.log("Start");

/*13. OTP Verification
Create OTP = 1234
Take input from user.
Correct → "OTP Verified"
Wrong → "Invalid OTP"*/
const OTP=1234;
let userotp= parseInt(prompt("Enter OTP:"));
if(userotp==OTP){
    console.log("OTP Verified");
}
else{
    console.log("Invalid OTP");
}

/*14. E-commerce Cart Total
Array:
let cart = [200,500,1000,300]
Find total cart value using loop.*/
let cart = [200,500,1000,300];
let total=0;
let i=0;
for(i=0;i<cart.length;i++){
    total+=cart[i];
}
console.log("Total Cart Value: "+total);

/*15. Student Mark Grade System
Take mark.
90+ → A Grade
70+ → B Grade
50+ → C Grade
Else → Fail */
let mark=parseFloat(prompt("Enter Marks:"));
if(mark>=90){
    console.log("A Grade");
}
else if(mark>=70){
    console.log("B Grade");
}
else if(mark>=50){
    console.log("C Grade");
}
else{
    console.log("Fail");
}

/*16. Netflix Subscription Checker
Boolean variable:
let subscription = true
true → "Watch Movie"
false → "Buy Subscription" */
let subscription=true;
if(subscription){
    console.log("Watch Movie");
}
else{
    console.log("Buy Subscription");
} 

/*17. Product Stock Checker
let stock = 0
stock > 0 → "Product Available"
Else → "Out of Stock" */
let stock=0;
if(stock>0){
    console.log("Product Available");
}
else{
    console.log("Out of Stock");
}  

/*18. Weather App Condition
Using switch
"sunny" → "Go Outside"
"rainy" → "Take Umbrella"
"cold" → "Wear Jacket" */

switch(prompt("Weather Condition:").toLowerCase()){
    case "sunny":
        console.log("Go Outside");
        break;
    case "rainy":
        console.log("Take Umbrella");
        break;
    case "cold":
        console.log("Wear Jacket");
        break;
    default:
        console.log("Invalid Weather Condition");
}

/*19. User Profile Object
Create object:
let user = {
   name : "Navi",
   age : 20,
   city : "Bangalore"
}
Print all values using for in loop. */
let user = {
   name : "Navi",
   age : 20,
   city : "Bangalore"
}
let key;
for(key in user){
    console.log(user[key]);
}       
/*20. WhatsApp Chat Array
Array:
let chats = ["hi","hello","where are you","ok"]
Print each message using for of loop.
*/
let chats = ["hi","hello","where are you","ok"];
let message;
for(message of chats){
    console.log(message);
}   