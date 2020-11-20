<template>
	<!-- <div id="app">
		<router-link
			v-for="person in persons"
			:key="person.id"
			:to="`/${person.id}`"
		>
			{{ person.firstName }}
		</router-link>
	</div> -->
	<router-view />
</template>

<script>
import persons from './persons';
export default {
	name: 'App',
	setup() {
		return { persons };
	},
};
</script>
