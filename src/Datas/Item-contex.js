import React from 'react'
import { useState } from 'react'

const ItemContext = React.createContext({
items: [],
addCart: () => {},
removeCart : () =>{},
clearCart : () => {}
}
    
)

//create a wrapper function for context here also

export const ItemContextProvider = (props) => {
    const [items, setItems] = useState([])
    const onAddCartHandler = (data) => {
        //code
    }
    const onRemoveCartHandler = (data) => {
        //code
    }

    const CartValue = {
        items,
        addCart: onAddCartHandler,
        removeCart: onRemoveCartHandler
    }

    return <ItemContext.Provider value={CartValue}>{props.children}</ItemContext.Provider>
}

export default ItemContext