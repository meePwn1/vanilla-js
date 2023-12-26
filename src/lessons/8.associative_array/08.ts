type UsersType = {
	[key: string]: { id: string; name: string }
}

const users: UsersType = {
	'1': { id: '10', name: 'Cristian' },
	'2': { id: '20', name: 'david' },
	'3': { id: '30', name: 'joe' },
	'4': { id: '40', name: 'tom' },
	'5': { id: '50', name: 'qwe' },
	'6': { id: '60', name: 'op' },
	'7': { id: '70', name: 'name' },
	'8': { id: '80', name: 'guy' },
}

const user = { id: '100', name: 'blabla' }

users[user.id] = user
// delete users[user.id]
users[user.id].name = 'hello'
