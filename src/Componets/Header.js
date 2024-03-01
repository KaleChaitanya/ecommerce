import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle, FaAngleDown } from "react-icons/fa";
import { BsCart3, BsGift } from "react-icons/bs";

const Header = () => {
    return (
        <header>
            <Link>#MyEcomm</Link>
            <nav>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <FaRegUserCircle />
                <p>Login</p>
                <FaAngleDown />
                <BsCart3 />
                <p>Cart</p>
                <BsGift />
                <p>Become a Seller</p>
            </nav>
        </header>
    )
}

export default Header
