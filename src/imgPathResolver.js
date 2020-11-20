import img0 from './assets/0.jpg';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';

const rx = /assets\/\d/;
const arr = [img0, img1, img2, img3, img4, img5, img6];

const resolve = (path) => {
	if (rx.test(path)) {
		const index = path.match(/\d/)[0];
		return arr[index];
	} else {
		return path;
	}
};

export default resolve;
