import React, { createContext, useEffect, useReducer } from 'react'
import { todoReducer } from '../reducers/TodoReducer'
import { GET_TODOS, SAVE_TODOS } from '../reducers/types'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  // State
  // const [todos, setTodos] = useState([])
  const [todos, dispatch] = useReducer(todoReducer, [])

  // useEffect : useEffect sẽ chạy ít nhất 1 lần sau khi render xong, chạy tiếp nếu có điều kiện kèm theo. tham số thứ 2 nếu là mảng rỗng chỉ chạy 1 lần
  // nếu tham số thứ 2 là [todos] có nghĩa là chạy lại mỗi khi todos thay đổi
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos }
    })
  }, [todos])

  const todoContextData = {
    todos,
    dispatch
  }

  // return
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
