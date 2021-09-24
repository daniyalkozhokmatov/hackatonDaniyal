import { Button, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../contexts/AdminContext';

const EditProduct = () => {
    const { getProductToEdit, productToEdit, saveEditedProduct } = useContext(adminContext)
    const [editautocar, setEditautocar] = useState(productToEdit)
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        setEditautocar(productToEdit)
    }, [productToEdit])
    useEffect(() => {
        getProductToEdit(id)
    }, [])
    const handleInputs = (e) => {
        let obj = {
            ...editautocar,
            [e.target.name]: e.target.value
        }
        setEditautocar(obj)
    }
    return (
        <div>
            {
                editautocar ? (
                    <div className="add-inputs">
                        <form>
                    <TextField value={editautocar.brand} id="standard-basic" label="Бренд" name="brand" onChange={handleInputs} />
                    <TextField value={editautocar.model} id="standard-basic" label="Модель" name="model" onChange={handleInputs} />
                    <TextField value={editautocar.specifications} id="standard-basic" label="Характеристики" name="specifications" onChange={handleInputs} />
                    <TextField value={editautocar.price} id="standard-basic" label="Цена" name="price" onChange={handleInputs} />
                    <TextField type="date" value={editautocar.year} id="standard-basic" label="" name="year" onChange={handleInputs} />
                    <TextField value={editautocar.color} id="standard-basic" label="Цвет" name="color" onChange={handleInputs} />
                    <TextField value={editautocar.photo} id="standard-basic" label="Фото" name="photo" onChange={handleInputs} />
                    <TextField type="number" value={editautocar.weight} id="standard-basic" label="Вес" name="weight" onChange={handleInputs} />
                    <TextField value={editautocar.power} id="standard-basic" label="Мощность" name="power" onChange={handleInputs} />
                    <TextField value={editautocar.volume} id="standard-basic" label="Объем" name="volume" onChange={handleInputs} />
                    <TextField value={editautocar.body} id="standard-basic" label="Кузов" name="body" onChange={handleInputs} />
                    <TextField value={editautocar.country} id="standard-basic" label="Cтрана" name="country" onChange={handleInputs} />
                    
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (
                                !editautocar.brand.trim() || 
                                !editautocar.model.trim() ||
                                !editautocar.specifications.trim() ||
                                !editautocar.price.trim() ||
                                !editautocar.color.trim() ||
                                !editautocar.photo.trim() ||
                                !editautocar.power.trim() ||
                                !editautocar.volume.trim() ||
                                !editautocar.body.trim() ||
                                !editautocar.country.trim() ||
                                !editautocar.weight.trim() ||
                                !editautocar.year.trim()
                                ) {
                                alert("Заполните описание")
                                return
                            }
                                    saveEditedProduct(editautocar)
                                    history.push('/admin')
                                }}
                                variant="outlined"
                                color="primary"
                            >
                                Сохранить изменения ✔︎
                            </Button>
                        </form>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>
    );
};

export default EditProduct;