import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {
    // These are the variables to store the data fetched from the API
    const [data, setData] = useState([]);

    // useEffect is a React Hook that lets you synchronize a component with an external system.
    useEffect(() => {
        // This is where it fetches book data from an external API using Axios
        axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
            .then(
                (response) => {
                    // This is where it updates the data state with the fetched books data
                    setData(response.data.books);
                }
            )
            .catch(
                (error) => {
                    // This is where it handles any errors that occur during the API request
                    console.log(error);
                }
            );
    }, []); // The empty dependency array ensures this effect runs once after the component mounts

    return (
        <div>
            <h2>Hello from my Read Component</h2>
            /* This is where it renders the Books component and pass the fetched data */
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;
