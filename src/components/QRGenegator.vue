<script>
import QRCode from '../../node_modules/qrjs';
import { ref } from 'vue';

export default {
	props: {
		value: {
			type: String,
			required: true,
			default: '',
		},
		ecclevel: {
			type: String,
			default: 'L',
			validator: (l) => ['L', 'Q', 'M', 'H'].indexOf(l) > -1,
		},
		renderAs: {
			type: String,
			required: false,
			default: 'generateHTML',
			validator: (as) =>
				['generateSVG', 'generatePNG', 'generateHTML'].indexOf(as) > -1,
		},
	},
	setup(props) {
		let qr;
		const format = ref(props.renderAs);

		switch (props.renderAs) {
			case 'generateSVG':
				qr = QRCode.generateSVG(props.value, {
					ecclevel: props.ecclevel,
					modulesize: 5,
					margin: 4,
				});
				break;
			case 'generatePNG':
				qr = QRCode.generatePNG(props.value, {
					ecclevel: props.ecclevel,
					modulesize: 5,
					margin: 4,
				});
				break;
			case 'generateHTML':
			default:
				qr = QRCode.generateHTML(props.value, {
					ecclevel: props.ecclevel,
					modulesize: 5,
					margin: 4,
				});
				break;
		}

		const redirect = () => {
			const win = window.open(props.value, '_blank');
			win.focus();
		};
		return {
			qr,
			format,
			redirect,
		};
	},
};
</script>
<template>
	<div
		v-if="format === 'generatePNG'"
		@click="redirect"
		style="cursor: pointer;"
	>
		<img :src="qr" />
	</div>
	<div
		v-else
		v-html="qr.outerHTML"
		@click="redirect"
		style="cursor: pointer;"
	/>
</template>
