<template>
  <ul>
    <li
      v-for="{ id, content, activation } in todoItems"
      :key="id"
      @click="toggle(id)"
    >
      <input type="checkbox" :checked="activation" />
      <span
        :style="{ textDecoration: activation ? 'line-through' : 'none' }"
        v-html="content"
      ></span>
    </li>
  </ul>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const todoItems = store.getters.todoItems;
</script>

<style scoped></style>
