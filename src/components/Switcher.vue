<script>
import { ref } from 'vue';
export default {
	setup() {
		const lightTheme = ref(true);
		const text = ref('Переключить на тёмную тему =>');

		const toggle = () => {
			lightTheme.value = !lightTheme.value;
			if (lightTheme.value) {
				document.documentElement.setAttribute('data-theme', 'light');
				text.value = 'Переключить на тёмную тему =>';
			} else {
				document.documentElement.setAttribute('data-theme', 'dark');
				text.value = 'Переключить на светлую тему =>';
			}
		};

		return {
			lightTheme,
			toggle,
			text,
		};
	},
};
</script>
<template>
	<div
		style="display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;"
	>
		{{ text }}
		<label class="switch">
			<input type="checkbox" @change="toggle" />
			<span class="slider"></span>
		</label>
	</div>
</template>
<style scoped>
.switch {
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

/* The slider */
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--primary-bg-color);
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: '';
	height: 26px;
	width: 26px;
	left: 4px;
	bottom: 4px;
	background-color: var(--secondary-bg-color);
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

input:checked + .slider {
	background-color: var(--primary-bg-color);
}

input:focus + .slider {
	box-shadow: 0 0 1px var(--primary-bg-color);
}

input:checked + .slider:before {
	-webkit-transform: translateX(26px);
	-ms-transform: translateX(26px);
	transform: translateX(26px);
}
</style>
