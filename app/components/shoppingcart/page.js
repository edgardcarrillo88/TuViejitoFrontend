'use client'
import { useAppContext } from '../statecart/page'
import styles from './page.module.css'


export default function shoppingcart() {

    const cart = useAppContext()

    function handleCloseCart() {
        cart.CloseCart()
    }

    return (
        <>
            <div className={styles.main} style={{ display: cart.isOpen ? "block" : "none" }}>

                <button onClick={handleCloseCart}>X</button>
                <div>
                    <div>El carrito esta vacio</div>
                </div>
                <div>
                    <h1>Acá estan tus productos</h1>
                    {
                        cart.items.map((item) => (
                            <div className={styles.products} key={item.item}>
                                <div>{item.item}</div>
                                <div>{item.qty}</div>
                            </div>
                        )
                        )
                    }
                </div>

            </div>
        </>
    )
};
