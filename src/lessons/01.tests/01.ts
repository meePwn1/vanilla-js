export const sum = (a: number, b: number) => {
	return a + b
}

export const mult = (a: number, b: number) => {
	return a * b
}

export const splitIntoWords = (sentense: string) => {
	return sentense
		.split(' ')
		.filter(el => el !== '' && el !== '-')
		.map(el => el.toLowerCase().replace('!', '').replace('.', ''))
}
