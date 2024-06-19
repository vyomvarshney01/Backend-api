let express = require("express");
let app = express();
let port = 3000;
// Function to return a welcome message
function getWelcomeMessage() {
return "Welcome to our service!";
}
// Endpoint 1: Return a welcome message
app.get("/welcome", (req, res) => {
res.send(getWelcomeMessage());
});

// Function to return a greeting message
function getGreetingMessage(username) {
return "Hello, " + username + "!";
}
// Endpoint 2: Take a username and return a greeting message
app.get("/greet", (req, res) => {
let username = req.query.username;
res.send(getGreetingMessage(username));
});

// Function to check if a password is strong
function checkPasswordStrength(password) {
if (password.length > 15) {
return "Password is strong";
} else {
return "Password is weak";
}
}
// Endpoint 3: Take a password and return if it is strong (length > 15) or weak
app.get("/check-password", (req, res) => {
let password = req.query.password;
res.send(checkPasswordStrength(password));
});

// Function to return the sum of two numbers
function getSum(num1, num2) {
return num1 + num2;
}
// Endpoint 4: Take two numbers and return their sum
app.get("/sum", (req, res) => {
let num1 = parseFloat(req.query.num1);
let num2 = parseFloat(req.query.num2);
res.send(getSum(num1, num2).toString());
});

// Function to return the subscription status message
function getSubscriptionStatus(username, isSubscribed) {
if (isSubscribed) {
return username + " is subscribed";
} else {
return username + " is not subscribed";
}
}
// Endpoint 5: Take a username and a boolean indicating subscription status, return a message if the user is subscribed
app.get("/subscription-status", (req, res) => {
let username = req.query.username;
let isSubscribed = req.query.isSubscribed === "true";
res.send(getSubscriptionStatus(username, isSubscribed));
});

// Function to return the final price after discount
function getDiscountedPrice(price, discount) {
return price - (price * (discount / 100));
}
// Endpoint 6: Take a product price and a discount percentage, return the final price after discount
app.get("/discounted-price", (req, res) => {
let price = parseFloat(req.query.price);
let discount = parseFloat(req.query.discount);
res.send(getDiscountedPrice(price, discount).toString());
});

// Function to return a personalized greeting message
function getPersonalizedGreeting(age, gender, name) {

return "Hello, " + name + "! You are a " + age + " year old " + gender + ".";
}
// Endpoint 7: Take a user's age, gender, and name, return a personalized greeting message
app.get("/personalized-greeting", (req, res) => {
let age = parseInt(req.query.age);
let gender = req.query.gender;
let name = req.query.name;
res.send(getPersonalizedGreeting(age, gender, name));
});

// Function to return the final price after applying discount and tax
function getFinalPrice(price, discount, tax) {
let discountedPrice = price - (price * (discount / 100));
return discountedPrice + (discountedPrice * (tax / 100));
}
// Endpoint 8: Take a product price, discount percentage, and tax rate, return the final price after applying discount and tax
app.get("/final-price", (req, res) => {
let price = parseFloat(req.query.price);
let discount = parseFloat(req.query.discount);
let tax = parseFloat(req.query.tax);
res.send(getFinalPrice(price, discount, tax).toString());
});

// Function to return the total exercise time
function getTotalExerciseTime(running, cycling, swimming){
  return running + cycling + swimming;
}
// Endpoint 9: Take exercise times for running, cycling, and swimming, return the total exercise time
app.get("/total-exercise-time",(req,res)=>{
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running,cycling,swimming).toString());
});


app.listen(port,()=>{
  console.log("server is running on http://localhost:" + port);
});