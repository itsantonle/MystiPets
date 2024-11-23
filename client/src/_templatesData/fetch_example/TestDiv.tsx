import axios from "axios"
import { useEffect, useState } from "react"

export type ToDo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const TestDiv = () => {
  const [todos, setTodos] = useState<ToDo[] | null>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const URL = "https://jsonplaceholder.typicode.com/todos"
  const getData = async () => {
    try {
      const response = await axios.get(URL)
      setTodos(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      {todos ? (
        todos.map((todo) => <p key={todo.id}>{todo.title}</p>)
      ) : (
        <p>
          {loading && <span>Loading...</span>}
          {error && <span>Error: {error}</span>}
        </p>
      )}
    </div>
  )
}

export default TestDiv
