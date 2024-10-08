import React, { useState } from 'react'
import { PlusCircle, Trash2 } from 'lucide-react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import { Todo } from './types'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }])
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Todo App</h1>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}

export default App