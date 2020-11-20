import { createWebHistory, createRouter } from 'vue-router';
import persons from './persons';
import HelloWorld from './components/HelloWorld.vue';
import PersonCard from './components/PersonCard.vue';

const routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld,
	},
];

persons.forEach(({ id }) => {
	routes.push({
		path: `/${id}`,
		name: `PersonCard-${id}`,
		component: PersonCard,
		props: {
			id,
		},
	});
});

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
