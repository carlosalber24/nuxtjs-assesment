<template>
  <div class="create-new">
    <input v-model="newTask" type="text" placeholder="Añade una nueva tarea..." @keypress.enter="addTask" />
    <button @click="addTask">Añadir Tarea</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const newTask = ref<string>('');
const emit = defineEmits(['add-task']);

const addTask = () => {
  const taskValue = newTask.value.trim();
  if (taskValue) {
    emit('add-task', taskValue);
    newTask.value = '';
  }
};
</script>