import firebase from 'firebase/app';
import 'firebase/firestore';
import persons from './persons';

const firebaseConfig = {
	apiKey: 'AIzaSyDUvLi1J_4YgENDwtzA-PuKkEhV60O5Q5g',
	authDomain: 'congratulation-cards.firebaseapp.com',
	databaseURL: 'https://congratulation-cards.firebaseio.com',
	projectId: 'congratulation-cards',
	storageBucket: 'congratulation-cards.appspot.com',
	messagingSenderId: '437745161637',
	appId: '1:437745161637:web:5dd9dc7fe0dd7d3cf7444c',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

class API {
	constructor(args = {}) {
		this.db = db;
		this.persons = args.persons || [];
	}

	async getById(id) {
		const _id = Number.parseInt(id);
		if (_id <= 6) {
			//local saved data, always working
			const personCard = persons.find((pers) => pers.id === _id);
			console.log('personCard', personCard);
			return personCard;
		} else {
			//sync with firebase
			const docRef = this.db.doc(`persons/${_id}`);
			const doc = await docRef.get();
			if (doc?.exists) {
				const personCard = doc.data();
				console.log('personCard', personCard);
				return personCard;
			}
		}
	}

	async set(personCard) {
		await db
			.collection('persons')
			.doc(`${personCard.id}`)
			.set(personCard);
	}

	async getLength() {
		const { size } = await db.collection('persons').get();
		return size;
	}
	async getAllCollection() {
		this.persons = await db.collection('persons').get();
		return this.persons;
	}
}

const Persons = new API();
export default Persons;
