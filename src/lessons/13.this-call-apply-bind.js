// this
// 1. Global scope
// 2. Function -> function() | arrow f()
// 3. call, apply, bind
// 4. function constructor

// 1. ==========================================================================

// console.log(this)
// browser -> window
// node -> undefined

// 2. ==========================================================================

// function foo() {
// 	console.log(this)
// }
// foo()

// with use strict -> undefined
// without use strict -> window

// -----------------------------------------------------------------------------

// let name = 'usman'
// const user = {
// 	name: 'Jenya',
// 	showName() {
// 		console.log(this.name)
// 	},
// 	showName2: () => {
// 		console.log(this.name)
// 	},
// 	showName3() {
// 		;(() => {
// 			console.log(this.name)
// 		})()
// 	},
// }
// user.showName3()

// arrow func showName2 -> window.name -> ''
// declare func showName -> user.name -> Jenya

// -----------------------------------------------------------------------------

// const car1 = {
// 	brand: 'bmw',
// }

// const car2 = {
// 	brand: 'kia',
// }

// function foo() {
// 	console.log(this.brand)
// }

// car1.f = foo
// car2.f = foo

// car1.f()
// car2.f()

// 3. ==========================================================================
// const bmw = {
// 	brand: 'bmw',
// 	showBrand(str1, str2) {
// 		console.log(str1 + ' ' + this.brand + str2)
// 	},
// }

// const kia = {
// 	brand: 'kia',
// 	showBrand() {
// 		console.log(this.brand)
// 	},
// }

// bmw.showBrand.call(kia, 'Its', '!')
// bmw.showBrand.apply(kia, ['Its', '!'])
// bmw.showBrand.bind(kia, 'Its', '!')()

// setTimeout(kia.showBrand.bind(bmw), 2000)
// setTimeout(() => kia.showBrand(), 2000)

// 4. ==========================================================================

// function CarConstructor(brand) {
// 	this.brand = brand
// }

// const car1 = new CarConstructor('kia')
// const car2 = new CarConstructor('bmw')

// console.log(car1)
// console.log(car2)

// Examples ====================================================================

const dialer = {
	name: 'Toyota',
	models: ['Yaris', 'Corolla', 'Prado'],
	showModelInDialer() {
		this.models.forEach(function (model) {
			console.log(`Dialer: ${this.name}, have: ${model}`)
		})
	},
}

dialer.showModelInDialer()
