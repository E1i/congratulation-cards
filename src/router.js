import { createWebHistory, createRouter } from 'vue-router';
// import persons from './persons';
import HelloWorld from './components/HelloWorld.vue';
import PersonCard from './components/PersonCard.vue';

const routes = [
	{
		path: '/congratulation-cards/',
		name: 'HelloWorld',
		component: HelloWorld,
	},
	{
		path: '/congratulation-cards/:id',
		name: 'PersonCard',
		component: PersonCard,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
