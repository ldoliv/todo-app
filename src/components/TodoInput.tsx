import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react'

interface TodoInputProps {
  addTodo: (text: string) => void
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addTodo(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <PlusCircle size={24} />
      </button>
    </form>
  )
}

export default TodoInput