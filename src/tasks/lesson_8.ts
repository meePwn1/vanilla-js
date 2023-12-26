// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
	// console.log(nums)
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
	return nums.reduce((acc, cur) => acc + cur, 0)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
	//...здесь пишем код.

	if (a + b > c && b + c > a && a + c > b) {
		if (a === b && a === c) {
			return '10'
		} else if (a === b || b === c || a === c) {
			return '01'
		} else {
			return '11'
		}
	} else {
		return '00'
	}
	// В return стоит "заглушка", чтоб typescript не ругался
}
getTriangleType(10, 2, 2) //?

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
	return Array.from(`${number}`).reduce((acc, cur) => acc + Number(cur), 0)
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
	let even = 0
	let odd = 0
	arr.forEach((el, i) => (i % 2 ? (odd += el) : (even += el)))
	return even > odd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
	const result = []
	for (const item of array) {
		if (Number.isInteger(item) && item > 0) {
			const mult = item * item
			result.push(mult)
		}
	}
	return result
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался

	return (N * (N + 1)) / 2
}

// ...и "лапку" вверх!!!!

// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:

// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
	const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
	const result: number[] = []
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался

	for (const banknote of banknotes) {
		const banknoteCount = Math.trunc(amountOfMoney / banknote)
		if (banknotes) {
			result.push(...Array(banknoteCount).fill(banknote))
			amountOfMoney -= banknoteCount * banknote
		}
	}

	return result
}
