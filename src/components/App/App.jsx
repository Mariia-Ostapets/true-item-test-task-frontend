import TaskForm from '../TaskForm/TaskForm';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import TasksList from '../TasksList/TasksList';
import Container from '../ui/Container/Container';
import Welcome from '../Welcome/Welcome';

export default function App() {
  return (
    <>
      <Container>
        <main>
          <Welcome />
          <TaskForm />
          <AddTaskBtn />
          <TasksList />
        </main>
      </Container>
    </>
  );
}
