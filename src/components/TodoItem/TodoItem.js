import "./TodoItem.css"

import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="list-group-item text-capitalize d-flex justify-content-between  my-2">
                <h6>{props.items.tache}</h6>
                <div className="todo-icons">
                    <span  onClick={() => props.modification3(props.items.id)} className="mx-2 text-success">
                        <i className="fas fa-pen"></i>
                    </span>
                    <span onClick={() => props.supression3(props.items.id)} className="mx-2 text-danger">
                        <i className="fas fa-trash"></i>
                    </span>
                </div>

            </div>
    )
}
