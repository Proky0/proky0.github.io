import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ProjectDetail from '@/views/ProjectDetail.vue'; // New component
import ContactView from '@/views/ContactView.vue';
/* Home View */
import HomeView from '@views/HomeView.vue';

/* Projects View */
import ProjectsView from '@views/Project/ProjectsView.vue';
import ProjectDetail from '@views/Project/ProjectDetail.vue';

/* Contact View */
import ContactView from '@views/ContactView.vue';

/* Scripts View */
import ScriptsView from '@views/Script/ScriptsView.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },
  { path: '/projects/:id', component: ProjectDetail, props: true }, // Dynamic route
  { path: '/contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
