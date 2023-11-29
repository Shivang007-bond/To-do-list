import { useEffect, useState } from "react";
import Form from "./components/Form";
import ItemList from "./components/Item-List";

const App = () => {
  const [activityList, setActivityList] = useState(() => {
    const localValue = localStorage.getItem("newItems");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("newItems", JSON.stringify(activityList));
  }, [activityList]);

  function addTodos(title) {
    setActivityList((currentList) => {
      return [
        ...currentList,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodos(id, completed) {
    setActivityList((currentList) => {
      return activityList?.map((currentList) => {
        if (currentList.id === id) {
          return { ...currentList, completed };
        }
        return currentList;
      });
    });
  }

  function deleteTodos(id) {
    setActivityList((currentList) => {
      return activityList.filter((currentList) => {
        if (currentList.id !== id) {
          return { ...currentList };
        }
      });
    });
  }

  return (
    <div className="bg-gray-800 flex flex-col justify-center items-center">
      <Form onSubmit={addTodos} />
      <ItemList
        activityList={activityList}
        toggleTodos={toggleTodos}
        deleteTodos={deleteTodos}
      />
    </div>
  );
};

export default App;
