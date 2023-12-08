<template>
  <div class="create-new">
    <input v-model="newTask" type="text" placeholder="Añade una nueva tarea..." @keypress.enter="addTask" name="newTask" />
    <button @click="addTask">Añadir Tarea</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { sanitizeInput } from '@/utils/helpers';

const newTask = ref<string>('');
const emit = defineEmits(['add-task']);

const addTask = () => {
  const taskValue = newTask.value.trim();
  if (taskValue) {
    emit('add-task', sanitizeInput(taskValue));
    newTask.value = '';
  }
};
</script>