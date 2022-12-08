'use strict';
const dailyListBox = document.getElementById("daily-list-box");

let itemNumber = 0;

const textInTextBox = document.getElementById("add-item-text-box");


function addItem() {
    let addingItem = document.createElement("li");
    let addingCheckbox = document.createElement("input");
    let addingListText = document.createElement("div");
    let addingXOut = document.createElement("input");

    // console.log(`item number ${itemNumber}`);
    // if (parseInt(localStorage.getItem("savedItemNumber")) > 0) {
    //     itemNumber = parseInt(localStorage.getItem("savedItemNumber"));
    //     console.log(`saved item number ` + localStorage.getItem("savedItemNumber"));
    //     console.log(itemNumber);
    // } else {
    //     itemNumber = 0;
    // }

    itemNumber = itemNumber + 1;
    localStorage.setItem("savedItemNumber", itemNumber);

    dailyListBox.appendChild(addingItem);
    addingItem.setAttribute("id", `item${itemNumber}`);
    addingItem.setAttribute("class", "item");

    // addingItem.appendChild(addingCheckbox);
    // addingCheckbox.setAttribute("id", `checkbox${itemNumber}`);
    // addingCheckbox.setAttribute("class", "checkbox");
    // addingCheckbox.setAttribute("type", "checkbox");
    // addingCheckbox.setAttribute("onclick", "checkTheBox()");

    addingItem.appendChild(addingListText);
    addingListText.setAttribute("class", "list-text");
    addingListText.value = `Item # ${itemNumber}`;
    addingListText.innerText = textInTextBox.value;
    // addingListText.innerText = addingListText.value;

    addingItem.appendChild(addingXOut);
    addingXOut.setAttribute("id", `x-out${itemNumber}`);
    addingXOut.setAttribute("class", "x-out");
    addingXOut.setAttribute("type", "checkbox");
    addingXOut.setAttribute("onclick", "deleteItem()");

    // Update localStorage
    localStorage.setItem("savedList", dailyListBox.innerHTML);
}


function checkTheBox() {
    for (let x = 1; x <= itemNumber; x++) {

        // Check to make sure item wasn't previously deleted.
        if (document.getElementById(`x-out${x}`)) {

            // If item still exists, then check it off.

            if (document.getElementById(`checkbox${x}`).checked === true) {
                document.getElementById(`item${x}`).style.backgroundColor = "RGB(122, 179, 150)";
            } else {
                document.getElementById(`item${x}`).style.backgroundColor = "white";
            }

        } else {
            continue;
        }
    }

    // Update localStorage
    localStorage.setItem("savedList", dailyListBox.innerHTML);
}


function deleteItem() {
    for (let x = 1; x <= itemNumber; x++) {

        // Check to make sure item wasn't previously deleted.
        if (document.getElementById(`x-out${x}`)) {

            // If item still exists, then delete it if it is checked.
            if (document.getElementById(`x-out${x}`).checked === true) {
                document.getElementById(`item${x}`).remove();
                //     if (confirm("Delete entry?")) {
                //         document.getElementById(`item${x}`).remove();
                //     } else {
                //         document.getElementById(`item${x}`).style.backgroundColor = "yellow";
                //     }
                // } else {
                //     document.getElementById(`item${x}`).style.backgroundColor = "white";
            }

        } else {
            continue;
        }
        // checkTheBox();
    }

    // Update localStorage
    localStorage.setItem("savedList", dailyListBox.innerHTML);
}

// When someone enters a new list item
textInTextBox.addEventListener("keypress", (event) => {
    // If user presses "Enter" key
    if (event.key === "Enter") {

        if (textInTextBox.value !== "") {
            addItem();
            textInTextBox.value = "";
        } else {
            preventDefault();
        }

    }
});