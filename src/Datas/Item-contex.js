import React from 'react'

const ItemContext = React.createContext(
    [{
        item: 'Sashi',
        price: 25,
        about: 'Finest fish and veggie',
        type: 'Non-veg'
    },
    {
        item: 'Schnitzel',
        price: 16.50,
        about: 'A german speciality!',
        type: 'veg'
    },
    {
        item: 'Barbeque Burger',
        price: 19.99,
        about: 'American, raw, meaty',
        type: 'Non-veg'
    },
    {
        item: 'Green Bowl',
        price: 18.99,
        about: 'Healthy..and..greeny',
        type: 'veg'
    }
]
)

export default ItemContext