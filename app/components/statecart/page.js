'use client'
import { createContext, useContext, useState } from "react"

const AppContext = createContext({
    isOpen: true,
    items: [],
    openCart: () => { },
    CloseCart: () => { },
    addItemtoCart: (item) => { },
    RemoveItemtoCart: (item) => { },
    getNumberOfItems: () => { }
})

export default function statecart({ children }) {


    const [isOpen, SetIsOpen] = useState(false)
    const [items, Setitems] = useState([])

    function handleOpenCart() {
        SetIsOpen(true)
    }

    function handleCloseCart() {
        SetIsOpen(false)
    }

    function handleAddItemToCart(item, Cant) {
        const temporal = [...items];
        const foundIndex = temporal.findIndex((product) => product.id === item.id);

        if (foundIndex !== -1) {
            const found = temporal[foundIndex];
            found.qty += parseInt(Cant);
            temporal[foundIndex] = found;
        } else {
            const newItem = {
                item: item,
                qty: parseInt(Cant)
            };
            temporal.push(newItem);
        }
        Setitems([...temporal]);
    }




    function handleRemoveItemFromCart(item) {
        const temporal = [...items];
        const index = temporal.findIndex((product) => product.id === item.id);
        if (index !== -1) {
            const found = temporal[index];
            if (found.qty > 1) {
                found.qty--;
            } else {
                temporal.splice(index, 1);
            }
            SetItems([...temporal]);
        }
    }

    function handleNumbrOfItems() {
        const total = items.reduce((acc, item) => acc + item.qty, 0)

        return (
            total
        )
    }



    return (
        <AppContext.Provider value={{
            isOpen: isOpen,
            items: items,
            openCart: handleOpenCart,
            CloseCart: handleCloseCart,
            addItemtoCart: handleAddItemToCart,
            RemoveItemtoCart: handleRemoveItemFromCart,
            getNumberOfItems: handleNumbrOfItems
        }}>{children}</AppContext.Provider>
    )
};


export function useAppContext() {
    return (
        useContext(AppContext)
    )
};
