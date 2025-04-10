import { createRouter, createWebHistory } from 'vue-router';

/* Home View */
import HomeView from '@views/HomeView.vue';

/* Projects View */
import ProjectsView from '@views/Project/ProjectsView.vue';
import ProjectDetail from '@views/Project/ProjectDetail.vue';

/* Contact View */
import ContactView from '@views/ContactView.vue';

/* Scripts View */
import ScriptsView from '@views/Script/ScriptsView.vue';

/* Documentation View */
import DocsView from '@views/Docs/DocsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },
  { path: '/projects/:id', component: ProjectDetail, props: true }, // Dynamic route
  { path: '/contact', component: ContactView },
  { path: '/scripts', component: ScriptsView },
  { path: '/docs', component: DocsView },
  {
    path: '/docs/:slug',
    component: DocsView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }
});

export default router;
