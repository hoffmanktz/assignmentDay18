/*

- Create an inventory application for a retail store
- Each item in the inventory should be represented by an object, which should store a description of the item, the price of the item, and the number of items in stock
- Users should be able to add an item, delete an item, search for an item, modify the number of items available, and change an item’s description

*/

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
 	exit: "6. Exit Retail Store app"
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