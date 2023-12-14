import { ChangeEvent, FC, KeyboardEvent, useMemo, useState } from 'react'
import { FilterValueType } from '../../App'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import TodoItem from './TodoItem/TodoItem'

export interface TaskType {
	id: string
	title: string
	isDone: boolean
}

interface TodolistPropsType {
	id: string
	title: string
	filter: FilterValueType
	tasks: TaskType[]
	createTask: (id: string, task: string) => void
	removeTask: (todoId: string, taskId: string) => void
	changeTaskStatus: (todoId: string, taskId: string, isDone: boolean) => void
	changeFilter: (todoId: string, filterValue: FilterValueType) => void
}

const Todolist: FC<TodolistPropsType> = ({
	id,
	title,
	tasks,
	filter,
	createTask,
	removeTask,
	changeTaskStatus,
	changeFilter,
}) => {
	const [task, setTask] = useState<string>('')
	const [error, setError] = useState<string>('')

	const filteredTaks = useMemo(() => {
		switch (filter) {
			case 'Active':
				return tasks.filter(task => !task.isDone)
			case 'Completed':
				return tasks.filter(task => task.isDone)
			default:
				return tasks
		}
	}, [tasks, filter])

	const addNewTask = () => {
		if (task.trim() !== '') {
			createTask(id, task.trim())
		} else {
			setError('Title is required')
		}
		setTask('')
	}
	const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addNewTask()
		}
	}
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (!(e.target.value.length > 15)) {
			setTask(e.target.value)
			setError('')
		} else {
			setError('max string length 15')
		}
	}

	return (
		<div className='todolist'>
			<div className='todolist__header'>
				<h3>{title}</h3>
				<div className='todolist__new-task'>
					<Input
						error={error}
						onKeyDown={keyDownHandler}
						value={task}
						onChange={onChangeHandler}
						placeholder='New task'
					/>
					<Button disabled={!task} onClick={addNewTask}>
						Add New
					</Button>
				</div>
				{error && <div style={{ color: 'red' }}>{error}</div>}
			</div>
			<div className='todolist__body'>
				<ul className='todolist__list'>
					{filteredTaks.map(task => {
						return (
							<TodoItem
								key={task.id}
								todoId={id}
								task={task}
								removeTask={removeTask}
								changeTaskStatus={changeTaskStatus}
							/>
						)
					})}
				</ul>
				<div className='todolist__btns'>
					<Button active={filter === 'All'} onClick={() => changeFilter(id, 'All')}>
						All
					</Button>
					<Button active={filter === 'Active'} onClick={() => changeFilter(id, 'Active')}>
						Active
					</Button>
					<Button active={filter === 'Completed'} onClick={() => changeFilter(id, 'Completed')}>
						Completed
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Todolist
