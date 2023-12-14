interface PropsType {
	name: string
	age: number
	lessons: { title: number }[]
	address: {
		street: {
			title: string
		}
	}
}
let props: PropsType
beforeEach(() => {
	props = {
		name: 'Azamat',
		age: 26,
		lessons: [{ title: 1 }, { title: 2 }],
		address: {
			street: {
				title: 'Durmon yuli street',
			},
		},
	}
})

test('should correctly destructure object properties', () => {
	const { name, age, lessons } = props

	expect(name).toBe('Azamat')
	expect(age).toBe(26)
	expect(lessons.length).toBe(2)
})

test('should correctly destructure array properties', () => {
	const [a, b] = props.lessons

	expect(a.title).toBe(1)
	expect(b.title).toBe(2)
})
