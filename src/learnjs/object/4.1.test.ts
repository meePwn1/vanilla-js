describe('object tasks', () => {
	describe('isEmpty object', () => {
		const isEmpty = (obj: Record<string, any>): boolean => {
			for (const key in obj) {
				if (key) return false
			}
			return true
		}

		test('empty object  test', () => {
			const schedule = {}
			const result = isEmpty(schedule)

			expect(result).toBe(true)
		})

		test('non-empty object test', () => {
			const schedule = { name: 'Azamat' }
			const result = isEmpty(schedule)

			expect(result).toBe(false)
		})
	})

	describe('sumSalaries', () => {
		const sumSalaries = (obj: Record<string, number>): number => {
			let sum = 0
			for (const key in obj) {
				sum += obj[key]
			}
			return sum
		}
		test('should be sum salaries 390', () => {
			const salaries = {
				John: 100,
				Ann: 160,
				Pete: 130,
			}

			const result = sumSalaries(salaries)

			expect(result).toBe(390)
		})

		test('should be sum salaries 0', () => {
			const salaries = {}

			const result = sumSalaries(salaries)

			expect(result).toBe(0)
		})
	})

	describe('multiplyNumeric', () => {
		const multiplyNumeric = (obj: Record<string, any>) => {
			for (const key in obj) {
				if (typeof obj[key] === 'number') obj[key] *= 2
			}
		}

		test('should be properties multiply', () => {
			const menu = {
				width: 200,
				height: 300,
				title: 'My menu',
			}
			multiplyNumeric(menu)

			expect(menu.height).toBe(600)
			expect(menu.width).toBe(400)
		})
	})
})
