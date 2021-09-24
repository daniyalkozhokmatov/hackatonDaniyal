import { TextField, Button } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';
import DateFnsUtils from '@date-io/date-fns'
import 'date-fns'

const AddProduct = () => {
    const [autocar, setautocar] = useState({
        title: "",
        description: "",
        price: "",
        year: "",
        color: "",
        photo: "",
        weight: "",
        brand: ""
    })
    const { createProduct } = useContext(adminContext)
    function handleInputs(e) {
        let newProduct = {
            ...autocar,
            [e.target.name]: e.target.value
        }
        setautocar(newProduct)
    }
    return (
        <div >
            <div className="add-inputs">
                <form className="inpForm" style={{border: "solid 1px grey " }}>
                <TextField value={autocar.brand} id="standard-basic" label="Бренд" name="brand" onChange={handleInputs} />
                    <TextField value={autocar.model} id="standard-basic" label="Модель" name="model" onChange={handleInputs} />
                    <TextField value={autocar.specifications} id="standard-basic" label="Характеристики" name="specifications" onChange={handleInputs} />
                    <TextField value={autocar.price} id="standard-basic" label="Цена" name="price" onChange={handleInputs} />
                    <TextField type="date" value={autocar.year} id="standard-basic" label="" name="year" onChange={handleInputs} />
                    <TextField value={autocar.color} id="standard-basic" label="Цвет" name="color" onChange={handleInputs} />
                    <TextField value={autocar.photo} id="standard-basic" label="Фото" name="photo" onChange={handleInputs} />
                    <TextField type="number" value={autocar.weight} id="standard-basic" label="Вес" name="weight" onChange={handleInputs} />
                    <TextField value={autocar.power} id="standard-basic" label="мощность" name="power" onChange={handleInputs} />
                    <TextField value={autocar.volume} id="standard-basic" label="объем" name="volume" onChange={handleInputs} />
                    <TextField value={autocar.body} id="standard-basic" label="Кузов" name="body" onChange={handleInputs} />
                    <TextField value={autocar.country} id="standard-basic" label="страна" name="country" onChange={handleInputs} />
                    
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (
                                !autocar.brand.trim() ||
                                !autocar.model.trim() ||
                                !autocar.specifications.trim() ||
                                !autocar.price.trim() ||
                                !autocar.color.trim() ||
                                !autocar.photo.trim() ||
                                !autocar.power.trim() ||
                                !autocar.volume.trim() ||
                                !autocar.body.trim() ||
                                !autocar.country.trim() ||
                                !autocar.weight.trim() ||
                                !autocar.year.trim()) {
                                alert("Заполните описание")
                                return
                            }
                            createProduct({
                                brand: autocar.brand.trim(),
                                model: autocar.model.trim(),
                                specifications: autocar.specifications.trim(),
                                price: autocar.price.trim(),
                                color: autocar.color.trim(),
                                photo: autocar.photo.trim(),
                                country: autocar.country.trim(),
                                weight: autocar.weight.trim(),
                                year: autocar.year.trim(),
                                power: autocar.power.trim(),
                                volume: autocar.volume.trim(),
                                body: autocar.body.trim(),
                            })
                        }}
                        variant="outlined"
                        color="secondary"
                    >
                        Создать ✔︎
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;