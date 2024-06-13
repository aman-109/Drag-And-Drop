import React from 'react';
import DraggableItem from './DraggableItem';

const DropList = ({ items, listId, moveItem }) => {
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedData = JSON.parse(e.dataTransfer.getData("text/plain"));
        if (droppedData.listId !== listId) {
            moveItem(droppedData.index, droppedData.listId, listId);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className='p-8 w-1/2 bg-[#96ecf6] rounded-lg'
        >
            {items.filter(item => item.list === listId).map((item, index) => (
                <DraggableItem key={item._id} index={index} item={item} moveItem={moveItem} listId={listId} />
            ))}
        </div>
    );
};

export default DropList;
