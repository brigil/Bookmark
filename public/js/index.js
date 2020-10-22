/* eslint-disable indent */
/* eslint-disable prettier/prettier */
$(document).ready(() => {
    const textEl = $("#text");
    $.get("/api/index", data => {
        console.log("calling");
        textEl.text(data);
    });
});
