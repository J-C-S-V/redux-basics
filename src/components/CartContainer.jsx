import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartContainer = () => {
  const { cartItems, joder, joder2 } = useSelector((store) => store.cart)
  console.log(cartItems, joder, joder2);


  if(joder2 < 1){
    return <section className="cart">
      <header>
        <h2>your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item => {
          return <CartItem key={item.id} {...item} />
        }))}
      </div>
      <footer>
        <hr />
        <div className="cart-joder">
         <h4>joder<span>${joder}</span></h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer;