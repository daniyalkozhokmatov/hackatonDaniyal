import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { adminContext } from '../contexts/AdminContext'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { clientContext } from '../contexts/ClientContext';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        
    },
});

export default function CartTable() {
    const classes = useStyles();
    const { cart, getCart, changeCountProducts } = useContext(clientContext)
    useEffect(() => {
        getCart()
    }, [])
    console.log(cart)
    function handleChange(id, count) {
        if (count < 1) {
            return
        }
        changeCountProducts(count, id)
    }
    return (
        <>
            {
                cart ? (
                    <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="caption table">
                            <caption>A basic table example with a caption</caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>№</TableCell>
                                    <TableCell aling="left">Бренд</TableCell>
                                    <TableCell align="left">Модель</TableCell>
                                    <TableCell align="left">Характеристики⚙️</TableCell>
                                    <TableCell align="left">Цена💵</TableCell>
                                    <TableCell align="left">Год</TableCell>
                                    <TableCell align="left">Фото</TableCell>
                                    <TableCell aling="left">Мощность🐎</TableCell>
                                    <TableCell aling="left">Объем</TableCell>
                                    <TableCell aling="left">Кузов</TableCell>
                                    <TableCell aling="left">Страна</TableCell>
                                    <TableCell aling="left">Вес</TableCell>
                                    <TableCell align="left">Цвет</TableCell>
                                    <TableCell align="left">Кол-во</TableCell>
                                    <TableCell align="left">Сумма</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.products.map((row, index) => (
                                    <TableRow key={row.product.name}>
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="left">{row.product.brand}</TableCell>
                                        <TableCell align="left">{row.product.model}</TableCell>
                                        <TableCell align="left">{row.product.specifications}</TableCell>
                                        <TableCell align="left">{row.product.price}</TableCell>
                                        <TableCell align="left">{row.product.year}</TableCell>
                                        <TableCell align="left">
                                            <img width="200" height="150" src={row.product.photo} alt="" />
                                        </TableCell>
                                        <TableCell align="left">{row.product.power}</TableCell>
                                        <TableCell align="left">{row.product.volume}</TableCell>
                                        <TableCell align="left">{row.product.body}</TableCell>
                                        <TableCell align="left">{row.product.country}</TableCell>
                                        <TableCell align="left">{row.product.weight}</TableCell>
                                        <TableCell align="left">{row.product.color}</TableCell>
                                        <TableCell align="left">
                                            <input
                                                type="number"
                                                value={row.count}
                                                onChange={(e) => handleChange(row.product.id, e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell align="left">{row.subPrice}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <h2>Заполните корзинку </h2>
                )
            }
        </>
    );
}
