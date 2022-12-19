import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import add from './components/add-orang.vue';
import orang from './components/orang.vue'

// import AddOrang from './components/add-orang.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/tambah',
		name: 'add',
		component: add,
	},
	{
		path: '/orang',
		name: 'orang',
		component: orang,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;