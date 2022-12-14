import React from 'react';

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {cartState, shippingState} from '../Recoil/atoms';


const Cart = () => {

     const [cartItems, setCartItems] = useRecoilState(cartState);
     const [shippingMethods, setShippigMethod] = useRecoilState(shippingState);

    return(
        <div>
            <strong>Cart</strong>
            {cartItems && cartItems.length > 0 && cartItems.map((item, key) => {
                return <ul key={key}>{item.name} * {item.quantity || 1} = {item.price * item.quantity || 1} </ul>
            })}


            <div className='shipping-methods'>
                {shippingMethods && shippingMethods.map((method, key) => {
                    return <div key={key} onClick={() => {

                        const oldMethods = [...shippingMethods];

                        oldMethods.map((val, index) => {
                            if(key == index){
                                oldMethods[index] = {...oldMethods[index], selected: !oldMethods[index].selected};

                            }else{
                                 oldMethods[index] = {...oldMethods[index], selected: false};
                            }
                        })
                        // oldMethods[key] = {...oldMethods[key], selected: true};
                        setShippigMethod(oldMethods)


                    }} className='shipping-method' style={method.selected ? {backgroundColor:"red"}: {}}>
                        {method.name} - {method.price}
                    </div>
                })}
            </div>
            
        </div>
    )
}

export default Cart;