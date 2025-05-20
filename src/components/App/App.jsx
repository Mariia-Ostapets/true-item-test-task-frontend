import TaskForm from '../TaskForm/TaskForm';
import TasksList from '../TasksList/TasksList';
import Container from '../ui/Container/Container';
import Welcome from '../Welcome/Welcome';
import Notification from '../ui/Notification/Notification';
import Loader from '../ui/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/tasks/selectors';

export default function App() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Notification />
      {isLoading && <Loader />}
      <Container>
        <main>
          <Welcome />
          <TaskForm />
          <TasksList />
        </main>
      </Container>
    </>
  );
}
