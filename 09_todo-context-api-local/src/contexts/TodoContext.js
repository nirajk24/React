import { createContext, useContext } from "react"

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "Todo Msg",
      completed: false
    }
  ],
  addTodo: (todoMsg) => {},
  updateTodo: (id, todoMsg) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {}
})

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider