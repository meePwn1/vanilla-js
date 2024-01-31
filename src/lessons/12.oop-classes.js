class User {
	constructor(name, site, dob) {
		this.name = name
		this.site = site
		this.dateOfBirth = dob
		this.counter = 0
	}
	hello() {
		console.log(`Hello ${this.name} from ${this.site}`)
		this.counter++
	}
}

const u1 = new User('Dima', 'asd.com', new Date(1997, 1, 2))
const u2 = new User('Vova', 'zxc.com', new Date(1990, 10, 1))

u1.hello()
u2.hello()

console.log(u1.counter)
console.log(u2.counter)
