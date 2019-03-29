import React from 'react';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'></div>
            <img alt='inputimage' src={imageUrl} width='500px' height='auto' />
            <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: bottomRow, left: leftCol }}></div>
        </div>
    );
}

export default FaceRecognition;