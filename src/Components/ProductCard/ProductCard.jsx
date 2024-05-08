import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSliceThunk } from '../../Store/Reducers/getSlice';
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import style from './ProductCard.module.css'

const ProductCard = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => state.getSlice.products);

    useEffect(() => {
        dispatch(getSliceThunk());
    }, []);

    return (
        <div className={style.cards}>
            {data && data.map((item) =>
                <div className={style.card}>
                    <div className={style.img}>
                        <img src={item.thumbnail} alt="" />
                        <div className={style.hover}>
                            <div className={style.icon}>
                                <div className={style.heart}>
                                    <FaHeart />
                                </div>
                            </div>
                            <div className={style.btn}>
                                <button>CART</button>
                            </div>
                        </div>
                    </div>
                    <h1>{item.title}</h1>
                    <div>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                    <p>${item.price}</p>
                </div>)}
        </div>
    )
}

export default ProductCard
