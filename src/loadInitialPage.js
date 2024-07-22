import hero from '../assets/hero.png';

function loadInitialPage() {
	const content = document.getElementById('content');

	// Create and append main section
	const main = document.createElement('main');

	const heroHeader = document.createElement('h1');
	heroHeader.textContent = "Welcome to Papa's Pizzera!";
	main.appendChild(heroHeader);

	const heroTagline = document.createElement('h3');
	heroTagline.textContent = 'A Family Tradition of Pizza Perfection';
	main.appendChild(heroTagline);

	const heroImage = document.createElement('img');
	heroImage.src = hero;
	heroImage.alt = 'man holding pizza';
	main.appendChild(heroImage);

	const heroDescription = document.createElement('p');
	heroDescription.textContent =
		"At Papa's Pizzeria, we craft every pizza with the same love and care that's been passed down through generations. From our hand-tossed dough to our farm-fresh toppings, each bite is a taste of tradition. Whether you're craving a classic Margherita or our signature Quattro Stragioni, we've got you covered.";
	main.appendChild(heroDescription);

	content.appendChild(main);
}

export default loadInitialPage;
