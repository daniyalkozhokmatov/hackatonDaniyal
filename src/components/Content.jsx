import React, { useContext, useEffect } from 'react';
import { clientContext } from '../contexts/ClientContext';
import MediaCard from './Card';
import PPagination from './PPagination';
import '../index.css'
// import { Spinner } from 'react-bootstrap';

const Content = () => {
    const { products, getProducts, currentPosts } = useContext(clientContext)
    useEffect(() => {
        getProducts()
    }, [])
    console.log(products)
    return (
        <>
            {
                products ? (
                    <div className="content">
                        <div className="content-block">
                            {
                                currentPosts.map(item => (
                                    <MediaCard item={item} key={item.id} />
                                ))
                            }
                        </div>
                        <PPagination />
                        <div>
                        <img className="kot" width="1100" height="700" src="https://motor.ru/imgs/2020/08/26/08/4070892/455ea179133ea726d943dce90879b0de4012ff40.jpg"></img> <br />
                         <b className="Range" >Range Rover Evoque</b> <br /> <span className="Comp"> стал дизельным гибридом Цены стартуют с 32 100 фунтов стерлингов</span>
                        <span className="Comp" >Компания Land Rover рассекретила кроссовер Evoque 2021 модельного года. Среди новшеств – «умеренно»-гибридные силовые установки на базе дизельного двигателя Ingenium, новая мультимедийная система и роскошная комплектация Autobiorgraphy</span>
                        </div>
                    </div>
                ) : (
                    <h2>  Loading...</h2>
                )
            }
        </>
    );
};

export default Content;