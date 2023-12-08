import { type Task } from '../interfaces/tasks';

import { defineStore } from 'pinia';

const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
  }),
  persist: true,
  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    incompleteTasks: (state) => state.tasks.filter((task) => !task.completed),
  },
  actions: {
    addTask(task: Task) {
      this.tasks.unshift(task);
    },
    completeTask(taskId: number) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) task.completed = !task.completed;
    },
    deleteTask(taskId: number) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
  }
});

export default useTasksStore;