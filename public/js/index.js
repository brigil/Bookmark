/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
$(document).ready(() => {

    $("#get-author").on("click", getAuthor);
    $("#get-title").on("click", getTitle);
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


    function displayResult(book) {
        $("#title-input").val("");
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

    function displayResults(book) {
        $("#author-input").val("");
        const resultDiv = $(".results");
        resultDiv.empty();

        for (let i = 0; i < book.length; i++) {
            if (book[i].cover_link !== null && book[i].cover_link !== "") {
                resultDiv.append("<img src='" + book[i].cover_link + "' alt='book cover'>");
            }
            else {
                resultDiv.append("<img src='https://via.placeholder.com/150'>");
            }
            resultDiv.append("<p>Title: " + book[i].title + "</p>");
            resultDiv.append("<p>Author: " + book[i].author + "</p>");
            if (book.average_rating !== null) {
                resultDiv.append("<p>Rating: " + book[i].average_rating + "</p>");
            }
            else {
                resultDiv.append("<p>Rating: N/A</p>");
            }
            resultDiv.append("<p>Number of Pages: " + book[i].number_of_pages + "</p>");
        }

    }

    // function insertBook(book) {
    //     $.post("/api/book", book)
    //         .then(() => {
    //             alert("Book Added!");
    //         });
    // }

    function getAuthor() {

        const author = {
            author: $("#author-input").val()
        };

        $.post("/api/author", author).then(response => {
            console.log(response);
            displayResults(response);
        });
    }

    function getTitle() {
        $("#title-input").attr("placeholder", "Search by title");
        const title = {
            title: $("#title-input").val()
        };

        $.post("/api/title", title).then(data => {
            displayResult(data);
        });
    }
});