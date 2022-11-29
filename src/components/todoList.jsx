import { useSelector } from 'react-redux';
import TodoItem from './todoItem';
export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  if (!todos || !todos.length) {
    return <div>할 일 목록이 없네요.</div>
  }
  return (
    <ul>
      {
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      }
    </ul>
  )
}