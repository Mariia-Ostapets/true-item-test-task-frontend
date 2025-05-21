import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://true-item-test-task-backend.onrender.com';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ text }, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      toast.success('Task was successfully added!');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async ({ _id }, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${_id}`);
      toast.success(`Task was successfully deleted!`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async ({ completed, _id }, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${_id}`, {
        completed: !completed,
      });
      toast.success(`Task was successfully updated!`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
