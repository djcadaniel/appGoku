import { MainLayout } from "../layout/MainLayout";
import { Characters } from "../pages/Characters";
import { Home } from "../pages/Home";

export const routes = [
  {
    path: '/',
    layout: MainLayout,
    component: Home
  },
  {
    path : '/characters',
    layout: MainLayout,
    component: Characters
  }
]