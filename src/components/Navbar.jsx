import { useSelector } from "react-redux"

const Navbar = () => {
    const todos = useSelector((state) => state.todos)

    return (
        <div className="w-full flex justify-between py-[16px] px-[32px] bg-black text-white">
            <h3>Todo App</h3>
            <p>Total Items: {todos.length}</p>
        </div>
    )
}

export default Navbar