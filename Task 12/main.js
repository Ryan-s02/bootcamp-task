let groceryItems = ["Milk", "Bread", "Butter", "Eggs"];

//Creating a function that displays each item in groceryItems in the form of a list within the ul with ID of itemList
function displayItems(){
    // selects the unordered list
    const ul = document.getElementById("itemList");
    //clears the list to prevent duplicates
 
   ul.innerHTML = "";
    //Iterate over each of the items in groceryItems
    groceryItems.forEach((item, index) => {
        //create list items 
        const listItem = document.createElement("li");
        //append the list node to display list item
        listItem.appendChild(document.createTextNode(item));
        
        //Adding a span element for each list item with the delete class
        const span = document.createElement("span");
        //display an 'x'
        span.innerHTML = " \u00D7";
        //assign it the class of delete
        span.className = "delete";
        
        // when span button is clicked ('x'), item will be removed
        //removeItem function is called from on down in the script
        span.addEventListener("click", () => {
                    removeItem(index)
                    console.log(groceryItems)
                });
        
        //append span element to each list item
        listItem.appendChild(span);
        //append unordered list with all of the list tags
        ul.appendChild(listItem);
    });
};

//set 2 items as checked by default
function setDefaultChecked(){
    //select all of the list items
    const itemList = document.querySelectorAll("li");
    
    //use indexing to select the second and third item
    //whenever it has been added to the class list, the CSS will be applied to it
    itemList[1].classList.add("checked");
    itemList[2].classList.add("checked");
}

displayItems();
setDefaultChecked();

//adding a new item to the list
function addItem(){
    // access the new input value
    let newItem = document.getElementById("input").value.trim();

    //checking if the input field is clear
    if(newItem === ""){
        alert("You haven't adding anything to your shopping list")
    }
    //If there is input, push it to the groceryItems array
    else{
        groceryItems.push(newItem);
    }

    //clearing the input field afterwards
    document.getElementById("input").value = "";
    //display the updated list
    displayItems();
}

//function to remove an item from an array, will be used in the deleteItem function 
function removeItem(index){
    //1 from the index selected
    groceryItems.splice(index, 1);
    //display new list
    displayItems();
}

//delete item
function deleteItem(groceryItems){
    //access the delete button
    let deleteBtn = document.getElementsByTagName("span");
    // add an event listener to the delete buttons so that when it is clicked, removeItem is 
    // called with the index selected passed through
    deleteBtn.addEventListener("click", removeItem(groceryItems.index));
    //display updated list
    displayItems();
}

//adding an event listener to HTML elements so that they are checked when clicked
document.getElementById("itemList").addEventListener("click", (event) => {
    // Check if the item's tag name is a list tag
    if (event.target.tagName === "LI") {
      // Toggle the checked class on the clicked element
      event.target.classList.toggle("checked");
    }
  });
  
//adding an event listener to the HTML with the ID of input so that when the enter key is pressed,
// the addItem function is called
const inputBox = document.getElementById("input");
inputBox.addEventListener("keyup", function(event){
    //if the enter key is pressed, call the function
    if(event.key === "Enter"){
        addItem(groceryItems, inputBox.value);
    }
});


