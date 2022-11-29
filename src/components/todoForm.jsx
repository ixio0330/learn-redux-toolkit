import { useState } from "react"
import { useDispatch } from 'react-redux';
import { insert } from '../store/todo';
export default function TodoForm() {
  const dispatch = useDispatch();
  const insertTodo = () => {
    if (!todo) return;
    dispatch(insert(todo));
    setTodo('');
  }
  const [todo, setTodo] = useState('');
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  }
  return (
    <div>
      <input type="text" value={todo} onChange={onChangeTodo} />
      <button onClick={insertTodo}>추가</button>
    </div>
  )
}