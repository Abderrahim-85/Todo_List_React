import "./TodoList.css"
import React from 'react'
import TodoItem from "../TodoItem/TodoItem";


export default function TodoList(props) {
    const list = props.taches.map(function(item,index){
        return <TodoItem  key={index} items={item} 
        supression3={props.supression2}
        modification3={props.modification2}/>
        
    })
 
    return (
        <div>
             <h2 className="mt-3 text-center">Todo List</h2>
             { list }
             <button
             onClick={props.clearlist} 
             className="btn  btn-danger mt-3 form-control">Clear</button>
        </div>
    )
}
