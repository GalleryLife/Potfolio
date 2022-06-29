import {useState} from 'react'
import styles from './App.module.scss';
import SetTask from "./Components/SetTask/SetTask";
import Tasks from "./Components/Tasks/Tasks";

import './reset.scss';

function App() {
		const [tasks, setTasks] = useState([])

		const generateId = Math.random()
		const addTask = (value) => {
				if (value) {

						setTasks(
							[...tasks,
									{
											id: generateId,
											value,
									}]
						)
				}
		}
		const onRemoveTask = (id) => {
				setTasks(tasks.filter((item) => id !== item.id))
		}
		const onEditValue = (data, id) => {
				setTasks(tasks.map((task) => (
					task.id === id ? {
							...task,
							value: data
					} : task)))
		}

		return (
			<div className={styles.App}>
					<section className={styles.wrapperSetTask}>
							<SetTask addTask={addTask}/>
					</section>
					{tasks.length <= 0 && <h1>No added task</h1>}
					{tasks.map(task => (
						<Tasks
							key={task.id}
							id={task.id}
							title={task.value}
							onRemoveTask={onRemoveTask}
							onEditValue={onEditValue}
						/>
					))}
			</div>
		)
}

export default App
