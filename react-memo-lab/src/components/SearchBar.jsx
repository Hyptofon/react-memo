import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
    console.log('Рендер: SearchBar');

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Пошук завдань..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default React.memo(SearchBar);