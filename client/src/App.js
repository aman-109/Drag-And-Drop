import React, { useEffect, useState } from 'react';
import DropList from './components/DropList';
import './App.css';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/items')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    const moveItem = (fromIndex, fromListId, toListId) => {
        setItems(prevItems => {
            const updatedItems = [...prevItems];
            const [movedItem] = updatedItems.splice(fromIndex, 1);
            movedItem.list = toListId;
            updatedItems.push(movedItem); 
            return updatedItems;
        });
    };

    return (
        <div className="text-center p-8">
            <h1 className='text-3xl font-bold'>Drag and Drop</h1>
            <div className='w-2/5 mx-auto mt-10 flex gap-8 justify-around' >
                <DropList listId="list1" items={items} moveItem={moveItem} />
                <DropList listId="list2" items={items} moveItem={moveItem} />
            </div>
        </div>
    );
};

export default App;
