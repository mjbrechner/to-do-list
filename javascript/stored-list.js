'use strict';

function loadStorage() {
    let saved = localStorage.getItem("savedList");

    // If any list items have been saved, load them up and set itemNumber to start after the number of the last item.
    if (saved) {
        itemNumber = parseInt(localStorage.getItem("savedItemNumber"));
        dailyListBox.innerHTML = saved;
        console.log(itemNumber);
    }

    // If there have been saved items in the past but nothing currently exists (i.e., any created
    // items have since been deleted, leaving a string with blank spaces), reset itemNumber
    // to 0 so that the number doesn't grow unwieldy length.
    if (saved.trim() === "") {
        console.log("nothing there");
        itemNumber = 0;
    }
};