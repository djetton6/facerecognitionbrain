import React from 'react';

const Rank = () => {
    return (
        <div>
            <p className='f3'>
                {'This Brain will find the faces in pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-purple'>Demo</button>
                </div>
            </div>
        </div>
    );
}

export default Rank;