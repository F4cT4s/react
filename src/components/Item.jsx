import React from "react";
import ItemCount from "./ItemCount";

const Item = (product) =>{
    return (
            <div className="card mb-3 text-bg-secondary">
                <div className="col">
                    <div className="row">
                        <img src="images/plane.svg" className="img-fluid rounded-start" alt="" style={{ width: 200, height: 200 }} />
                    </div>
                    <div className="row">
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="row-md-4">
                        <ItemCount/>
                    </div>
                </div>
            </div>
    )
}

export default Item