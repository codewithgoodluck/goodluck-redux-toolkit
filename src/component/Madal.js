import React from 'react'
import { clearCart } from '../features/cart/cartSlice'
import { closedModal } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux'

export const Madal = () => {
const dispatch = useDispatch()
  return (
<aside className='modal-container'>
    <div className="modal">
        <h4>remove all items from your shopping cart ?</h4>
        <div className="btn-container">
            <button type='button' className='btn confirm-btn' onClick={()=>{
                dispatch(clearCart());
                dispatch(closedModal())
            }}>
                confirm
            </button>
            <button type='buttin' className='btn clear-btn' onClick={()=>{
                dispatch(closedModal())
            }}>
                cancel

            </button>
        </div>

    </div>

</aside>
  )
}
