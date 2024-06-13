import React, { useRef } from "react";

const DraggableItem = ({ item, index, moveItem, listId }) => {
  const itemRef = useRef(null);

  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", JSON.stringify({ index, listId }));
  };

  return (
    <div
      ref={itemRef}
      draggable
      onDragStart={handleDragStart}
      className="p-[0.5rem 1rem] m-[0.5rem] bg-[lightgray] cursor-move"
    >
      {item.name}
    </div>
  );
};

export default DraggableItem;
