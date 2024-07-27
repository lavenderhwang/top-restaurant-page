import pepperoni from '../../assets/pepperoni.png';
import cheese from '../../assets/cheese.png';
import combo from '../../assets/combo.png';
import combo2 from '../../assets/combo2.png';
import margherita from '../../assets/margherita.png';
import hawaiian from '../../assets/hawaiian.png';
import './menu.css';

function renderMenuPage() {
	const content = document.getElementById('content');

	// Create and append main section
	const main = document.createElement('main');
	main.classList.add('main');

	const grid = document.createElement('div');
	grid.classList.add('grid');

	const heroHeader = document.createElement('h1');
	heroHeader.textContent = 'Menu';
	main.appendChild(heroHeader);

	// Pepperoni Pizza
	const pepperoniContainer = document.createElement('div');

	const pepperoniLabel = document.createElement('h3');
	pepperoniLabel.textContent = 'Pepperoni';

	const pepperoniImg = document.createElement('img');
	pepperoniImg.src = pepperoni;
	pepperoniImg.alt = 'pepperoni pizza';

	const pepperoniIngredients = document.createElement('p');
	pepperoniIngredients.textContent = 'Pepperoni';

	const pepperoniComponents = [
		pepperoniLabel,
		pepperoniImg,
		pepperoniIngredients,
	];
	addToContainer(pepperoniContainer, pepperoniComponents);

	// Cheese Pizza
	const cheeseContainer = document.createElement('div');

	const cheeseLabel = document.createElement('h3');
	cheeseLabel.textContent = '3 Cheese';

	const cheeseImg = document.createElement('img');
	cheeseImg.src = cheese;
	cheeseImg.alt = 'cheese pizza';

	const cheeseIngredients = document.createElement('p');
	cheeseIngredients.textContent = 'Mozzarella, Parmesan, Gouda';

	const cheeseComponents = [cheeseLabel, cheeseImg, cheeseIngredients];
	addToContainer(cheeseContainer, cheeseComponents);

	// Combo Pizza
	const comboContainer = document.createElement('div');

	const comboLabel = document.createElement('h3');
	comboLabel.textContent = 'Combination';

	const comboImg = document.createElement('img');
	comboImg.src = combo;
	comboImg.alt = 'combo pizza';

	const comboIngredients = document.createElement('p');
	comboIngredients.textContent = 'Mushrooms, Bacon, Olives, Fresh Basil';

	const comboComponents = [comboLabel, comboImg, comboIngredients];
	addToContainer(comboContainer, comboComponents);

	// Combo2 Pizza
	const combo2Container = document.createElement('div');

	const combo2Label = document.createElement('h3');
	combo2Label.textContent = 'Combination 2';

	const combo2Img = document.createElement('img');
	combo2Img.src = combo2;
	combo2Img.alt = 'combo 2 pizza';

	const combo2Ingredients = document.createElement('p');
	combo2Ingredients.textContent =
		'Bell Peppers, Mushrooms, Olives, Tomatoes, Oregano';

	const combo2Components = [combo2Label, combo2Img, combo2Ingredients];
	addToContainer(combo2Container, combo2Components);

	//Margherita Pizza
	const margheritaContainer = document.createElement('div');

	const margheritaLabel = document.createElement('h3');
	margheritaLabel.textContent = 'Margherita';

	const margheritaImg = document.createElement('img');
	margheritaImg.src = margherita;
	margheritaImg.alt = 'margheritapizza';

	const margheritaIngredients = document.createElement('p');
	margheritaIngredients.textContent = 'Tomatoes, Mozzerella, Fresh Basil';

	const margheritaComponents = [
		margheritaLabel,
		margheritaImg,
		margheritaIngredients,
	];
	addToContainer(margheritaContainer, margheritaComponents);

	// Hawaiian Pizza
	const hawaiianContainer = document.createElement('div');

	const hawaiianLabel = document.createElement('h3');
	hawaiianLabel.textContent = 'Hawaiian';

	const hawaiianImg = document.createElement('img');
	hawaiianImg.src = hawaiian;
	hawaiianImg.alt = 'hawaiian pizza';

	const hawaiianIngredients = document.createElement('p');
	hawaiianIngredients.textContent = 'Mozzerella, Ham, Pineapple';
	main.appendChild(hawaiianIngredients);

	const hawaiianComponents = [hawaiianLabel, hawaiianImg, hawaiianIngredients];
	addToContainer(hawaiianContainer, hawaiianComponents);

	/* add classes */
	const pizzaLabels = [
		pepperoniLabel,
		hawaiianLabel,
		cheeseLabel,
		comboLabel,
		combo2Label,
		margheritaLabel,
	];
	for (let i = 0; i < pizzaLabels.length; i++) {
		pizzaLabels[i].classList.add('pizza-label');
	}

	const gridChildren = {
		cheeseContainer,
		comboContainer,
		combo2Container,
		pepperoniContainer,
		margheritaContainer,
		hawaiianContainer,
	};
	for (let i = 0; i < gridChildren.length; i++) {
		gridChildren[i].classList.add('grid');
	}

	main.appendChild(grid);
	content.appendChild(main);

	function addToContainer(container, components) {
		for (let i = 0; i < components.length; i++) {
			container.appendChild(components[i]);
		}

		container.classList.add('grid-card');

		grid.appendChild(container);
	}
}

export default renderMenuPage;
