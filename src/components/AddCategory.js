import React, {useState} from 'react'
import PropTypes from 'prop-types'


function AddCategory ({setCategories} ) {

   
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
       setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        
        e.preventDefault();

        if (inputValue.trim().length>2) {
            //console.log('submit echo')
            //usamos para traer datos de otro componenete " GitExpertApps "
            setCategories(cate => [ inputValue, ...cate]);
            setInputValue('');
        }

    
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
