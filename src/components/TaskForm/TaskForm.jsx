import css from './TaskForm.module.css';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/operations';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRef } from 'react';

export default function TaskForm() {
  const initialValues = { text: '' };
  const inputRef = useRef(null);

  const FeedbackSchema = Yup.object().shape({
    text: Yup.string().trim().required('Task is required'),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newTask = {
      text: values.text,
      completed: false,
    };

    dispatch(addTask(newTask));
    actions.resetForm();
    inputRef.current?.blur();
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <Field
              className={`${css.field} ${
                errors.text && touched.text ? css.invalid : ''
              }`}
              type="text"
              name="text"
              placeholder="Enter task"
              innerRef={inputRef}
            />
            <ErrorMessage name="text" component="div" className={css.error} />
            <AddTaskBtn />
          </Form>
        )}
      </Formik>
    </section>
  );
}
