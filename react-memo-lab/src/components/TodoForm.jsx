import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    console.log('Рендер: TodoForm');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Додати нове завдання..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    );
}

export default React.memo(TodoForm);