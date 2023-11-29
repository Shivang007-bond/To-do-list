import React from "react";

const Items = ({id , title , completed, toggleTodos , deleteTodos}) => {
  return (
    <div>
      <ul className="flex my-2">
        <input
          className="p-2 m-2 cursor-pointer"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodos(id, e.target.checked)}
        />
        <li className="p-2 m-2 text-white text-lg">{title}</li>
        <button
          onClick={() => deleteTodos(id)}
          className="bg-red-900 h-8 px-2 m-4 text-white rounded-md"
        >
          Delete
        </button>
      </ul>
    </div>
  );
};

export default Items;