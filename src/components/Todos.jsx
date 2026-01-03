import { useSelector, useDispatch} from "react-redux";
import { removeTodo, editTodo} from "../features/todo/todoSlice";
import { useState } from "react";

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [ newText, setNewText ] = useState('');
    const [ editingTodoId, setEditingTodoId ] = useState('');
    const isEmpty = todos.length === 0;

    const handleEdit = (todo) => {
        if (!newText) {
            alert("Edit Field Can't be Empty");
        }
        else {
            dispatch(editTodo({id: todo.id, text: newText}))
            setEditingTodoId('');
            setNewText('');
        }
    };

    return (
        <div className="w-full mt-[16px] list-none">
            <h3 className="bg-black text-white p-[4px] rounded-md text-xl font-[400] text-center">All Todos</h3>
            
            {   
                isEmpty ? (
                    <div className="text text-center mt-[32px]">
                        No Todos. Add Todos to Get Started.
                    </div>
                ):
                (todos.map(todo => (
                    <div className="flex justify-between items-center px-[16px] py-[12px] mt-[16px]
                     bg-[#383838] rounded-md text-white" key={todo.id}>
                        {
                            (editingTodoId === todo.id)
                            ? (<input value={newText} onChange={(e) => setNewText(e.target.value)}placeholder="Enter New Todo" className="w-[300px] border-2 border-gray-700 
                                focus:border-pink-600 focus:outline-none p-[4px] rounded-md" type="text"/>)
                            : (<div>{todo.text}</div>)
                        }
                        <div>
                            {
                                (editingTodoId === todo.id)
                                ? (
                                    <div className="flex gap-[8px]">   
                                        <button className="rounded-md bg-[#1388f6] px-[10px] py-[4px] cursor-pointer" onClick={() => handleEdit(todo)}> Done </button>
                                        <button className="rounded-md bg-[#d60000] px-[10px] py-[4px] cursor-pointer" onClick={() => setEditingTodoId('')}> Cancel </button>
                                    </div>
                                )
                                : (
                                    <div className="flex gap-[8px]"> 
                                        <button className="rounded-md bg-[#1388f6] px-[10px] py-[4px] cursor-pointer" 
                                            onClick={() => {
                                                setEditingTodoId(todo.id);
                                                setNewText(todo.text);
                                            }}> 
                                            Edit 
                                        </button>
                                        <button className="rounded-md bg-[#d60000] px-[10px] py-[4px] cursor-pointer" onClick={() => dispatch(removeTodo(todo.id))}> Remove </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )))
            }
            
        </div>
    )
}

export default Todos