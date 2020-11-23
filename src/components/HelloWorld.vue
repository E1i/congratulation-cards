<template>
	<Form
		:imgSrc="'https://slovnet.ru/wp-content/uploads/2018/12/1-12.jpg'"
		:imgOffset="'-225%'"
	/>
	<Switcher />
</template>

<script>
import Form from './Form';
import Switcher from './Switcher';
export default {
	name: 'HelloWorld',
	components: {
		Form,
		Switcher,
	},
};
</script>
<style>
/* color: #42b983; */
:root {
	/* 1 - #ffffff - #111418
		2 - #f9f9fa - #191f24
		3 - #eff0f2 - #232a31
		4 - #dbdee1 - #38434f */

	--primary-bg-color: #ffffff;
	--secondary-bg-color: #cfd8dc;
	--primary-text-color: #222222;
	--secondary-text-color: #455a64;
	--interactive-text-color: #026ebe;
	--inlineerror-text-color: #c00400;
	--disabled-text-color: #cfd8dc;
}

[data-theme='dark'] {
	--primary-bg-color: #222222;
	--secondary-bg-color: #37474f;
	--primary-text-color: #ffffff;
	--secondary-text-color: #b0bec5;
	--interactive-text-color: #ffffff;
	--inlineerror-text-color: #ffffff;
	--disabled-text-color: #cfd8dc;
}

body {
	color: var(--primary-text-color);
	background-color: var(--secondary-bg-color);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: wrap;
	margin: 0;
	height: 100%;
}

body a {
	color: var(--interactive-text-color);
}

input,
button,
textarea {
	color: var(--secondary-text-color);
	background-color: var(--primary-bg-color);
	border-color: var(--disabled-text-color);
}
button {
	cursor: pointer;
}

html {
	height: 100%;
}
</style>
