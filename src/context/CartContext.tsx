import { createContext, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";

interface CartItem {
    id: number;
    quantity: number
}

type CartContextType = {
    getItemQuantity: (id:number) => number;
    addItemToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    removeAllCart: (id: number) => void;
    cartQuantity: number
    cartItems: CartItem[]
}

const CartContext = createContext({} as CartContextType)

type ProviderProps = {
    children: React.ReactElement | React.ReactNode
}

export default function CartProvider({children}: ProviderProps) {
    const [cartItems, setCartItems] = useLocalStorageState<CartItem[]>("cart", {
        defaultValue: []
    })

    function getItemQuantity(productId: number) {
        return cartItems.find(item => item.id === productId)?.quantity || 0
    }

    function addItemToCart(productId: number) {
        setCartItems(currItem => {
            if (currItem.find(item => item.id === productId) == null) {
                return [...currItem, {id: productId, quantity: 1}]
            } else {
                return currItem.map(item => {
                    if (item.id === productId) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(productId: number) {
        setCartItems(currItem => {
            if (currItem.find(item => item.id === productId)?.quantity === 1) {
                return currItem.filter(item => item.id !== productId)
            } else {
                return currItem.map(item => {
                    if (item.id === productId) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeAllCart(productId: number) {
        setCartItems(currItem => {
            return currItem.filter(item => item.id !== productId)
        })
    }

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const contextValue = {
        getItemQuantity,
        addItemToCart,
        removeFromCart,
        removeAllCart,
        cartQuantity,
        cartItems
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

//custom hook 
export function UseCartContext() {
    return useContext(CartContext)
}