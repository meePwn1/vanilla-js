export type UserType = {
	name: string
	age: number
	hair: number
	address: {
		title: string
	}
	laptop: {
		title: string
	}
	books: string[]
	companies: { id: number; title: string }[]
}

export const makeHairStyle = (user: UserType, power: number): UserType => {
	return {
		...user,
		hair: user.hair / power,
	}
}

export const movedUser = (user: UserType, city: string): UserType => {
	return {
		...user,
		address: { ...user.address, title: city },
	}
}

export const addNewBooksToUser = (user: UserType, arr: string[]): UserType => {
	return {
		...user,
		books: [...user.books, ...arr],
	}
}

export const removeBooksFromUser = (user: UserType, arr: string[]): UserType => {
	return {
		...user,
		books: user.books.filter(el => !arr.includes(el)),
	}
}

export const updateBookUser = (user: UserType, oldBook: string, newBook: string): UserType => {
	return {
		...user,
		books: user.books.map(el => (el === oldBook ? newBook : el)),
	}
}

export const updateCompaniesUser = (user: UserType, oldName: string, newName: string): UserType => {
	return {
		...user,
		companies: user.companies.map(el =>
			el.title.toLowerCase() === oldName ? { ...el, title: newName.toUpperCase() } : el
		),
	}
}
