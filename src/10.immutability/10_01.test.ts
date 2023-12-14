import {
	UserType,
	addNewBooksToUser,
	makeHairStyle,
	movedUser,
	removeBooksFromUser,
	updateBookUser,
	updateCompaniesUser,
} from './10_01'

let user: UserType
beforeEach(() => {
	user = {
		name: 'Azamat',
		age: 26,
		hair: 30,
		address: {
			title: 'Tashkent',
		},
		laptop: {
			title: 'Acer',
		},
		books: ['html', 'css', 'js', 'react'],
		companies: [
			{ id: 1, title: 'Епам' },
			{ id: 2, title: 'IT-INCUBATOR' },
		],
	}
})

test('reference type test', () => {
	const copyHair = makeHairStyle(user, 2)

	expect(copyHair).not.toBe(user)
})

test('data immutability test', () => {
	const userWithNewAddress = movedUser(user, 'Germany')

	expect(user).not.toBe(userWithNewAddress)
	expect(user.address).not.toBe(userWithNewAddress.address)
	expect(userWithNewAddress.address.title).toBe('Germany')
	expect(user.laptop).toBe(userWithNewAddress.laptop)
})

test('add data immutability test', () => {
	const modifiedUserBooks = addNewBooksToUser(user, ['ts', 'rest api'])

	expect(user.books).not.toBe(modifiedUserBooks.books)
	expect(modifiedUserBooks.books.length).toBe(6)
})

test('delete data immutability test', () => {
	const modifiedUserBooks = removeBooksFromUser(user, ['html', 'css'])

	expect(user.books).not.toBe(modifiedUserBooks.books)
	expect(modifiedUserBooks.books.length).toBe(2)
	expect(modifiedUserBooks.books.includes('html')).toBe(false)
})

test('update data immutability test', () => {
	const modifiedUserBooks = updateBookUser(user, 'js', 'ts')

	expect(user).not.toBe(modifiedUserBooks)
	expect(user.books).not.toBe(modifiedUserBooks.books)
	expect(modifiedUserBooks.books.length).toBe(4)
	expect(modifiedUserBooks.books.includes('ts')).toBe(true)
})

test('update companies data immutability test', () => {
	const modifiedUser = updateCompaniesUser(user, 'епам', 'epam')

	expect(user).not.toBe(modifiedUser)
	expect(user.books).toBe(modifiedUser.books)
	expect(user.companies[0].title).toBe('Епам')
	expect(modifiedUser.companies[0].title).toBe('EPAM')
	expect(modifiedUser.companies.length).toBe(2)
})
