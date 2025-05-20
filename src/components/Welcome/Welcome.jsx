import css from './Welcome.module.css';

export default function Welcome() {
  return (
    <section>
      <h1 className={css.pageTitle}>Welcome to the task manager!</h1>
    </section>
  );
}
