import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../store/todoSlice/todoSlice";
import TodoItem from "./todoItem/TodoItem";

const ReduxTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const list = useSelector((state) => state?.todo);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = () => {
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Redux Todo</h1>
      <div className="w-1/2 mx-auto p-10 shadow-lg mt-5 mb-10 rounded-md">
        <div className="relative">
          <input
            type="text"
            className="block w-full border-0 py-2 pl-5  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-full"
            value={inputValue}
            onChange={inputHandler}
          />
          <button
            onClick={submitHandler}
            disabled={inputValue === ""}
            className="absolute top-0 right-0 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </div>
      <div>
        {list?.length === 0 ? (
          <h1 className="shadow-lg p-5 items-center rounded-lg mb-7 w-1/2 mx-auto text-[28px]">Nothing To Do</h1>
        ) : (
          <ul className="w-1/2 mx-auto">
            {list?.map((item) => (
              <TodoItem item={item} key={item?.id} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReduxTodo;
