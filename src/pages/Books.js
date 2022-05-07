import React from "react";
import BookList from "../components/BookList";
import InputBook from "../components/InputBook";

function Books() {
    const books = [
        {
            id: 1,
            title: "Brownian Motion",
            author: "Suzanne Bleni"
        },
        {
            id: 2,
            title: "Fluid Simulation",
            author: "Deflauti Vue"
        }
    ];

    return (<div>
                <BookList books={books}/>
                <InputBook  />
            </div>);

}

export default Books;