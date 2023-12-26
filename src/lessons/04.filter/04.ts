import { CityType } from '../02.objects/02'

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
	city.houses = city.houses.filter(el => el.address.street.title !== street)
}
