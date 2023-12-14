import { increaseAge } from './09'

type UserType = {
	name: string
	age: number
}
let user: UserType
beforeEach(() => {
	user = {
		name: 'Azamat',
		age: 26,
	}
})

test('test', () => {
	increaseAge(user)

	expect(user.age).toBe(27)
})
