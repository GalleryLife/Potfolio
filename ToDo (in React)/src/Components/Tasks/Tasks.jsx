import React, {useLayoutEffect, useRef, useState} from 'react';
import styles from './Tasks.module.scss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CheckIcon from '@mui/icons-material/Check';
import {Checkbox} from "@mui/material";

function Tasks({id, title, onEditValue, onRemoveTask}) {
		const [isChecked, setChecked] = useState(false);
		const [isEditMode, setEditMode] = useState(false);
		const [value, setValue] = useState(title);
		const editTitle = useRef(null)

		useLayoutEffect(() => {
				if (isEditMode && editTitle) {
						editTitle.current.focus();
				}
		}, [isEditMode])

		return (
			<>
					<div className={styles.task}>
							<div className={styles.removeIcon} onClick={() => onRemoveTask(id)}>
									<DeleteForeverIcon/>
							</div>
							{isEditMode ? (
								<input
									type="text"
									ref={editTitle}
									value={value}
									className={styles.changeTask}
									onKeyDown={(event) => {
											if (event.key === "Enter") {
													onEditValue(id, value)
													setEditMode(!isEditMode)
											}
									}}
									onChange={(event) => setValue(event.target.value)}
								/>
							) : (
								<h3 className={styles.value}>{value}</h3>
							)}
							<div className={styles.actions}>
									{isEditMode ? (
										<CheckIcon onClick={() => {
												onEditValue(id, value)
												setEditMode(!isEditMode)
										}}/>
									) : (
										<BorderColorIcon
											onClick={() => {
													setEditMode(!isEditMode)
											}}
										/>
									)}
									<Checkbox
										onChange={(event) => {
												setChecked(event.target.checked)
												setTimeout(() => onRemoveTask(id), 300)
										}}
									/>
							</div>
					</div>
			</>
		)
}

export default Tasks