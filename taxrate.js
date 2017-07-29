
// 1. Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// 2. After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// 3. Finally, check the amount against your bank account balance to see if you can afford it or not.
// 4. You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
// 5. You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
// 6. Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

// <-----KNOWN VARIABLES (now with prompts)------>
const tax_rate = 0.0925;
const accessory_price = 25;
let a = prompt("How much are you willing to spend on a phone? Note there is a $25 setup for every purchase.");
let b = prompt("How much are you comfortable spending at once?");
let c = prompt("How much do you have in your bank account?");
let phone_price = parseInt(a);
let spending_threshold = parseInt(b);
let bankAccountBalance = parseInt(c);
let totalPurchase = 0;

// <------FUNCTIONS------>

// tax calculation function
function calcTax(totalPurchase) {
	totalPurchase = totalPurchase * tax_rate;
	return totalPurchase;
}; 
// final price format to reduce amount of decimal places
function priceFormat() {
	return "$" + totalPurchase.toFixed(2);
};
// for loop to calculate each full purchase cycle
function forLoop() {
	for (let i = 0; i <= bankAccountBalance; i++) {
		// debugger;
		totalPurchase += phone_price + accessory_price;
		if (spending_threshold > totalPurchase) {
	  		true;
	  	}  else {
			break;	
		};
	};
};

// This is a function to run a for loop to run cell phone and accessory purchases until you run out of money in your bank account. I have the debugger set up before the loop so you can see what's happening, step by step, in the dev tools. I think it's right, as it prints a nice message at the end letting you know you don't have enough cash, although I have no idea why I'm getting "undefined" attached to the end of the DOM message. Why would that happen?  

// debugger;
function calcTotalPurchaseUntilBroke() {
	for (let i = totalPurchase; i <= bankAccountBalance; i++) {
		// the forLoop function caluclates the total purchase of phones + accessories, which is 1250 the first time around. 
		forLoop(totalPurchase);
		totalPurchase = totalPurchase + calcTax(totalPurchase);
		// went a little crazy on this next line, probably wont work, but try it? 
		if (totalPurchase > bankAccountBalance && totalPurchase <= bankAccountBalance - totalPurchase) {
			document.write("You can't afford this mf massive phone purchase because your total is " + priceFormat(totalPurchase) + " and you only have " + "$" + bankAccountBalance + " in your bank account");
			break;	
		} else {
		  true;
		  // the above "else" statement is just for my own readability 
		};
	};
};

document.write(calcTotalPurchaseUntilBroke());

