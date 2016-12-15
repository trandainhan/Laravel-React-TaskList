import { extendObservable, action } from "mobx"

function Task (data) {
	var props = {
		id: null,
		name: '',
	}
	extendObservable(this, props);
	data && this.populateData(data);
}

Task.prototype.populateData = action(function(data){
	data = data || {};
	this.id = data.id;
	this.name = data.name;
});

Task.prototype.updateName = function(value){
	this.name = value;
};

export default Task