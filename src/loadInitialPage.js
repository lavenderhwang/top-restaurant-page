import hero from '../assets/hero.png';
import './home.css';

function loadInitialPage() {
	const content = document.getElementById('content');

	// Create and append main section
	const main = document.createElement('main');
	main.classList.add('container');
	main.classList.add('no-scroll');

	const heroHeader = document.createElement('h1');
	heroHeader.classList.add('hero-header');
	const welcome = document.createElement('h1');
	welcome.textContent = 'welcome to';
	welcome.classList.add('welcome');
	const title = document.createElement('h1');
	title.textContent = "Papa's Pizzeria";
	title.classList.add('title');
	heroHeader.appendChild(welcome);
	heroHeader.appendChild(title);
	main.appendChild(heroHeader);

	const heroImage = document.createElement('img');
	heroImage.src = hero;
	heroImage.alt = 'man holding pizza';
	heroImage.classList.add('hero-img');
	main.appendChild(heroImage);

	const heroDescription = document.createElement('p');
	heroDescription.textContent =
		"We craft every pizza with the same love and care that's been passed down through generations. From our hand-tossed dough to our farm-fresh toppings, each bite is a taste of tradition.";
	heroDescription.classList.add('hero-description');
	main.appendChild(heroDescription);

	const menuBtn = document.createElement('button');
	menuBtn.classList.add('menu-btn');
	menuBtn.type = 'button';
	menuBtn.textContent = 'BROWSE MENU';
	main.appendChild(menuBtn);

	const textContainer = document.createElement('div');
	textContainer.classList.add('text-container');
	textContainer.appendChild(heroHeader);
	textContainer.appendChild(heroDescription);
	textContainer.appendChild(menuBtn);

	main.appendChild(textContainer);

	content.appendChild(main);
}

export default loadInitialPage;
