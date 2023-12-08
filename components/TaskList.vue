<template>
  <section class="tasks">
    <div v-for="task in tasks" :key="task.id" class="task-item">
      <article :class="`task ${task.completed ? 'is-complete' : ''}`">
        <div class="content">{{ task.name }}</div>
        <div class="buttons">
            <button @click="completeTask(task.id)">{{ task.completed ? 'Deshacer' : 'Completar' }}</button>
            <button @click="deleteTask(task.id)" class="delete">Eliminar</button>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Task } from '@/interfaces/tasks';

defineProps({
  tasks: {
    type: Array as PropType<Task[]>,
    required: true,
  },
});

const emit = defineEmits(['completeTask', 'deleteTask']);

const completeTask = (id: number) => {
  emit('completeTask', id);
};

const deleteTask = (id: number) => {
  emit('deleteTask', id);
};
</script>