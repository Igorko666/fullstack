import React from "react";

export function TodoInput(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createToDo({
            name: event.target.username.value,
            status: 'toDo'
        });
        event.target.username.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="username"
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
