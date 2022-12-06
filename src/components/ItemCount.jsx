import React, {useState} from "react"; 

function ItemCount({initial, stock, onAdd}) {
    const [counter, setCounter] = useState(initial);
    const incrementCounter = () => counter < stock && setCounter (counter + 1)
    const decrementCounter = () => counter > initial && setCounter (counter - 1)

    return (
      <div className="  d-flex justify-content-center m-2 text-bg-secondary col">
        <div className="m-1" >
            <h2 className="m-1">{ counter }</h2>
        </div>
        <div className="m-1">
            <button className="btn btn-success m-1" onClick={incrementCounter}>+</button>
            <button className="btn btn-danger m-1" onClick={decrementCounter}>-</button>
        </div>
        <div className="m-2">
            <button className="p-1 text-bg-secondary" >Agregar al carrito</button>
        </div>
      </div>
    );
  }

export default ItemCount