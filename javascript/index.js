'use strict';
const dailyListBox = document.getElementById("daily-list-box");
let itemNumber = 0;

function addItem() {
    let addingItem = document.createElement("li");
    let addingCheckbox = document.createElement("input");
    let addingListText = document.createElement("div");
    let addingXOut = document.createElement("input");
    // let createCheckbox = document.querySelector;
    itemNumber = itemNumber + 1;

    dailyListBox.appendChild(addingItem);
    addingItem.setAttribute("id", `item${itemNumber}`);
    addingItem.setAttribute("class", "item");

    addingItem.appendChild(addingCheckbox);
    addingCheckbox.setAttribute("id", `checkbox${itemNumber}`);
    addingCheckbox.setAttribute("class", "checkbox");
    addingCheckbox.setAttribute("type", "checkbox");
    addingCheckbox.setAttribute("onclick", "checkTheBox()");

    addingItem.appendChild(addingListText);
    addingListText.setAttribute("class", "list-text");
    addingListText.innerText = `Item # ${itemNumber}`;

    addingItem.appendChild(addingXOut);
    addingXOut.setAttribute("id", `x-out${itemNumber}`);
    addingXOut.setAttribute("class", "x-out");
    addingXOut.setAttribute("type", "checkbox");
    addingXOut.setAttribute("onclick", "deleteItem()");

    // document.getElementById(`item${itemNumber}`).textContent(itemNumber);
}

// Checking/unchecking a list item--START
// function checkTheBox() {
//         let x = document.getElementById(`checkbox${i}`);
//         if (x.checked === true) {
//             console.log("We're checked");
//         } else {
//             console.log("We're NOT checked");
//         }
//     }
// Checking/unchecking a list item--END

// function checkTheBox() {
//     for (let i = 1; i <= itemNumber; i++) {
//         let highlightedCheckbox = document.getElementById(`checkbox${i}`);
//         if (highlightedCheckbox.checked === true) {
//             highlightedCheckbox.style.backgroundColor = "gray";
//             console.log("grey");
//         } else {
//             highlightedCheckbox.style.backgroundColor = "white";
//             console.log("white");
//         }
//     }
// }
function checkTheBox() {

}

const form = document.getElementById("daily-list-box");

form.addEventListener('click', function () {
    let boxesToBeChecked = document.getElementsByClassName("checkbox");
    for (let i = 1; i <= itemNumber; i++) {
        if (document.getElementById(`checkbox${i}`).checked === true) {
            document.getElementById(`item${i}`).style.backgroundColor = "RGB(122, 179, 150)";
        } else {
            document.getElementById(`item${i}`).style.backgroundColor = "white";
        }
    }

    let boxesToBeDeleted = document.getElementsByClassName("x-out");
    for (let i = 1; i <= itemNumber; i++) {
        if (document.getElementById(`x-out${i}`).checked === true) {

            if (confirm("Delete entry?")) {
                document.getElementById(`item${i}`).style.backgroundColor = "red";
            } else {
                document.getElementById(`item${i}`).style.backgroundColor = "yellow";
            }
        } else {
            document.getElementById(`item${i}`).style.backgroundColor = "white";
        }
    }


})

function deleteItem() {
    // if (confirm("Delete entry?")) {
    //     document.getElementsByClassName("x-out").style.backgroundColor = "red";
    // } else {
    //     document.getElementsByClassName("x-out").style.backgroundColor = "yellow";
    // }
}

//Delete entry (This works, but it disables the first event listener when the app is running.)
// form.addEventListener('click', function () {
//     let boxesToBeDeleted = document.getElementsByClassName("x-out");
//     for (let i = 1; i <= itemNumber; i++) {
//         if (document.getElementById(`x-out${i}`).checked === true) {

//             if (confirm("Delete entry?")) {
//                 document.getElementById(`item${i}`).style.backgroundColor = "red";
//             } else {
//                 document.getElementById(`item${i}`).style.backgroundColor = "yellow";
//             }
//         } else {
//             document.getElementById(`item${i}`).style.backgroundColor = "white";
//         }
//     }
// })