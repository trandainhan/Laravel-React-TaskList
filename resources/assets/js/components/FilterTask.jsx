import React from 'react';
import { observer } from 'mobx-react';

var FilterTask = function (props) {

	return (
		<div className='row filter-task'>
			<div className='col-md-8'>
				<input
		            className='form-control'
		            placeholder='Search a task ... '
		            value={props.searchKey} 
		            onChange={handleChange}>
		      	</input>
	      	</div>
		</div>
	)

	function handleChange (e) {
		props.onUpdateSeachKey(e.target.value);
	}
}

export default observer(FilterTask)