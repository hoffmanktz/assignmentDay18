/*

- Create an inventory application for a retail store
- Each item in the inventory should be represented by an object, which should store a description of the item, the price of the item, and the number of items in stock
- Users should be able to add an item, delete an item, search for an item, modify the number of items available, and change an item’s description

*/

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

// run the program
run = function() {
  var zooAnimal1 = new zooAnimal("lion","male", "40");
  var zooAnimal2 = new zooAnimal("capybara","female", "70");
  var zooAnimal3 = new zooAnimal("tiger","male", "30");
  var zooAnimal4 = new zooAnimal("elephant","female", "20");
  var zooAnimal5 = new zooAnimal("zebra","male", "10");
  var zooAnimal6 = new zooAnimal("penguin","female", "50");
  var zooAnimal7 = new zooAnimal("monkey","male", "60");
  var zooAnimal8 = new zooAnimal("giraffe","female", "70");
  var zooAnimal9 = new zooAnimal("panda","male", "30");
  var zooAnimal10 = new zooAnimal("hippo","female", "80");
  zooAnimalCollection.push(zooAnimal1);
  zooAnimalCollection.push(zooAnimal2);
  zooAnimalCollection.push(zooAnimal3);
  zooAnimalCollection.push(zooAnimal4);
  zooAnimalCollection.push(zooAnimal5);
  zooAnimalCollection.push(zooAnimal6);
  zooAnimalCollection.push(zooAnimal7);
  zooAnimalCollection.push(zooAnimal8);
  zooAnimalCollection.push(zooAnimal9);
  zooAnimalCollection.push(zooAnimal10);
  myZooInfo();
  myZoo();

}();



printMenu();










