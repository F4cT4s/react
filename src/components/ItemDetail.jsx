import React from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "../Context/CartContext";
import { useState } from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";



const ItemDetail = ({product, color, size , voltage}) => {
    
    const colorList = ['Choose Color', ...color].map((color, index) => {
        if (index === 0) {
            return <option className="option" key={Math.random(product.id)} value="" disabled>{color}</option>;
        }
        return <option className="option" key={Math.random(product.id)} value={color.value}>{color}</option>;
    });
    
    const sizeList = ['Choose Size', ...size].map((size, index) => {
        if (index === 0) {
            return <option className="option" key={Math.random(product.id)} value="" disabled>{size}</option>;
        }
        return <option className="option" key={Math.random(product.id)} value={size.value}>{size}</option>;
    });
    
    const voltageList = ['Choose Voltage', ...voltage].map((voltage, index) => {
        if (index === 0) {
            return <option  className="option" key={Math.random(product.id)} value="" disabled>{voltage}</option>;
        }
        return <option className="option" key={Math.random(product.id)} value={voltage.value}>{voltage}</option>;
    });
    
    
    const [isadded, setIsadded] = useState (false)
    const {addToCart} = useCartContext()
    const [colorSelect, setColorSelect] = useState('');
    const [sizeSelect, setSizeSelect] = useState('');
    const [voltageSelect, setVoltageSelect] = useState('');
    const [errors, setErrors] = useState({});

    
    
    const handleSubmit = (quantity) => {

        const newErrors = {};
        if (!colorSelect) {
            newErrors.colorSelect = <p className="alert alert-danger my-4">Elija un color</p>;
        }
        if (!sizeSelect) {
            newErrors.sizeSelect = <p className="alert alert-danger my-4">Elija el tamaño</p>;
        }
        if (!voltageSelect) {
            newErrors.voltageSelect = <p className="alert alert-danger my-4">Elija su Voltage</p>;
        }
        setErrors(newErrors);
        if (!Object.keys(newErrors).length) {
            addToCart(product, quantity , colorSelect , sizeSelect, voltageSelect)
            setIsadded (true)
        }
    }

    const handleChangeColor = event => {
        setColorSelect(event.target.value);
    };
    
    const handleChangeSize = event => {
        setSizeSelect(event.target.value);
    };

    const handleChangeVoltage = event => {
        setVoltageSelect(event.target.value);
    };
    
    return (
        <div className="container" >
            <div className="row p-5 d-flex justify-content-center ">
                <div className="col-md-6 " >
                    <img src={product.image} alt= {product.title} className=" img-fluid shadow bg-body rounded " id="lista2" />
                </div>
                <div className="card-body m-4 col-md-12 offset-md-2">
                    <h1 className="card-title m-2 d-flex justify-content-center">{product.title}</h1>
                    <h2 className="card-title m-2 d-flex justify-content-center">{product.category}</h2>
                    <h4 className="card-text m-2 d-flex justify-content-center">{product.descripcion}</h4>
                    <h3 className="card-text d-flex justify-content-center"><b>$ {product.price}</b></h3>                   
                </div>
                    <div className="col-md-12">
                        <form className="d-flex justify-content-around m-4 " id="options" onSubmit={handleSubmit}>
                            <div className="m-2"> 
                                <select className="select" required onChange={handleChangeColor} value={colorSelect}>{colorList}</select>
                                <div className="">{errors.colorSelect}</div>
                            </div>
                            <div className="m-2">
                                <select className="select" required onChange={handleChangeSize} value={sizeSelect}>{sizeList}</select>
                                <div className="">{errors.sizeSelect}</div>
                            </div>
                            <div className=" m-2" >
                                <select className="select" required onChange={handleChangeVoltage} value={voltageSelect}> {voltageList}</select>
                                <div className="">{errors.voltageSelect}</div>
                            </div>
                        </form>
                    </div>
                <div className="m-1 align-self-end">                          
                    { 
                        isadded 
                        ?
                        <div className="container">
                            <div className="d-flex justify-content-around">
                                <Nav>
                                    <Link to="/"><button id="btnGenerico" className="btn m-2 p-2 ">Volver al Inicio</button></Link>
                                    <Link to="/cart"><button id="btnVaciarCarrito" className="btn m-2 p-2 ">Ir al Carrito</button></Link>           
                                </Nav>
                            </div>
                        </div>  
                        :
                        <ItemCount initial={product.initial} stock={product.stock} onAdd={handleSubmit}/>
                    }
                    </div>
                </div>
            </div>

    )
}

export default ItemDetail