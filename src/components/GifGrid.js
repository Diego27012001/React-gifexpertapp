
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
    
    export const GifGrid = ({ category }) => {


        const {data, loading} = useFetchGifs(category);
        // const [images, setImages] = useState([]);

        // useEffect(() => {
        //     getGifs(category)
        //         .then(setImages);
        // },[category]) // como if, si cambia esa constante, deberia renderizar esa funcion
        
      return (

        <> 
            <h3 className='animate__animated animate__fadeIn'> {category} </h3>
            {loading && <p className='animate__animated animate__flash'>loading</p>}
            <div className='card-grid'> 
            {              
                data.map( img =>(
                       <GifGridItem  
                        key={img.id}
                        {...img}
                       />
                    )) 
                }

            </div>
        </>
            
      )
    }
    