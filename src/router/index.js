import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TodoList from "../views/TodoList.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/todo-list",
      name: "TodoList",
      component: TodoList,
    },
  ],
});

export default router;
