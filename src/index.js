import loadInitialPage from './loadInitialPage';
import renderMenuPage from './tabs/menu';
import renderContactPage from './tabs/contact';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
	const homeBtn = document.getElementById('home-btn');
	const menuBtn = document.getElementById('menu-btn');
	const contactBtn = document.getElementById('contact-btn');

	const clearPage = () => {
		document.getElementById('content').innerHTML = '';
	};

	homeBtn.addEventListener('click', () => {
		clearPage();
		loadInitialPage();
	});

	menuBtn.addEventListener('click', () => {
		clearPage();
		renderMenuPage();
	});

	contactBtn.addEventListener('click', () => {
		clearPage();
		renderContactPage();
	});

	loadInitialPage();
});
