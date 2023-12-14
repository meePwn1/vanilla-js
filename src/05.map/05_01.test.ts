import { PeopleType, transfomrArrayObject } from './05_01'

let people: PeopleType[]
beforeEach(() => {
	people = [
		{ name: 'Andrew Ivanov', age: 33 },
		{ name: 'Alexander Petrov', age: 25 },
		{ name: 'Dmitriy Sidrov', age: 18 },
	]
})

test('should have a stack property', () => {
	const transformedPeople = transfomrArrayObject(people)

	expect(transformedPeople[0].stack).toEqual(['html', 'css', 'js', 'tdd', 'react'])
	expect(transformedPeople[0].firstName).toBe('Andrew')
	expect(transformedPeople[0].lastName).toBe('Ivanov')
})
