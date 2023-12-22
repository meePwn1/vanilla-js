//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatString = (str, count, seperator) => {
	let result = ''
	for (let i = 0; i < count; i++) {
		result += str
		if (i !== count - 1) result += seperator
	}
	return result
}

repeatString('yo', 3, ',') //?
repeatString('yo', 3, ' ') //?

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart = (str, substr) => {
	return str.toLowerCase().startsWith(substr.toLowerCase())
}
checkStart('Incubator', 'inc') //?
checkStart('Incubator', 'yo') //?

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, num) => {
	return str.slice(0, num) + '...'
}
truncateString('Всем студентам инкубатора желаю удачи!', 10) //?

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = sentence => {
	if (!sentence) return null

	return sentence.split(' ').sort((a, b) => a.length - b.length)[0]
}
getMinLengthWord('Всем студентам инкубатора желаю удачи!') //?
getMinLengthWord('') //?

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = sentence => {
	return sentence
		.toLowerCase()
		.split(' ')
		.map(el => el[0].toUpperCase() + el.slice(1))
		.join(' ')
}

setUpperCase('всем стУдентам инкуБатора Желаю удачИ!') //?

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

const isIncludes = (str, substr) => {
	return substr.split('').every(el => str.toLowerCase().includes(el.toLowerCase()))
}

isIncludes('Incubator', 'table') //?
//?
