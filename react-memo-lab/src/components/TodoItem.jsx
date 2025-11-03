import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    console.log(`Рендер: TodoItem ${todo.text}`);

    const handleToggle = () => {
        toggleTodo(todo.id);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        deleteTodo(todo.id);
    };

    return (
        <li
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={handleToggle}
        >
            <span>{todo.text}</span>
            <button className="delete-btn" onClick={handleDelete}>
                Видалити
            </button>
        </li>
    );
}

export default React.memo(TodoItem);