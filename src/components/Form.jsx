import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [newItems, setNewItems] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItems === "") return;

    onSubmit(newItems);

    setNewItems("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-white p-2 mt-8 text-lg justify-start">
          New Item
        </label>
        <input
          type="text"
          value={newItems}
          className="p-2 w-96 text-white bg-cyan-900"
          onChange={(e) => setNewItems(e.target.value)}
        />
        <button className="bg-transparent border border-white text-white p-2 m-4 rounded-md">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
