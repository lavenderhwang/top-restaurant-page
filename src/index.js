import loadInitialPage from './loadInitialPage';
import renderMenuPage from './tabs/menu';
import renderContactPage from './tabs/contact';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
	const homeBtn = document.getElementById('home-btn');
	const menuBtn = document.getElementById('menu-btn');
	const contactBtn = document.getElementById('contact-btn');
	const logo = document.getElementById('logo');

	const nav1 = document.getElementById('nav-1');
	const nav2 = document.getElementById('nav-2');
	const nav3 = document.getElementById('nav-3');

	const clearPage = () => {
		document.getElementById('content').innerHTML = '';
	};

	logo.addEventListener('click', () => {
		clearPage();
		loadInitialPage();
		homeBtn.classList.add('show-nav');
		menuBtn.classList.remove('show-nav');
		contactBtn.classList.remove('show-nav');
		nav1.classList.add('toggle-nav');
		nav2.classList.remove('toggle-nav');
		nav3.classList.remove('toggle-nav');
	});

	homeBtn.addEventListener('click', () => {
		clearPage();
		loadInitialPage();
		homeBtn.classList.add('show-nav');
		menuBtn.classList.remove('show-nav');
		contactBtn.classList.remove('show-nav');
		nav1.classList.add('toggle-nav');
		nav2.classList.remove('toggle-nav');
		nav3.classList.remove('toggle-nav');
	});

	menuBtn.addEventListener('click', () => {
		clearPage();
		renderMenuPage();
		homeBtn.classList.remove('show-nav');
		menuBtn.classList.add('show-nav');
		contactBtn.classList.remove('show-nav');
		nav1.classList.remove('toggle-nav');
		nav2.classList.add('toggle-nav');
		nav3.classList.remove('toggle-nav');
	});

	contactBtn.addEventListener('click', () => {
		clearPage();
		renderContactPage();
		homeBtn.classList.remove('show-nav');
		menuBtn.classList.remove('show-nav');
		contactBtn.classList.add('show-nav');
		nav1.classList.remove('toggle-nav');
		nav2.classList.remove('toggle-nav');
		nav3.classList.add('toggle-nav');
	});

	loadInitialPage();
});
