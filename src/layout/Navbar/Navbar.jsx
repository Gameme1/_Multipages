import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const initPage = 'Home'
function Navbar({ products, carts, setToken }) {
    const [tab, setTab] = useState('')

    useEffect(() => {
        setTab(initPage)
    }, [])

    const homeRef = useRef()
    const todoRef = useRef()
    const productRef = useRef()
    const cartRef = useRef()

    useEffect(() => {
        if (tab === 'Todo') todoRef.current.click()
        else if (tab === 'Product') productRef.current.click()
        else if (tab === 'Cart') cartRef.current.click()
        else homeRef.current.click()
    }, [tab])


    return (
        <div className='navbar-contrainer'>
            <Link to={'/'}></Link>
            <Link to={'/Home'}>
                <button className={'btn ' + (tab === 'Home' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('Home')} ref={homeRef}>Home</button>
            </Link>
            <Link to={'/Todo'}>
                <button className={'btn ' + (tab === 'Todo' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('Todo')} ref={todoRef}>Todo</button>
            </Link>
            <Link to={'/Product'}>
                <button className={'btn ' + (tab === 'Product' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('Product')} ref={productRef}>Product({products.length})</button>
            </Link>
            <Link to={'/Cart'}>
                <button className={'position-relative btn ' + (tab === 'Cart' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('Cart')} ref={cartRef}>Cart
                    {carts.length > 0 && (
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {carts.length < 10 ? carts.length : '9+'}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    )}
                </button>
            </Link>
            <Link>
            <button className='btn btn-outline-danger' style={{marginLeft: '1rem'}} onClick={() => {setToken('')}}>Log out</button>
            </Link>
        </div>
    );
}

export default Navbar;