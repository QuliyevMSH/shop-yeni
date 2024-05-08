import React from 'react'
import style from './Header.module.css'
import title from '../../assets/Images/logo (2).png'
import { FaHeart } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { SlEnvolope } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

const Header = () => {

    const navigation = useNavigate();

    const goToRegister = () => {
        navigation("/register")
    }

    const goToHome = () => {
        navigation("/")
    }

    return (
        <header>
            <div className={style.top}>
                <div className={style.container}>
                    <div className={style.title}>
                        <img src={title} alt="title" />
                    </div>
                    <div className={style.search}>
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">Bags</option>
                            <option value="">Booking</option>
                            <option value="">Clothing</option>
                            <option value="">Men</option>
                            <option value="">Music</option>
                            <option value="">Posters</option>
                            <option value="">Shoes</option>
                            <option value="">Post</option>
                        </select>
                        <div className={style.inputs}>
                            <input type="text" placeholder='Search...' />
                            <div className={style.searchButton}><CiSearch /></div>
                        </div>
                        
                    </div>
                    <div className={style.icon}>
                        <div className={style.heart}>
                            <FaHeart />
                        </div>
                        <div className={style.heart}>
                            <IoPerson />
                        </div>
                        <div className={style.heart}>
                            <FaCartShopping />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.container}>
                    <nav>
                        <ul>
                            <li>
                                <a href="">Demos</a>
                            </li>
                            <li>
                                <a href="">Features</a>
                            </li>
                            <li>
                                <a href="">Shop</a>
                            </li>
                            <li>
                                <a href="">Pages</a>
                            </li>
                            <li>
                                <a href="" onClick={goToHome}>Home</a>
                            </li>
                            <li>
                                <a href="" onClick={goToRegister}>Post</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={style.contact}>
                        <div className={style.icons}>
                            <SlEnvolope />
                            <p>Contact</p>
                        </div>
                        <div className={style.icons}>
                            <FaRegClock />
                            <p>08:00 - 17:00</p>
                        </div>
                        <div className={style.icons}>
                            <FaPhoneAlt />
                            <p>+47 900 99 000</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
