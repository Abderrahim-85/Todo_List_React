import "./InputItem.css"
import React from 'react'

export default function InputItem(props) {
    return (
        <form onSubmit={props.soumissionFormulaire2} >
        <div className="text-center">
        <h1> Add Todo </h1>
        <div className="card card-body">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"></i>
                    </div>
                </div>
                <input 
                value={props.item}
                type="text" 
                className="form-control ms-2"
                onChange={props.ChangementInput2} />
            </div>{
                props.editItem != true 
                ?
            <button className="btn btn-primary mt-3 form-control">Add Item</button>
               :
            <button className="btn btn-success mt-3 form-control">Eddit Item</button>}
        </div>
        </div>
        </form>
    )
}
