import { useMemo } from 'react'
import { FilterValueType } from '../../App'
import { TaskType } from '../Todolist/Todolist'

export const useFilterTasks = (tasks: TaskType[], filter: FilterValueType) => {
	const filteredTasks: TaskType[] = useMemo(() => {
		switch (filter) {
			case 'Active':
				return tasks.filter(task => task.isDone === false)
				break
			case 'Completed':
				console.log('asd')
				return tasks.filter(task => task.isDone === true)
				break
			default:
				return tasks
		}
	}, [filter, tasks])
	return filteredTasks
}
