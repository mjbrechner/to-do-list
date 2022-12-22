'use strict';
const dailyListBox = document.getElementById("daily-list-box");
let itemNumber = 0;
const textInTextBox = document.getElementById("add-item-text-box");

function addItem() {
    let addingItem = document.createElement("li");
    let addingListText = document.createElement("div");
    let addingXOut = document.createElement("input");

    // Only add item if there is currently text to be added
    if (textInTextBox.value.trim() !== "") {
        itemNumber = itemNumber + 1;
        localStorage.setItem("savedItemNumber", itemNumber);

        dailyListBox.appendChild(addingItem);
        addingItem.setAttribute("id", `item${itemNumber}`);
        addingItem.setAttribute("class", "item");

        addingItem.appendChild(addingListText);
        addingListText.setAttribute("class", "list-text");
        addingListText.value = `Item # ${itemNumber}`;
        addingListText.innerText = textInTextBox.value;

        addingItem.appendChild(addingXOut);
        addingXOut.setAttribute("id", `x-out${itemNumber}`);
        addingXOut.setAttribute("class", "x-out");
        addingXOut.setAttribute("type", "checkbox");
        addingXOut.setAttribute("onclick", "deleteItem()");

        // Update localStorage
        localStorage.setItem("savedList", dailyListBox.innerHTML);
    }

    // Clear textbox contents. This is outside the previous if statement, so that if someone enters blank spaces,
    // those spaces (which cannot be added as an item) will also be refreshed by being cleared up.
    textInTextBox.value = "";

    // Keep focus in that same textbox even after submitting.
    // Without this, focus only remains upon pressing Enter instead of also by clicking the submit button.
    document.getElementById("add-item-text-box").focus();
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
            }

        } else {
            continue;
        }
    }

    // Update localStorage
    localStorage.setItem("savedList", dailyListBox.innerHTML);
}

// When someone enters a new list item
textInTextBox.addEventListener("keypress", (event) => {
    // If user presses "Enter" key
    if (event.key === "Enter") {
        addItem();
    }
});