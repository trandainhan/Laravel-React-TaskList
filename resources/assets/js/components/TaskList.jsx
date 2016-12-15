import React from 'react';
import { observer } from 'mobx-react';
import Task from './Task.jsx';

var TaskList = function (props) {

	var tasks = props.tasks;
	var store = props.store;
	return (
		<div>
			{
				tasks.map(function (task, index) {
					return (
						<Task key={task.id || index} task={task} store={store} />
					)
				})
			}
		</div>
	)
}

export default observer(TaskList)