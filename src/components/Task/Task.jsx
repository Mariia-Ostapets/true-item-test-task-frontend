import { useDispatch } from 'react-redux';
import css from './Task.module.css';
import { deleteTask, toggleCompleted } from '../../redux/tasks/operations';
import { MdDeleteForever } from 'react-icons/md';

export default function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.taskContainer}>
      <div className={css.taskTextWrapper}>
        <input
          type="checkbox"
          className={css.checkbox}
          checked={task.completed}
          onChange={handleToggle}
        />
        <p className={css.text}>{task.text}</p>
      </div>
      <button className={css.deleteTaskBtn} onClick={handleDelete}>
        <MdDeleteForever size={28} color={'#3470ff'} />
      </button>
    </div>
  );
}
