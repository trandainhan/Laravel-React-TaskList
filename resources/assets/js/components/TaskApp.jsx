require('./TaskApp.scss');
import React from 'react';
import { observer } from 'mobx-react';

import Task from '../models/Task.js';
import TaskStore from '../Store/TaskStore.js';

import NewTask from './NewTask.jsx';
import TaskList from './TaskList.jsx';
import FilterTask from './FilterTask.jsx';

var TaskApp = React.createClass({

	componentWillMount: function () {
		this.store = new TaskStore();
	},

	componentDidMount: function () {
		this.store.loadTasksData();
	},

	handleAddTask: function (task) {
		this.store.addTask(task);
	},

	handleUpdateSearchKey: function (searchKey) {
		this.store.updateSearchKey(searchKey);
	},

	render: function () {
		var store = this.store;
		return (
			<div className="task-app">
				<h1>Task List</h1>
				<NewTask onAddTask={this.handleAddTask} />
				<FilterTask 
					searchKey={store.searchKey}
					onUpdateSeachKey={this.handleUpdateSearchKey} 
				/>
				<h3>Current Tasks</h3>
				<TaskList
					tasks={store.filterTask}
					store={store}
				/>
			</div>
		)
	}
})

export default observer(TaskApp)