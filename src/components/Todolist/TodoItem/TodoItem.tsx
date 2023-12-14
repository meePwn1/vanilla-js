import { ChangeEvent, FC } from 'react'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'
import { TaskType } from '../Todolist'
import style from './TodoItem.module.scss'

interface TodoItemType {
	task: TaskType
	todoId: string
	removeTask: (todoId: string, taskId: string) => void
	changeTaskStatus: (todoId: string, id: string, isDone: boolean) => void
}

const TodoItem: FC<TodoItemType> = ({ todoId, task, removeTask, changeTaskStatus }) => {
	const onClickHandle = () => {
		removeTask(todoId, task.id)
	}
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		changeTaskStatus(todoId, task.id, e.target.checked)
	}
	return (
		<li key={task.id}>
			<label htmlFor={task.id}>
				<Input id={task.id} type='checkbox' onChange={onChangeHandler} checked={task.isDone} />
				<span className={task.isDone ? style.gray : ''} style={{ userSelect: 'none' }}>
					{task.title}
				</span>
			</label>
			<Button onClick={onClickHandle}>✖️</Button>
		</li>
	)
}

export default TodoItem
