import React from 'react';
import { observer } from 'mobx-react';
import confirm from './Confirm.jsx';

var Task = React.createClass({

	propTypes: {
		store: React.PropTypes.object.isRequired,
		task: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
		return {
			isEdit: false
		}
	},

	handleDeleteTask: function () {
		var props = this.props;
		var id = props.task.id;
		return confirm('Are you sure?', {
			description: 'Would you like to remove this item from the list?',
			confirmLabel: 'Yes',
			abortLabel: 'No'
		}).then(function () {
			props.store.deleteTask(id);
		})
	},

	handleEditTask: function () {
		this.setState({
			isEdit: true
		})
	},

	renderView: function () {
		var task = this.props.task;
		return (
			<div className='row task'>
				<p className='col-md-8'>{task.name}</p>
				<div className='col-md-4'>
					<button 
						className='btn btn-primary'
						type='button'
			      		onClick={this.handleEditTask}
			      		>
			      		Edit
		      		</button>
					<button 
						className='btn btn-default'
						type='button'
			      		onClick={this.handleDeleteTask}
			      		>
			      		Delete
		      		</button>					
				</div>
			</div>
		)
	},

	handleChangeTaskname: function (e) {
		this.props.task.updateName(e.target.value);
	},

	handleKeyPress: function (e) {
		if (e.key === 'Enter') {
			this.handleSaveTask();
		}
	},

	handleSaveTask: function () {
		var props = this.props;
		var task = props.task;
		var id = task.id;
		this.setState({
			isEdit: false
		}, function () {
			props.store.editTask(id, task);
		})
	},

	renderEdit: function () {
		var task = this.props.task;
		return (
			<div className='row task'>
				<div className='col-md-8'>
					<input
			            className="form-control" 
			            value={task.name} 
			            onChange={this.handleChangeTaskname}
			            onKeyPress={this.handleKeyPress}
			        />
		        </div>
		        <div className='col-md-4'>
			        <button 
						className='btn btn-primary'
						type='button'
			      		onClick={this.handleSaveTask}
			      		>
			      		Save
		      		</button>
		        </div>
			</div>
		)
	},

	render: function () {
		if (this.state.isEdit) {
			return this.renderEdit();
		}
		return this.renderView();
	}
})

export default observer(Task)