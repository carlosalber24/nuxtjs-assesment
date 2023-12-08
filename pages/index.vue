<template>
    <main>
    <h1>Lista de tareas</h1>
    <p>Crea una lista de tareas:</p>
    
    <AddTask @addTask="addTask" />
    <div class="filters">
      <p class="filter-text">Filtrar tareas</p>
      <button class="all" @click="taskFilter = 'all'">Todas</button>
      <button class="completed" @click="taskFilter = 'completed'">Completadas</button>
      <button class="pending" @click="taskFilter = 'incomplete'">Pendientes</button>
    </div>

    <TaskList :tasks="filteredTasks.value" @completeTask="completeTask" @deleteTask="deleteTask" />

    <div class="footer">
      <h3>Prueba Técnica</h3>
      <p>Desarrollado por Carlos Ródriguez</p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import useTasksStore from '@/store/tasks';
import AddTask from '@/components/AddTask.vue';
import TaskList from '@/components/TaskList.vue';
import { type Task } from '@/interfaces/tasks';

const tasksStore = useTasksStore();
const { tasks, completedTasks, incompleteTasks } = storeToRefs(tasksStore);
const taskFilter = ref<string>('all');

const filteredTasks = computed(() => {
  switch (taskFilter.value) {
    case 'completed':
      return completedTasks;
    case 'incomplete':
      return incompleteTasks;
    default:
      return tasks;
  }
}); 

const addTask = (newTaskTitle: string) => {
  const newTask: Task = { 
    id: Date.now(),
    name: newTaskTitle,
    completed: false
  };
  tasksStore.addTask(newTask);
};

const completeTask = (taskId: number) => {
  tasksStore.completeTask(taskId);
};

const deleteTask = (taskId: number) => {
  tasksStore.deleteTask(taskId);
};

</script>