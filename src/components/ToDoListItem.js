import React from 'react'
import '../css/style.css';


function ToDoListItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} />
            <label>{props.item.text}</label>
        </div>
    )
}



export default ToDoListItem