import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    };

    return (
        <form className='w-full flex justify-center' onSubmit={addTodoHandler}>
            <input className="w-[380px] border-2 border-gray-700 focus:border-pink-600 focus:outline-none p-[8px] rounded-md" type="text" required placeholder="Enter a todo task" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type="submit" className="bg-sky-500/100 hover:bg-sky-600/100 font-medium cursor-pointer text-white p-[10px] ml-[12px] rounded-md">Add Todo</button>
        </form>
    )
}

export default AddTodo