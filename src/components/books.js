import BookItem from "./bookItem";

//// This is a functional component named Books that displays a list of books using BookItem components

function Books(props){
// Here you can map through the list of books passed via props and create a BookItem component for each book

    return props.myBooks.map(
        (book)=>{
            
            // Here I pass book information to the BookItem component and use 'key' for React rendering optimization
            return <BookItem mybook={book} key={book.isbn}></BookItem>
         }
    );
}

//Here is exported the Books component to make it available for use in other parts of the app
export default Books;
