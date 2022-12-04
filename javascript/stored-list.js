'use strict';

function loadStorage() {
    let saved = localStorage.getItem("savedList");

    if (saved) {
        itemNumber = localStorage.getItem("savedItemNumber");
        dailyListBox.innerHTML = saved;
        console.log(itemNumber);
    }
};