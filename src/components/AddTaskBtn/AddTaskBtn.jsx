import css from './AddTaskBtn.module.css';

export default function AddTaskBtn() {
  return (
    <button type="submit" className={css.addTaskBtn}>
      Add task
    </button>
  );
}
