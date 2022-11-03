import Navbar from "./component/Navbar";
import { CartCoontainer } from "./component/CartCoontainer";
import { useDispatch, useSelector } from "react-redux";
import { calculaeTotals, getCartItems } from "./features/cart/cartSlice";
import { store } from "./store";
import { useEffect } from "react";
import { Madal } from "./component/Madal";



function App() {
  const {cartItems , isLoading} = useSelector((store) =>store.cart)
  const {isOpen} = useSelector((store) =>store.model)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(calculaeTotals())
  }, [cartItems])

  useEffect(()=>{
    dispatch(getCartItems())
  }, [])


  if(isLoading){
    return <div className="loaidng">
      <h1>Loading ....</h1>
    </div>
  }


  return <main>
  {
    isOpen &&    <Madal></Madal>
  }
    <Navbar></Navbar>
    <CartCoontainer></CartCoontainer>
  </main>;
}
export default App;
