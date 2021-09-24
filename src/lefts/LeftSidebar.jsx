import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router-dom"
import { clientContext } from '../contexts/ClientContext'
import { Button } from '@material-ui/core';
const LeftSidebar = () => {
    const [price, setPrice] = React.useState('');
    const [country, setCountry] = React.useState('');
    const history = useHistory()
    const { getProducts, brands, getBrands } = React.useContext(clientContext)

    const filterProducts = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        setPrice(search.get("price_lte"))

        setCountry(search.get("country"))
        getProducts()
    }

    let search = new URLSearchParams(history.location.search)
    React.useEffect(() => {
        setPrice(search.get("price_lte"))

        setCountry(search.get("country"))
        getBrands()
    }, [])

    const resetFilter = () => {
        setPrice('')
                setCountry('')
        history.push('/')
        getProducts()
    }

    return (
        <div className='left-sidebar'>
            <FormControl component="fieldset">
                <FormLabel component="legend">Цена</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={price} onChange={(e) => filterProducts('price_lte', e.target.value)}>
                    <FormControlLabel value="50000" control={<Radio />} label="50000"/>
                    <FormControlLabel value="80000" control={<Radio />} label="80000"/>
                    <FormControlLabel value="100000" control={<Radio />} label="100000"/>
                    <FormControlLabel value="150000" control={<Radio />} label="150000"/>
                    <FormControlLabel value="200000" control={<Radio />} label="200000"/>
                    <FormControlLabel value="250000" control={<Radio />} label="250000"/>
                    
                </RadioGroup>
            </FormControl>
            <div>
                            <Button variant="outlined" color="error" onClick={resetFilter}>Сброс</Button>
                            </div>

            </div>
            

    );
};

export default LeftSidebar;