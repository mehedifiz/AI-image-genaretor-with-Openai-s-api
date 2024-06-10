import React from 'react';
import './ImageGeneretor.css'

import defaultImage from '../Assets/image.png'

const ImageGeneretor = () => {
    return (
        <div className='ai-image-gen'>

            <div className='header'> Ai image <span>Generaor</span>  </div>

            <div className="img-loading">
                <div className="image"><img src={defaultImage} alt="" /></div>
            </div>
          
        </div>
    );
};

export default ImageGeneretor;