import React from "react"

export const Error404 = () => {
    return (
        <div className="py-5 bg-danger text-white">
            <h1 className="d-flex justify-content-center m-4 p-5">ERROR 404</h1>
            <div className="d-flex justify-content-center m-5 p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="255" fill="currentColor" class="bi bi-lightbulb-off-fill" viewBox="0 0 16 16">
                    <path d="M2 6c0-.572.08-1.125.23-1.65l8.558 8.559A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm10.303 4.181L3.818 1.697a6 6 0 0 1 8.484 8.484zM5 14.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5zM2.354 1.646a.5.5 0 1 0-.708.708l12 12a.5.5 0 0 0 .708-.708l-12-12z"/>
                </svg>  
            </div>  
        </div>
    )
}