/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
$(document).ready(() => {

    // init();

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

    $("#search-button").on("click", () => {
        console.log("2 + 2 is 4");
        $(".search-elements").removeClass("is-hidden");
    });


    function displayOneBook(book) {
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

    function displayBooks(book) {
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

    function init() {
        $.get("/api/books", (data) => {
            console.log("hi");
            initializePage(data);
        });
    }

    function initializePage(book) {
        const resultDiv = $(".results");
        resultDiv.empty();

        let numberOfBooks;
        let randomBook;

        if (book.length > 8) {
            numberOfBooks = 8;
        }
        else {
            numberOfBooks = book.length;
        }

        for (let i = 0; i < numberOfBooks; i++) {
            randomBook = Math.floor(Math.random() * book.length);

            if (book[randomBook].cover_link !== null && book[randomBook].cover_link !== "") {
                resultDiv.append("<img src='" + book[randomBook].cover_link + "' alt='book cover'>");
            }
            else {
                resultDiv.append("<img src='https://via.placeholder.com/200'>");
            }

            resultDiv.append("<p>Title: " + book[randomBook].title + "</p>");
            resultDiv.append("<p>Author: " + book[randomBook].author + "</p>");

            if (book.average_rating !== null) {
                resultDiv.append("<p>Rating: " + book[randomBook].average_rating + "</p>");
            }
            else {
                resultDiv.append("<p>Rating: N/A</p>");
            }

            if (book.number_of_pages !== null) {
                resultDiv.append("<p>Number of Pages: " + book[randomBook].number_of_pages + "</p>");
            }
            else {
                resultDiv.append("<p>Number of Pages: Unknown</p>");
            }

        }
    }

    function getAuthor() {

        const author = {
            author: $("#author-input").val()
        };

        $.post("/api/author", author).then(response => {
            console.log(response);
            displayBooks(response);
        });
    }

    function getTitle() {
        $("#title-input").attr("placeholder", "Search by title");
        const title = {
            title: $("#title-input").val()
        };

        $.post("/api/title", title).then(data => {
            displayOneBook(data);
        });
    }
});