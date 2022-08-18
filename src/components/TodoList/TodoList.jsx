import s from "./TodoList.module.css";

function Todolist({ todos, onDeleteTodo, onToggleCompleted }) {
  return (
    <ul className={s.TodoList}>
      {todos.map(({ id, text }) => (
        <li key={id} className={s.TodoListItem}>
          <input
            type="checkbox"
            onChange={() => onToggleCompleted(id)}
          />
          <p className={s.TodoListText}>{text}</p>
          <button type="button" onClick={() => onDeleteTodo(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todolist;
