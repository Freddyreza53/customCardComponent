import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = ({properties}, dispatch) => {

	const {
		header1, 
		header2, 
		mainTitle, 
		mainSubheader1, 
		mainSubheader2,
		footer1,
		footer2,
		footer3,
		footer4,
		sysId
	} = properties;

	const handleClick = () => {
		dispatch('CUSTOM_CARD_COMPONENT#CLICKED', {sysId: sysId})
	}

	return (
		<div className='cardContainer' on-click={handleClick}>
			<header className='headerContainer'>
				<img src='https://images.squarespace-cdn.com/content/5aae96c455b02c9c8b54ad63/9fd5fd6e-3294-4468-af23-c49b241947ca/MicrosoftTeams-image+%283%29.png?format=1000w&content-type=image%2Fpng' height='50px' width='50px'/>
				<div>
					<div>{header1}</div>
					<div>{header2}</div>
				</div>
			</header>
			<main className='mainContainer'>
				<div className='mainTitle'>{mainTitle}</div>
				<div>{mainSubheader1}</div>
				<div>{mainSubheader2}</div>
			</main>
			<footer className='footerContainer'>
				<div>{footer1}</div>
				<div>{footer2}</div>
				<div>{footer3}</div>
				<div>{footer4}</div>
			</footer>	
		</div>
	);
};

createCustomElement('x-853443-custom-card-component', {
	renderer: {type: snabbdom},
	view,
	styles,
	properties: {
		header1: {default: 'NUM0203001'},
		header2: {default: 'In Progress'},
		mainTitle: {default: 'Service Portal Feature Update'},
		mainSubheader1: {default: ''},
		mainSubheader2: {default: ''},
		footer1: {default: ''},
		footer2: {default: ''},
		footer3: {default: ''},
		footer4: {default: ''},
		logoImage: {defualt: ''},
		sysId: {default: ''},
	},
	actionHandlers:{
		"CUSTOM_CARD_COMPONENT#CLICKED": ({action}) => {
			console.log(action.payload);
		}
	}
});
