import './Cart.css';
import Card from 'react-bootstrap/Card';

const Cart = ({selected}) => {
    return (
  <div className="cart">
    {
      selected.length === 0
      ? <h2>Nothing selected.</h2>
      : selected.map((course, index)=> (
          <div key={`${course.number}+${index}`}>
           <Card  bg="Light" border="secondary" style={{ width: '15rem', justifyContent: 'center', display: 'flex' }}>
          <Card.Body >
            <Card.Title>{course.term} CS {course.number}</Card.Title>
            <Card.Text>
            {course.title}
            <div></div>
            <small>{course.meets}</small>
            </Card.Text>
          </Card.Body>
      
          
          </Card>
          </div>
          
        ))
    }
  </div>
);};

export default Cart;