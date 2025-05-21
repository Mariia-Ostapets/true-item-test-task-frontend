import { useDispatch, useSelector } from 'react-redux';
import css from './TasksList.module.css';
import { selectTasks } from '../../redux/tasks/selectors';
import Task from '../Task/Task';
import { useEffect } from 'react';
import { fetchTasks } from '../../redux/tasks/operations';

export default function TasksList() {
  const tasks = useSelector(selectTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <section>
      {tasks.length === 0 ? (
        <p className={css.noTasks}>No tasks added yet</p>
      ) : (
        <ul className={css.list}>
          {tasks.map(task => (
            <li className={css.listItem} key={task._id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
