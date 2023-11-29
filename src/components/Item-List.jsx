import Items from "./Items";

const ItemList = ({ activityList, toggleTodos, deleteTodos }) => {
  return (
    <div className="flex flex-col m-8">
      <h2 className="text-white text-3xl justify-start flex">Item List</h2>
      <p className="text-white text-2xl m-2">
        {activityList.length === 0 && "No todos"}
      </p>
      {activityList.map((list) => {
        return (
          <Items
            {...list}
            key={list.id}
            toggleTodos={toggleTodos}
            deleteTodos={deleteTodos}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
