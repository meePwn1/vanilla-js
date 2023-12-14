import { IStudent } from './03.types'

export const student: IStudent = {
	id: 1,
	name: 'Dimych',
	age: 32,
	isActive: false,
	address: {
		streetTitle: 'Surganova 2',
		city: {
			title: 'Minsk',
			countryTitle: 'Belarus',
		},
	},
	technologies: [
		{
			id: 1,
			title: 'HTML',
		},
		{
			id: 2,
			title: 'CSS',
		},
		{
			id: 3,
			title: 'React',
		},
	],
}

export const addSkill = (st: IStudent, skill: string) => {
	st.technologies.push({
		id: new Date().getTime(),
		title: skill,
	})
}

export const makeStudentActive = (st: IStudent) => {
	st.isActive = true
}

export const doesStudentLiveIn = (st: IStudent, city: string) => {
	return st.address.city.title === city
}
