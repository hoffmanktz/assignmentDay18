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

 var inventoryMenu = {
 	modify: "1. Modify Stock level for this item",
 	change: "2. Change the item description"
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
	var description = sget("Please add a description of the item you're adding:").trim();
	var price = sget("What is the price of this item:").trim();
	var stockLevel = sget("How many of this item are you adding:").trim();
	var newInventoryItems = new inventoryItems(description, price, stockLevel);

	inventoryArray.push(newInventoryItems);
	console.log(inventoryArray);
	returnToMain();
	store();
};

// Delete Item
var deleteItem = function () {
	var userSelect = sget("Which item would you like to remove").trim();
	userSelect = userSelect.toLowerCase();

	for (var i = 0; i < inventoryArray.length; i++) {
		if ((inventoryArray[i].description == userSelect) || (inventoryArray[i].price == userSelect)) {
			inventoryArray.splice(i, 1);
			break;
		}

		if (i == inventoryArray.length-1) {
			console.log("Item not found.");
		}
	}
	console.log(inventoryArray);
	returnToMain();
	store();
};

// Search for an Item
var search = function () {

	var searchItems = sget("\nWhat item are you looking for?").trim();
	searchItems = searchItems.toLowerCase();

	var matchingItems = [];
	
	inventoryArray.forEach(function(currentItem) {

		if (searchItems == currentItem.description || searchItems == currentItem.price) {
			matchingItems.push(currentItem);
		} 
		
	});

	console.log(matchingItems);
	returnToMain();
	store();
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


store();

// printMenu();










