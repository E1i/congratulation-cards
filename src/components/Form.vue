<script>
import { reactive, ref, computed } from 'vue';
import Persons from '../firebase';
import QRCode from './QRGenegator';
import 'animate.css';

export default {
	props: {
		id: {
			type: Number,
			default: null,
			validator: (n) => typeof n === 'number',
		},
		firstName: {
			type: String,
			default: '',
			validator: (str) => typeof str === 'string' && str.length <= 25,
		},
		lastName: {
			type: String,
			default: '',
			validator: (str) => typeof str === 'string' && str.length <= 50,
		},
		text: {
			type: String,
			default: '',
			validator: (str) => typeof str === 'string' && str.length <= 500,
		},
		position: {
			type: String,
			default: '',
			validator: (str) => typeof str === 'string' && str.length <= 100,
		},
		imgOffset: {
			type: String,
			default: '',
			validator: (str) => typeof str === 'string' && str.length <= 50,
		},
		imgSrc: {
			type: String,
			default: '',
			validator: (str) => typeof str === 'string' && str.length,
		},
	},
	components: { QRCode },
	setup(props) {
		const person = reactive({
			id: props.id,
			firstName: props.firstName,
			lastName: props.lastName,
			text: props.text,
			position: props.position,
			imgOffset: props.imgOffset,
			imgSrc: props.imgSrc,
		});
		const isSaved = ref(false);
		const cardTitle = ref(
			'Привет! Заполни форму, что бы собрать поздравительную карточку'
		);
		const validationErrors = ref([]);
		const qr = ref(null);
		const url = computed(() => document.location.href + '' + person.id);
		const save = async() => {
			if(validate()) {
				if (person.id === null) person.id = await Persons.getLength();
				isSaved.value = true;
				console.info('Data to be saved:', person);
				Persons.set(person);
			}
		};
		const clear = () => {
			const doClear = confirm('Точно очищаем форму?');
			if (doClear) {
				person.id = null;
				person.firstName = '';
				person.lastName = '';
				person.text = '';
				person.position = '';
				person.imgOffset = '';
				person.imgSrc = '';
				isSaved.value = false;
				validationErrors.value = [];
			}
		};
		const validate = () => {
			validationErrors.value = [];
			if (person.firstName.length < 3) validationErrors.value.push('Имя должно быть длиннее 3-х символов');
			if (person.firstName.length > 25) validationErrors.value.push('Имя должно быть короче 25-ти символов');
			if (person.lastName.length < 2) validationErrors.value.push('Фамилия должно быть длиннее 2-х символов');
			if (person.lastName.length > 50) validationErrors.value.push('Фамилия должно быть короче 50-ти символов');
			if (person.text.length < 10) validationErrors.value.push('Текст поздравления должен быть от минимум 10 символов');
			if (person.text.length > 500) validationErrors.value.push('Текст поздравления должен короче 500 символов');
			if (person.position.length < 3) validationErrors.value.push('Позиция должна быть длиннее 3-х символов');
			if (person.position.length > 100) validationErrors.value.push('Позиция должна быть меньше 100-а символов');
			if (person.imgSrc.length <= 0) validationErrors.value.push('Ссылка на фотографию человека обязательна');
			if (person.imgOffset.length > 0 && person.imgOffset.slice(-1) !== '%' ) validationErrors.value.push('Сдвиг картинки задаётся только в %! Если сдвиг не нужен - оставьте поле пустым');
			if (validationErrors.value.length > 0) {
				return false;
			} else {
				return true;
			}
		}

		const download = () => {
			console.log('img',qr.value.qr);
			const download = document.createElement('a');
			download.href = qr.value.qr;
			download.download = `${person.firstName}__${person.lastName}_qr-code.png`;
			download.click();
		}

		return { person, save, clear, isSaved, url, cardTitle, validationErrors, qr, download };
	},
};
</script>
<template>
	<div class="card dark-theme || light-theme">
		<div class="card__title">{{ cardTitle }}</div>
		<div class="card__body">
			<p v-if="validationErrors.length">
    <b>Пожалуйста исправьте указанные ошибки:</b>
    <ul>
      <li v-for="error in validationErrors" :key="error" class="error">{{ error }}</li>
    </ul>
  </p>
			<label for="firstName"> Имя </label>
			<input
				type="text"
				id="firstName"
				placeholder="Добрыня"
				v-model="person.firstName"
			/>
			<label for="lastName"> Фамилия </label>
			<input
				type="text"
				id="lastName"
				placeholder="Никитыч"
				v-model="person.lastName"
			/>
			<label for="position"> Позиция </label>
			<input
				type="text"
				id="position"
				placeholder="Богатырь"
				v-model="person.position"
			/>
			<label for="text"> Текст поздравления </label>
			<textarea
				id="text"
				placeholder="Введи тесколько строк поздравлений... "
				v-model="person.text"
			/>
			<label for="imgSrc"> Ссылка на картинку </label>
			<input
				type="text"
				id="imgSrc"
				placeholder="Вставьте ссылку на картинку"
				v-model="person.imgSrc"
			/>
			<label for="imgOffset"> Сдвиг изображения по горизонтали </label>
			<input
				type="text"
				id="imgOffset"
				placeholder="-15%"
				v-model="person.imgOffset"
			/>
			<div class="wrapper">
				<transition
					mode="out-in"
					enter-active-class="animate__animated animate__zoomInDown"
					leave-active-class="animate__animated animate__zoomOut"
				>
					<QRCode :value="url" renderAs="generatePNG" v-if="isSaved" ref="qr" />
				</transition>
			</div>
		</div>
		<div class="card__footer">
			<button @click="save">
				{{ isSaved ? 'Обновить данные' : 'Cохранить данные' }}
			</button>
			<button @click="clear">Очистить форму</button>
			<button @click="download" v-if="isSaved"> Скачать QR-код </button>
		</div>
	</div>
</template>
<style>
textarea {
	max-width: 435px;
	min-width: 177px;
}
button {
	margin-left: 7.5px;
	margin-right: 7.5px;
}
.card {
	font-family: 'Raleway', Arial, sans-serif;
	font-size: 16px;
	border-radius: 0;
	box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
		0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px 0 rgba(0, 0, 0, 0.2);
	max-width: 475px;
	height: fit-content;
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	transition: all 200ms;
	background: var(--primary-bg-color);
	margin: 50px;
	padding: 20px;
	box-sizing: border-box;
	transition: 0.4 all;
}
.card__title {
	font-weight: 800;
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.card__body {
	display: flex;
	flex-flow: column wrap;
}
.card__footer {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
}
.wrapper {
	display: flex;
	justify-content: center;
}
.error {
	color: var(--inlineerror-text-color);
}
</style>
