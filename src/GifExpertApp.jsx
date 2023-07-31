import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (value) => {
        if(categories.includes(value)) return;
        // console.log(value);
        const newCategories = [...categories, value];

        setCategories(newCategories);
    };

    return (
    <>
        {/* titulo */}
        <h1>Gif Expert App</h1>

        {/* input */}
        <AddCategory
            // setCategories={ setCategories }
            onNewCategory={ (value) => onAddCategory(value) } />

        {/* Listado de Gif */}
        { categories.map((category, index) => (
            <GifGrid
                key={ category }
                category={ category } />
        )) }
    </>
    );
}