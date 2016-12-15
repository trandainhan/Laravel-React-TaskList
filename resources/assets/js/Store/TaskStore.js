import { extendObservable, action } from "mobx";
import $ from 'jquery';
import Task from '../models/Task.js';

var BASE_URL = window.location.href;

function TaskStore () {
	extendObservable(this, {
		searchKey: '',
		tasks: [],
		filterTask: function () {
			var searchKey = this.searchKey
			var regx = new RegExp(searchKey, 'ig');
			if (!searchKey) {
				return this.tasks;
			}
			return this.tasks.filter(function (task) {
				return regx.test(task.name);
			})
		}
	})
}

TaskStore.prototype.updateSearchKey = function(value){
	this.searchKey = value;
};

TaskStore.prototype.loadTasksData = function() {
	$.get(BASE_URL + '/tasks', function (data) {
		var tasks = data.map(function (item) {
			return new Task(item);
		})
		this.tasks = tasks;
	}.bind(this))
};

TaskStore.prototype.addTask = function(task) {
	$.post(BASE_URL + '/tasks', {name: task.name}, function (data) {
		this.tasks.unshift(new Task(data));
	}.bind(this))
};

TaskStore.prototype.deleteTask = function(id) {
	var index = this.tasks.findIndex(function (task) {
		return task.id === id
	});
	$.ajax({
		url: BASE_URL + '/tasks/' + id,
		type: 'DELETE',
		success: function (data) {
			( index > -1 ) && this.tasks.splice(index, 1)
		}.bind(this)
	})
};

TaskStore.prototype.editTask = function(id, newTask){
	var index = this.tasks.findIndex(function (task) {
		return task.id === id
	});
	$.ajax({
		url: BASE_URL + '/tasks/' + id,
		type: 'PUT',
		data: {name: newTask.name},
		success: function (data) {
			(index > -1 ) && this.tasks.splice(index, 1, new Task(data))
		}.bind(this)
	})
};

export default TaskStore