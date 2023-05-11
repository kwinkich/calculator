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
let line = document.getElementById('line-text');
let value = '';
let lastNum = '';

zero.addEventListener('click', () => {
	value !== '' ? value += '' : console.log('');
	value += zero.value;
	line.innerHTML = value;
})

one.addEventListener('click', () => {
	value !== '' ? value += '' : console.log('');
	value += one.value;
	line.innerHTML = value;
})
two.addEventListener('click', () => {
	value !== '' ? value += '' : console.log('');
	value += two.value;
	line.innerHTML = value;
})
three.addEventListener('click', () => {
	value !== '' ? value += '' : console.log('');
	value += three.value;
	line.innerHTML = value;
})

four.addEventListener('click', () => {
	value !== '' ? value += '' : console.log('');
	value += four.value;
	line.innerHTML = value;
})

five.addEventListener('click', () => {
	value !== '' ? value += '' : console.log('');
	value += five.value;
	line.innerHTML = value;
})

six.addEventListener('click', () => {
	value !== '' ? value += '' : console.log('');
	value += six.value;
	line.innerHTML = value;
})

seven.addEventListener('click', () => {
	value !== '' ? value += '' : console.log('');
	value += seven.value;
	line.innerHTML = value;
})

eight.addEventListener('click', () => {
	value !== '' ? value += '' : console.log('');
	value += eight.value;
	line.innerHTML = value;
})

nine.addEventListener('click', () => {
	value !== '' ? value += '' : console.log('');
	value += nine.value;
	line.innerHTML = value;
})

plus.addEventListener('click', () => {
	if (value !== '' && /[+\-*]$/.test(value)) {
		// если последний символ - это уже оператор, заменяем его
		value = value.slice(0, -1) + '+';
	} else {
		// иначе добавляем новый оператор
		value += '+';
	}
	line.innerHTML = value;
});

multiply.addEventListener('click', () => {
	if (value !== '' && /[+\-*]$/.test(value)) {
		value = value.slice(0, -1) + '*';
	} else {
		value += '*';
	}
	line.innerHTML = value;
});

division.addEventListener('click', () => {
	if (value !== '' && /[+\-*]$/.test(value)) {
		value = value.slice(0, -1) + '/';
	} else {
		value += '/';
	}
	line.innerHTML = value;
});

minus.addEventListener('click', () => {
	if (value !== '' && /[+\-*]$/.test(value)) {
		value = value.slice(0, -1) + '-';
	} else {
		value += '-';
	}
	line.innerHTML = value;
});

delAll.addEventListener('click', () => {
	line.innerHTML = '0';
	value = '';
});

result.addEventListener('click', () => {
	const result = eval(value);
	value = result;
	line.innerHTML = value;
});

delLine.addEventListener('click', () => {
	value = value.slice(0, -1);
	line.innerHTML = value;
});
