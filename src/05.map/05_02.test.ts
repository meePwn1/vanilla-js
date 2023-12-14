import { CityType } from '../02.objects/02'
import { getStreetsTitlesOfGovermentBuildings, getStreetsTitlesOfHouses } from './05_02'

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

test('list of streets titles of goverments buildings', () => {
	const streets = getStreetsTitlesOfGovermentBuildings(city)

	expect(streets.length).toBe(2)
	expect(streets).toEqual(['Central Str', 'Souths park str'])
})

test('list of streets titles', () => {
	const streets = getStreetsTitlesOfHouses(city)

	expect(streets.length).toBe(3)
	expect(streets).toEqual(['White street', 'Happy street', 'Hogwarts street'])
})
