import React, {useState} from 'react';
import styles from './SetTask.module.scss';

function SetTask({addTask}) {
		const [value, setValue] = useState('')

		return (
			<section className={styles.setTaskWrapper}>
					<input
						className={styles.input}
						value={value}
						type="text"
						onKeyDown={(event) => {
								if (event.key === "Enter") {
										addTask(value)
								}
						}}
						onChange={(event) => {
								setValue(event.target.value)
						}}/>
					<button
						className={value ? (
							styles.active) : styles.deactive}
						onClick={() => {
								addTask(value)
								setValue('')
						}}
					>Set task
					</button>
			</section>
		)
}

export default SetTask;