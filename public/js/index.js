/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
$(document).ready(() => {

    $("#get-author").on("click", getAuthor);
    $("#get-title").on("click", getTitle);
    $("#make-book").on("click", insertBook({
        title: "Christian",
        cover_link: null,
        author: "Christian",
        number_of_pages: "100",
        date_published: "2020",
        publisher: "Christian",
        genre: "Mystery",
        description: "the best book ever written"
    }));

    function insertBook(book) {
        $.post("/api/book", book)
            .then(() => {
                alert("Book Added!");
            });
    }

    function getAuthor() {
        $.get("/api/title", data => {
            console.log(data);
        });
    }

    function getTitle() {
        $.get("/api/author", data => {
            console.log(data);
        });
    }

    

});
