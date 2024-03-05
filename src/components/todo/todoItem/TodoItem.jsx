import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../store/todoSlice/todoSlice";



const TodoItem = ({item}) => {

  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  return (
    <li
      key={item?.id}
      className="flex justify-between shadow-lg p-5 items-center rounded-lg mb-7"
    >
      <div className="flex gap-5 items-center">
      <input type="checkbox" value={checked} className="w-5 h-5" onChange={() => setChecked(!checked)} />
      <div className={`text-[20px] font-medium ${checked ? "line-through text-[#bdbfbf]" : "" }`}>  {item?.value}</div>
      </div>
      <button
        onClick={() => dispatch(deleteTodo(item?.id))}
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Done
      </button>
    </li>
  );
};

export default TodoItem;
