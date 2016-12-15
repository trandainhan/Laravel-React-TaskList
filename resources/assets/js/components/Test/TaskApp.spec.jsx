import React from 'react';
import expect from 'expect';

import ReactTestUtils from 'react-addons-test-utils';
import TaskApp from '../TaskApp.jsx';

describe('TaskApp', function () {
	context('test layout', function () {

		var shallowRenderer = ReactTestUtils.createRenderer();
		shallowRenderer.render(<TaskApp />);
		var component = shallowRenderer.getRenderOutput();

		it('should render success with div.task-all', function () {
			expect(component.type).toBe('div');
		});

		it('should render the right class', function(){
			should.equal(component.props.className, 'task-app');
		});
	})
});