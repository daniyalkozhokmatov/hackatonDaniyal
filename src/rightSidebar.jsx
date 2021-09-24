import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router-dom"
import { clientContext } from './contexts/ClientContext'
import { Button } from '@material-ui/core';
const LeftSidebar = () => {

    const [brand, setBrand] = React.useState('');

    const history = useHistory()
    const { getProducts, brands, getBrands } = React.useContext(clientContext)

    const filterProducts = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)

        setBrand(search.get("brand"))

        getProducts()
    }

    let search = new URLSearchParams(history.location.search)
    React.useEffect(() => {

        setBrand(search.get("brand"))

        getBrands()
    }, [])

    const resetFilter = () => {

        setBrand('')

        history.push('/')
        getProducts()
    }

    return (
        <>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Бренд</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={brand} onChange={(e) => filterProducts('brand', e.target.value)}>
                        {
                            brands.map(item => (
                                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
                <Button variant="outlined" color="error" onClick={resetFilter}>Сброс</Button>
            </div>
        </>
    );
};
 
export default LeftSidebar;