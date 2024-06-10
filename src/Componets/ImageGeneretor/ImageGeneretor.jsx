import React, { useRef, useState } from 'react';
import './ImageGeneretor.css'

import defaultImage from '../Assets/image.png'

const ImageGeneretor = () => {
const [image , setImage] = useState('/');

let inputRef = useRef(null);

const imageGeneretor = async =>{
    if(inputRef.current.value===''){
        return 0;
    }
    const response = await fetch ()
}


    return (
        <div className='ai-image-gen'>

            <div className='header'> Ai image <span>Generaor</span>  </div>

            <div className="img-loading">
                <div className="image"><img src={image==='/'? defaultImage : image} alt="" /></div>

                <div className="search-box">
                    <input ref={inputRef} type="text" className='search-input' placeholder='What is on you imagination ? ' />

                    <div className="btn">Generete</div>
                </div>
            </div>
          
        </div>
    );
};

export default ImageGeneretor;