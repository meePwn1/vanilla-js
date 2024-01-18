// 1
const a = +prompt('a?')
const b = +prompt('b?')
const c = a + b
console.log(c)

// 2
const readNumber = () => {
	let number
	do {
		number = prompt('number ?')
	} while (!isFinite(number))

	if (number === '' || number === 'null') return null

	return +number
}

// 3
const random = (min, max) => {
	return min + Math.random() * (max - min)
}

// 4
const randomInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
