
import { useEffect, useState } from "react";
import Book from "./book";
import axios from "axios";

{/* I added axios to our project by npm install axios, axios is a Promise based HTTP client.*/ }

function Read() {
    const [data, setData] = useState([]);
    {/*useEffect is a React Hook that lets you synchronize a component with an external system.*/ }
    useEffect(() => {
        {/* To make a http get call that will return the json data from and assign it to the component state. Use the react hook useState:.*/ }
        axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    setData(response.data);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    }, []);

    
{/* This function reloads data by making another HTTP GET request. */ }
    const ReloadData = (e) =>{
        axios.get('http://localhost:4000/api/books')
        {/* If the request is successful, update the component state with the received data. */ }
        .then(
            (response) => {
                setData(response.data);
            }
        )
        {/*  If there's an error in the HTTP request, log the error to the console. */ }
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }

    return (
        <div>

{/* Rendering the component with a header and passing the book data and reload function to the 'Book' component. */ }
            <h2>Hello from my Read component</h2>
            <Book myBook={data} Reload={ReloadData}></Book>
        </div>

    );
}

export default Read;
