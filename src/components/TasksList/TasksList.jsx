import { useDispatch, useSelector } from 'react-redux';
import css from './TasksList.module.css';
import { selectIsLoading, selectTasks } from '../../redux/tasks/selectors';
import Task from '../Task/Task';
import Loader from '../ui/Loader/Loader';
import { useEffect } from 'react';
import { fetchTasks } from '../../redux/tasks/operations';

export default function TasksList() {
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <section className={css.wrapper}>
      {tasks.length === 0 && !isLoading && (
        <p className={css.noTasks}>No tasks added yet</p>
      )}
      {tasks.length > 0 && (
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
