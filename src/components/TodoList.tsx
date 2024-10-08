import React from 'react'
import { Trash2 } from 'lucide-react'
import { Todo } from '../types'

interface TodoListProps {
  todos: Todo[]
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li key={todo.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2 form-checkbox h-5 w-5 text-blue-600"
            />
            <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {todo.text}
            </span>
          </div>
          <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
            <Trash2 size={18} />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList