import { useSelector, useDispatch} from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const isEmpty = todos.length === 0;

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
                    <div className="flex justify-between items-center px-[16px] py-[10px] mt-[16px]
                     bg-[#383838] rounded-md text-white" key={todo.id}>
                        <div>{todo.text}</div>
                        <button className="rounded-md bg-[#d60000] px-[10px] py-[4px] cursor-pointer" onClick={() => dispatch(removeTodo(todo.id))}> Remove </button>
                    </div>
                )))
            }
            
        </div>
    )
}

export default Todos