import React from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import Task from '../models/Task.js';

var NewTask = React.createClass({

	componentWillMount: function () {
		this.task = new Task();
	},

	handleChange: function (e) {
		this.task.updateName(e.target.value);
	},

	handleClick: function () {
		this.handleAddTask()
	},

	handleKeyPress: function(e) {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	},

	handleAddTask: function () {
		this.props.onAddTask(toJS(this.task));
		this.task.updateName('');
	},

	render: function () {
		return (
			<div className='row new-task'>
				<div className='col-md-8'>
					<input
			            className='form-control'
			            placeholder='Task name ...'
			            value={this.task.name} 
			            onChange={this.handleChange}
			            onKeyPress={this.handleKeyPress}
			            >
			      	</input>
		      	</div>
		      	<div className='col-md-4'>
			      	<button
			      		className='btn btn-primary' 
			      		type='button'
			      		onClick={this.handleClick}
			      		>
			      		Add Task
			      	</button>	      		
		      	</div>
			</div>
		)
	}
})

export default observer(NewTask)