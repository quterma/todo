import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import date from "./../utils/date";

export const todoSlice = createSlice({
	name: "todo",
	initialState: {
		tasks: {
			"task-1": {
				content: "Finish the todo slice",
				created: "03.12.2020",
				priority: "major",
				shedule: "once",
				list: "coding",
				isCompleted: false,
				estimatedTime: "2 hours",
				steps: ["step-1", "step-2"],
			},
			"task-2": {
				content: "Finish antd",
				created: "09.12.2020",
				priority: "major",
				shedule: "once",
				list: "coding",
				isCompleted: false,
				estimatedTime: "2 hours",
				steps: ["step-3"],
			},
		},
		steps: {
			"step-1": {
				content: "write initial state",
				isCompleted: false,
				estimatedTiming: "20 min",
			},
			"step-2": {
				content: "write reducers",
				isCompleted: false,
				estimatedTiming: "20 min",
			},
			"step-3": {
				content: "install antd",
				isCompleted: false,
				estimatedTiming: "20 min",
			},
		},
	},
	reducers: {
		createTask: state => {
			const id = nanoid();
			const created = date();
			state.tasks[id] = { created, steps: [] };
		},
	},
});

export const { createTask } = todoSlice.actions;

export const selectTasks = state => state.todo.tasks;
export const selectSteps = state => state.todo.steps;

export default todoSlice.reducer;
