import { useDispatch } from 'react-redux';
import { remove, updateIsDone } from '../store/todo';
const liStyle = {
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '800px'
}
export default function TodoItem({ todo }) {
  const { id, text, isDone } = todo;
  const dispatch = useDispatch();
  const onClickDeleteTodo = (e) => {
    e.stopPropagation();
    dispatch(remove(id));
  };
  const onToggleIsDone = () => {
    dispatch(updateIsDone(id));
  };
  return (
    <li 
      onClick={onToggleIsDone}
      style={{ textDecoration: isDone ? 'line-through' : '', ...liStyle }}
    >
      <p>text : {text}</p>
      <button onClick={onClickDeleteTodo}>삭제</button>
    </li>
  )
}