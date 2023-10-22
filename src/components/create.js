import { useState } from "react";

function Create() {
    // This is my variables for storing book information
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    
    // This is the function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // This is where I log the book information to the console
        console.log("Title: " + title +
        " Cover: " + cover +
        " Author: " + author);
    }
    
    return (
        <div>
            <h2>This is my Create Component</h2>
            /* This is my book creation form */
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    /* This is my input field for book title */
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Cover: </label>
                    /* This is my Input field for book cover */
                    <input
                        type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Author: </label>
                    /* This is my input field for book author */
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div>
                    /* This is the submit button to create the book */
                    <input
                        type="submit"
                        value="Create Book"
                    />
                </div>
            </form>
        </div>
    );
}

export default Create;
