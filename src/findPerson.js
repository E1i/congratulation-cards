import persons from './persons';

const fetchPerson = (id) => {
	return persons.find((pers) => pers.id === id);
};

export default fetchPerson;
