import { CityType } from '../02.objects/02'

export const changeBudget = (city: CityType, budget: number) => {
	city.governmentBuildings = city.governmentBuildings.map(el => {
		return {
			...el,
			budget: el.budget + budget,
		}
	})
}

export const repairHouse = (city: CityType) => {
	city.houses[1].repaired = true
}

export const toFireStaff = (city: CityType, count: number) => {
	city.governmentBuildings = city.governmentBuildings.map(el => {
		return {
			...el,
			staffCount: el.staffCount - count,
		}
	})
}

export const toHireStaff = (city: CityType, count: number) => {
	city.governmentBuildings = city.governmentBuildings.map(el => {
		return {
			...el,
			staffCount: el.staffCount + count,
		}
	})
}
