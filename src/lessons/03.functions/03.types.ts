interface CityType {
	title: string
	countryTitle: string
}
interface AddresType {
	streetTitle: string
	city: CityType
}
interface TechnologiesType {
	id: number
	title: string
}

export interface IStudent {
	id: number
	name: string
	age: number
	isActive: boolean
	address: AddresType
	technologies: TechnologiesType[]
}
