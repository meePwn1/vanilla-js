import { addSkill, doesStudentLiveIn, makeStudentActive } from './03'
import { IStudent } from './03.types'

let student: IStudent
beforeEach(() => {
	student = {
		id: 1,
		name: 'Dimych',
		age: 32,
		isActive: false,
		address: {
			streetTitle: 'Surganova 2',
			city: {
				title: 'Minsk',
				countryTitle: 'Belarus',
			},
		},
		technologies: [
			{
				id: 1,
				title: 'HTML',
			},
			{
				id: 2,
				title: 'CSS',
			},
			{
				id: 3,
				title: 'React',
			},
		],
	}
})
test('new tech should be added', () => {
	expect(student.technologies.length).toBe(3)

	addSkill(student, 'JS')

	expect(student.technologies.length).toBe(4)
	expect(student.technologies[3].title).toBe('JS')
	expect(student.technologies[3].id).toBeDefined()
})

test('student should be is active', () => {
	expect(student.isActive).toBe(false)

	makeStudentActive(student)

	expect(student.isActive).toBe(true)
})

test('does student live in city', () => {
	const result = doesStudentLiveIn(student, 'Moscow')
	const result2 = doesStudentLiveIn(student, 'Minsk')

	expect(result).toBe(false)
	expect(result2).toBe(true)
})
