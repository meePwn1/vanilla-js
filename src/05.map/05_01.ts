export type PeopleType = {
	name: string
	age: number
}

export const transfomrArrayObject = (arr: PeopleType[]) => {
	const stack = ['html', 'css', 'js', 'tdd', 'react']
	return arr.map(el => {
		return {
			stack,
			firstName: el.name.split(' ')[0],
			lastName: el.name.split(' ')[1],
		}
	})
}
