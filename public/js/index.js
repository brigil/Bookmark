$(document).ready(function () {

    const textEl = $("#text");

    $.get("/api/index", data => {
        console.log("calling")
        textEl.text(data);
    })



})
