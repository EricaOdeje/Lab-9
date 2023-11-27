import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BookItem(props) {
    return (
        <div>
            {/*Since I already installed bootstrap, I imported the card component.*/}
            <Card>
                {/*I used props.mybook.title to pass data from one component to another.*/}
                <Card.Body>{props.mybook.title}</Card.Body>
            </Card>
            <img src={props.mybook.cover}></img>
            <p>{props.mybook.author}</p>
        	
            {/*  This link will edit will change book */}
            <Link to={"/edit/" + props.mybook._id} className='btn btn-primary'>Edit</Link>
            {/*  This link will edit will change book */}
            <Button onClick={(e) => {
                e.preventDefault();
                axios.delete('http://localhost:4000/api/books/' +props.mybook._id)

                //Put comment here
                .then((res) =>{
                    props.reload();
                })
                .catch();

            }}className='btn btn-danger'>Delete</Button>
        </div>
    );

}

export default BookItem;