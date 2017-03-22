/*

- Create an inventory application for a retail store
- Each item in the inventory should be represented by an object, which should store a description of the item, the price of the item, and the number of items in stock
- Users should be able to add an item, delete an item, search for an item, modify the number of items available, and change an item’s description

*/

// Constructor of Item (description, price, inventory number)

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