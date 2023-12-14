import { CityType } from '../02.objects/02'

export const getStreetsTitlesOfGovermentBuildings = (city: CityType) => {
	return city.governmentBuildings.map(el => el.address.street.title)
}

export const getStreetsTitlesOfHouses = (city: CityType) => {
	return city.houses.map(el => el.address.street.title)
}
