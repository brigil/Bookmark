/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
$(document).ready(() => {

    $("#get-author").on("click", getAuthor);
    $("#get-title").on("click", logHi);
    // $("#make-book").on("click", insertBook({
    //     title: "Christian",
    //     cover_link: null,
    //     author: "Christian",
    //     number_of_pages: "100",
    //     date_published: "2020",
    //     publisher: "Christian",
    //     genre: "Mystery",
    //     description: "the best book ever written"
    // }));
   function logHi () {
       console.log($("#title-input").val());
   }


    function displayResults(book) {

        const resultDiv = $(".results");
        resultDiv.empty();

        if (book.cover_link !== null && book.cover_link !== "") {
            resultDiv.append("<img src='" + book.cover_link + "' alt='book cover'>");
        }
        else {
            resultDiv.append("<img src='https://via.placeholder.com/150'>");
        }
        resultDiv.append("<p>Title: " + book.title + "</p>");
        resultDiv.append("<p>Author: " + book.author + "</p>");
        if (book.average_rating !== null) {
            resultDiv.append("<p>Rating: " + book.average_rating + "</p>");
        }
        else {
            resultDiv.append("<p>Rating: N/A</p>");
        }
        resultDiv.append("<p>Number of Pages: " + book.number_of_pages + "</p>");
    }

    function insertBook(book) {
        $.post("/api/book", book)
            .then(() => {
                alert("Book Added!");
            });
    }

    function getAuthor() {
        $.get("/api/author", data => {
            console.log(data);
        }).then(response => {
            displayResults(response);
        });
    }

    function getTitle() {
        $.get("/api/title", data => {
            console.log(data);
        }).then(response => {
            displayResults(response);
        });
    }



});
