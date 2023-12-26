interface HousesAddressStreetType {
	title: string
}

interface HousesAddressType {
	number: number
	street: HousesAddressStreetType
}

interface HousesType {
	buildedAt: number
	repaired: boolean
	address: HousesAddressType
}

interface GovernmentBuildingsAddressStreetType {
	title: string
}

interface GovernmentBuildingsAddressType {
	street: GovernmentBuildingsAddressStreetType
}

interface GovernmentBuildingsType {
	type: string
	budget: number
	staffCount: number
	address: GovernmentBuildingsAddressType
}

export interface CityType {
	title: string
	houses: HousesType[]
	governmentBuildings: GovernmentBuildingsType[]
	citizensNumber: number
}
