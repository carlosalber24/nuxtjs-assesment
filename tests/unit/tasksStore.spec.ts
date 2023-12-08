import { describe, it, expect, beforeEach } from '@jest/globals';
import { createPinia, setActivePinia } from 'pinia';
import useTasksStore from '../../store/tasks';
import { type Task } from '../../interfaces/tasks';

beforeEach(() => {
  setActivePinia(createPinia());
});

describe('tasksStore', () => {
  it('adds a new task', () => {
    const store = useTasksStore();
    expect(store.tasks).toHaveLength(0);

    const newTask: Task = { id: Date.now(), name: 'New Task', completed: false };
    store.addTask(newTask);
    expect(store.tasks).toHaveLength(1);
    expect(store.tasks[0].name).toBe('New Task');
  });

  it('completes a task', () => {
    const store = useTasksStore();
    const newTask: Task = { id: 1, name: 'New Task', completed: false };
    store.addTask(newTask);
    expect(store.tasks[0].completed).toBe(false);

    store.completeTask(1);
    expect(store.tasks[0].completed).toBe(true);
  });

  it('deletes a task', () => {
    const store = useTasksStore();
    const newTask: Task = { id: 1, name: 'New Task', completed: false };
    store.addTask(newTask);
    expect(store.tasks).toHaveLength(1);

    store.deleteTask(1);
    expect(store.tasks).toHaveLength(0);
  });
});

describe('tasksStore filters', () => {
  it('filters completed tasks', () => {
    const store = useTasksStore();
    const task1: Task = { id: 1, name: 'Completed Task', completed: true };
    const task2: Task = { id: 2, name: 'Incomplete Task', completed: false };

    store.addTask(task1);
    store.addTask(task2);

    const completedTasks: Task[] = store.completedTasks;
    expect(completedTasks).toHaveLength(1);
    expect(completedTasks[0].id).toBe(1);
  });

  it('filters incomplete tasks', () => {
    const store = useTasksStore();
    const task1: Task = { id: 1, name: 'Completed Task', completed: true };
    const task2: Task = { id: 2, name: 'Incomplete Task', completed: false };

    store.addTask(task1);
    store.addTask(task2);

    const incompleteTasks: Task[] = store.incompleteTasks;
    expect(incompleteTasks).toHaveLength(1);
    expect(incompleteTasks[0].id).toBe(2);
  });
});