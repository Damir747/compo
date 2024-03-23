const shuka = (number) => {
	if (number === 0) {
		return '';
	}
	if (number === 1) {
		return ' штука';
	}
	if (number > 4) {
		return ' штук';
	}
	return ' штуки';
}
const funcMinus = function () {
	let count = +valueField.textContent.split(' ')[0];
	if (count > 0) {
		count--;
		valueField.textContent = count + shuka(count);
	}
};

const funcPlus = function () {
	let count = +valueField.textContent.split(' ')[0];
	count++;
	valueField.textContent = count + shuka(count);
};

const valueField = document.getElementById('sum-value');
const buttonMinus = document.getElementById('button__minus');
if (valueField && buttonMinus) {
	buttonMinus.addEventListener('click', () => funcMinus());
}
const buttonPlus = document.getElementById('button__plus');
if (valueField && buttonPlus) {
	buttonPlus.addEventListener('click', () => funcPlus());
}
