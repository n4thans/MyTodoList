import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BsCheck } from "react-icons/bs"


export default function TodoItem(props) {
    return (
        <div className="todo-row">
            {props.todo.text}
            <div className='iconsContainer'>
                <RiCloseCircleLine className='icon' onClick={() => props.removeTodo(props.todo.id)}/>
                <BsCheck />
            </div>
        </div>
    )
}