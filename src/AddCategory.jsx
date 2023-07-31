import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (el) => {
        setInputValue(el.target.value);
    };

    const handleFormSubmit = (ev) => {
        ev.preventDefault();

        if(inputValue.trim().length <= 1 ) return;

        setInputValue('');
        onNewCategory(inputValue.trim());

        // setCategories( cs => [ ...cs, inputValue ]);
    };

    return (
        <form onSubmit={ handleFormSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ handleInputChange } />
        </form>
    );
};