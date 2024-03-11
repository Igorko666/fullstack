import React, { useEffect, useState } from 'react';
import getApi from "./api/api";
import { TodoList } from './components/TodoList'
import { TodoInput } from "./components/TodoInput";
import './App.css'

function App() {
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        getAllToDos()
    }, []);

    const createToDo = (data) => {
        getApi().createToDo(data).then(response => {
            console.log(response);
            setToDos(prevToDos => [...prevToDos, response.data]);
        }).catch(error => {
            console.error('Error while create:', error);
        });
    }

    const getAllToDos = () => {
        getApi().getToDos().then(response => {
            setToDos(response.data);
        }).catch(error => {
            console.error('Error while fetching todos:', error);
        });
    }

    const deleteTodo = (id) => {
        getApi().deleteToDo(id).then(response => {
            console.log(response)
            getAllToDos()
        }).catch(error => {
            console.error('Error while fetching todos:', error);
        });
    }

    const changeStatus = (toDo, status) => {
        toDo.status = status

        getApi().updateToDo(toDo.id, toDo).then(response => {
            console.log(response)
            getAllToDos()
        }).catch(error => {
            console.error('Error while fetching todos:', error);
        });
    }

    return (
        <div className="App">
            <TodoInput createToDo={createToDo}></TodoInput>
            <TodoList changeStatus={changeStatus} deleteTodo={deleteTodo} toDos={toDos}></TodoList>
        </div>
    );
}

export default App;