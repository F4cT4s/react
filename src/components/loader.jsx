import React from 'react'


const Loader = () => {
    return (
        <div className='container'>
            <div className='col-md-12 d-flex justify-content-center'>
                <img src='/logo512.png' className="spinner" role="status" aria-hidden="true" alt='Loading'></img>
            </div>
            <div className='col-md-12 d-flex justify-content-center'>
                <p className='text-info'>Cargando...</p>
            </div>
        </div>
    )}

    

export {Loader}