import './Cart.css';


const Cart = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <h2>The cart is empty</h2>
      : selected.map(course => (
          <div key={course.id}>
            {course.title} 
            {product.meets}
          </div>
        ))
    }
  </div>
);

export default Cart;