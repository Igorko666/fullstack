import React from "react";
import {Todo} from "./Todo";

export function TodoList(props) {

    return (
        <>
            {
                props.toDos.length > 0 ?
                    props.toDos.map(task => {
                        return <Todo changeStatus={props.changeStatus} deleteTodo={props.deleteTodo} key={task.id} task={task}></Todo>
                    }) :
                    <div>No task</div>
            }
        </>
    )
}