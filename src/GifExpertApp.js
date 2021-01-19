
// para crear de forma rapida usamos el snipe rafcp

import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

// import PropTypes from 'prop-types'

const GifExpertApp = () => {

  
    const [categories, setCategories] = useState(['One punchs'])

    

    return (
        <>
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={setCategories}/>
           <hr />    

            
            {/* crear listas ordenadas */}
           <ol>
               {
                   categories.map(category => (
                   
                    <GifGrid 
                    
                        key={ category }
                        category ={ category } 
                    
                    />

                   ))
               }
           </ol>

        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp
