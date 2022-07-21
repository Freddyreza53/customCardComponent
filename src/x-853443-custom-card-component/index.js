import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>
			
		</div>
	);
};

createCustomElement('x-853443-custom-card-component', {
	renderer: {type: snabbdom},
	view,
	styles
});
