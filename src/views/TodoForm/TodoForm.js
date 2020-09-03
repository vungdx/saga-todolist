import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoRequest } from '../Todo/actions';

function TodoForm(props) {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodoRequest(newTodo))
        setNewTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTodo} name="newTodo" onChange={e => setNewTodo(e.target.value)} />
            <button type="submit">ADD</button>
        </form>
    );
}

export default TodoForm;