const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const plus = document.getElementById('plus');
const division = document.getElementById('division');
const delAll = document.getElementById('deleted-all');
const delLine = document.getElementById('deleted-line');
const result = document.getElementById('enter');
const line = document.getElementById('line-text');
let value = '';
let prevOperator = '';
let lastNum = '';

zero.addEventListener('click', () => {
	value += zero.value;
	line.innerHTML = value;
});

one.addEventListener('click', () => {
	value += one.value;
	line.innerHTML = value;
});

two.addEventListener('click', () => {
	value += two.value;
	line.innerHTML = value;
});

three.addEventListener('click', () => {
	value += three.value;
	line.innerHTML = value;
});

four.addEventListener('click', () => {
	value += four.value;
	line.innerHTML = value;
});

five.addEventListener('click', () => {
	value += five.value;
	line.innerHTML = value;
});

six.addEventListener('click', () => {
	value += six.value;
	line.innerHTML = value;
});

seven.addEventListener('click', () => {
	value += seven.value;
	line.innerHTML = value;
});

eight.addEventListener('click', () => {
	value += eight.value;
	line.innerHTML = value;
});

nine.addEventListener('click', () => {
	value += nine.value;
	line.innerHTML = value;
});

plus.addEventListener('click', () => {
	if (value === '') {
		value = '0';
	}
	else if (/[+\-*\/]$/.test(value)) {
		value = value.slice(0, -1);
	}
	value += '+';
	prevOperator = '+';
	line.innerHTML = value;
});

minus.addEventListener('click', () => {
	if (value === '') {
		value = '0';
	}
	else if (/[+\-*\/]$/.test(value)) {
		value = value.slice(0, -1);
	}
	value += '-';
	prevOperator = '-';
	line.innerHTML = value;
});

multiply.addEventListener('click', () => {
	if (value === '') {
		value = '0';
	}
	else if (/[+\-*\/]$/.test(value)) {
		value = value.slice(0, -1);
	}
	value += '*';
	prevOperator = '*';
	line.innerHTML = value;
});

division.addEventListener('click', () => {
	if (value === '') {
		value = '0';
	}
	else if (/[+\-*\/]$/.test(value)) {
		value = value.slice(0, -1);
	}
	value += '/';
	prevOperator = '/';
	line.innerHTML = value;
});

result.addEventListener('click', () => {
	if (value === '') {
		line.innerHTML = '0';
	} else {
		if (/[+\-*\/]$/.test(value)) {
			value = value.slice(0, -1);
		}
		const result = eval(value);
		line.innerHTML = result.toString();
		value = result.toString();
		prevOperator = '';
	}
});

delAll.addEventListener('click', () => {
	value = '';
	prevOperator = '';
	line.innerHTML = '0';
});

delLine.addEventListener('click', () => {
	value = value.slice(0, -1);
	line.innerHTML = value;
});

