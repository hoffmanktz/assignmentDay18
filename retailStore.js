/*

- Create an inventory application for a retail store
- Each item in the inventory should be represented by an object, which should store a description of the item, the price of the item, and the number of items in stock
- Users should be able to add an item, delete an item, search for an item, modify the number of items available, and change an item’s description

*/
var sget = require("sget");

var inventoryArray = [];

// Constructor of Item (description, price, stock)
var inventoryItems = function(description, price, stockLevel) {
	this.description = description;
	this.price = price;
	this.stockLevel = stockLevel;
};

//****************** MENUS ********************

// Main menu screen
 var mainMenu = {
 	welcome: "Welcome to the retail store!\n",
 	add: "1. Add an item",
 	delete: "2. Delete an item",
 	search: "3. Search for an item",
 	modify: "4. Modify stock level of an item",
 	change: "5. Change item description",
 	exit: "6. Exit Retail Store app\n"
 };

//************** MENU PROMPTS ******************

// Prints the Welcome to game Menu
var printMenu = function() {
	sleep(800);
	wipeScreen();
    for (var key in mainMenu) {
      console.log(mainMenu[key]);
    }
};



// Add an item
var addItem = function () {

};

// Delete Item
var deleteItem = function () {

};

// Search for an Item
var search = function () {

};

// Modify the number of items available
var modifyItemInventory = function () {

};

// Change item description
var changeItemDescription = function () {

};

// Exit Program function
var exit = function () {
	console.log("Goodbye!");
	sleep(800);
	process.exit();
};

//----------------HELPFUL TOOLS---------------------------

// Return to main menu prompt function
var returnToMain = function () {
	var returnToMain = sget("\nPress enter to return to main menu..").trim();
};

//clean screen
var wipeScreen = function () {
  return process.stdout.write('\033c');
};

//sleep timer
var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
};

//-------------------------------------------------------

var store = function () {
	sleep(200);
	wipeScreen();
	printMenu();
	var userSelect = sget("What would you like to do?\n").trim();
	userSelect = userSelect.toLowerCase();

		if(userSelect == 1) {
        	addItem();
        } else if(userSelect == 2) {
        	deleteItem();
        } else if(userSelect == 3) {
        	search();
        } else if(userSelect == 4) {
            modifyItemInventory();
        } else if(userSelect == 5) {
            changeItemDescription();
        } else if(userSelect == 6) {
            exit();
        } else {
            console.log("Invalid Selection. Please try again.");
            store();
        }
};


// run the program
// run = function() {
//   var inventoryItems1 = new inventoryItems("Blue T-shirt","40", "10");
//   var inventoryItems2 = new inventoryItems("Purple Jeans","60", "8");
//   var inventoryItems3 = new inventoryItems("Yellow Sweater","30", "5");
//   inventoryArray.push(inventoryItems1);
//   inventoryArray.push(inventoryItems2);
//   inventoryArray.push(inventoryItems3);

//   // store();

// }();

store();

// printMenu();










