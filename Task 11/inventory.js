function Shoes (name, productCode, quantity, valuePerItem){
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
}

let shoe1 = new Shoes("Nike Air Max 90", 4728, 7, 120);
let shoe2 = new Shoes("Adidas Samba", 2719, 3, 90);
let shoe3 = new Shoes("New Balance 2002R", 1385, 6, 100);
let shoe4 = new Shoes("Hoka Bondi 8", 7302, 2, 130);
let shoe5 = new Shoes("Nike Air Force 1", 5032, 9, 110);

let inventory = [];

inventory.push(shoe1, shoe2, shoe3, shoe4, shoe5);

console.log(inventory);

// let shoeToSearch = prompt('what shoe would you like to search for?');

//function to search for any shoe within the array
function searchShoes(shoeToSearch){
    for(let shoe of inventory){
        if(shoe.name === shoeToSearch){
            return shoe;
        }
    }
}
console.table(searchShoes("New Balance 2002R"))

//function to search for the show with the lowest valuePerItem
function lowestValuePerItemShoe(inventory){
    inventory.sort((a, b) =>a.valuePerItem - b.valuePerItem );

    return inventory[0];
};

console.table(lowestValuePerItemShoe(inventory));

//function to search for the show with the highest valuePerItem
function highestValuePerItemShoe(inventory){
    inventory.sort((a, b) =>a.valuePerItem - b.valuePerItem );

    return inventory[inventory.length - 1];
};

console.table(highestValuePerItemShoe(inventory));

//function to edit all four properties for each of the five shoe instances
// got stuck on this one, wasnt really sure what the ask of the question was, hopefully this is correct 
// had to use AI to help and took me a while just to understand how to start but once i got going i was okay
function editAllShoes(inventory, names, productCodes, quantities, valuesPerItem){
    inventory.forEach((shoe, index)=> {
        
        shoe.name = names[index];
        shoe.productCode = productCodes[index];
        shoe.quantity = quantities[index];
        shoe.valuePerItem = valuesPerItem[index];
    });
}

let newNames = ["Crocs", "Doc Martens", "Birkenstocks", "Nike Dunk Low", "Converse All Stars"]
let newProductCodes = [1, 2, 3, 4, 5];
let newQuantities = [5, 2, 5, 9, 6];
let newValuesPerItem = [50, 180, 70, 100, 80];

editAllShoes(inventory, newNames, newProductCodes, newQuantities, newValuesPerItem);
console.table(inventory);

//function that orders all the objects in ascending order based on valuePerItem
//took this line of code from the lowestValuePerItem function and it seems to do the trick
//is this an example of reusable code?
inventory.sort((a, b) =>a.valuePerItem - b.valuePerItem );
console.table(inventory)
