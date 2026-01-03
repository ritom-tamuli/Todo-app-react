import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    // todos: [{
    //     id: 1,
    //     text: "Demo Todo"
    // }]
    todos: []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            let findTodo = state.todos.find(todo => todo.id === action.payload.id);
            if(findTodo) {
                findTodo.text = action.payload.text;
            }
        }
    }
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
 