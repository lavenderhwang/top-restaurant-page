import loadInitialPage from './loadInitialPage';
import renderMenuPage from './tabs/menu';
import renderContactPage from './tabs/contact';

document.addEventListener('DOMContentLoaded', () => {
	const homeBtn = document.getElementById('home-btn');
	const menuBtn = document.getElementById('menu-btn');
	const contactBtn = document.getElementById('contact-btn');

	loadInitialPage();
	renderMenuPage();
	renderContactPage();
});
