import { CityType } from '../02.objects/02'
import { demolishHousesOnTheStreet } from './04'

let city: CityType

beforeEach(() => {
	city = {
		title: 'New York',
		houses: [
			{ buildedAt: 2012, repaired: false, address: { street: { title: 'White street' }, number: 100 } },
			{ buildedAt: 2008, repaired: false, address: { street: { title: 'Happy street' }, number: 100 } },
			{ buildedAt: 2020, repaired: false, address: { street: { title: 'Hogwarts street' }, number: 200 } },
		],
		governmentBuildings: [
			{
				type: 'HOSPITAL',
				budget: 200000,
				staffCount: 200,
				address: {
					street: {
						title: 'Central Str',
					},
				},
			},
			{
				type: 'FIRE-STATION',
				budget: 500000,
				staffCount: 1000,
				address: {
					street: {
						title: 'Souths park str',
					},
				},
			},
		],
		citizensNumber: 1000000,
	}
})

test('Houses should be destroyed', () => {
	expect(city.houses.length).toBe(3)

	demolishHousesOnTheStreet(city, 'White street')

	expect(city.houses.length).toBe(2)
})
