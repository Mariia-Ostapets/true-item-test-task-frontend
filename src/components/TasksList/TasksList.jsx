import { useSelector } from 'react-redux';
import css from './TasksList.module.css';
import { selectTasks } from '../../redux/tasks/selectors';
import Task from '../Task/Task';

export default function TasksList() {
  const tasks = useSelector(selectTasks);

  return (
    <section>
      <ul className={css.list}>
        {tasks.map(task => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </section>
  );
}
