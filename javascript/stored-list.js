'use strict';

function loadStorage() {
    let saved = localStorage.getItem("savedList");

    // If any list items have been saved, load them up and set itemNumber to start after the number of the last item.
    if (saved) {
        // This itemNumber equals the total amount of items ever created, including deletions.
        itemNumber = parseInt(localStorage.getItem("savedItemNumber"));
        dailyListBox.innerHTML = saved;
    }

    // If there have been saved items in the past but nothing currently exists (i.e., any created
    // items have since been deleted, leaving a string with blank spaces), reset itemNumber
    // to 0 so that the number doesn't grow unwieldy length.
    if (saved.trim() === "") { // In other words, nothing there at all
        itemNumber = 0;
    }
};