//This is a functional component named BookItem that displays book information.
import Card from 'react-bootstrap/Card';

function BookItem(props){
// Here it receives book information via props and displays it
return(
    <div>

  
<Card>
      <Card.Header>{props.mybook.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <img src = {props.mybook.thumbnailUrl}></img>
          <footer>
            {props.mybook.authors[0]}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
);
}
//// Here I exported the BookItem component to make it available for use in other parts of the app
export default BookItem;
