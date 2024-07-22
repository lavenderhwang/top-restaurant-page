import pepperoni from '../../assets/pepperoni.png';
import cheese from '../../assets/cheese.png';
import combo from '../../assets/combo.png';
import combo2 from '../../assets/combo2.png';
import margherita from '../../assets/margherita.png';
import hawaiian from '../../assets/hawaiian.png';

function renderMenuPage() {
	const content = document.getElementById('content');

	// Create and append main section
	const main = document.createElement('main');

	const heroHeader = document.createElement('h1');
	heroHeader.textContent = 'Menu';
	main.appendChild(heroHeader);

	// Pepperoni Pizza
	const pepperoniLabel = document.createElement('h3');
	pepperoniLabel.textContent = 'Pepperoni';
	main.appendChild(pepperoniLabel);

	const pepperoniImg = document.createElement('img');
	pepperoniImg.src = pepperoni;
	pepperoniImg.alt = 'pepperoni pizza';
	main.appendChild(pepperoniImg);

	const pepperoniIngredients = document.createElement('p');
	pepperoniIngredients.textContent = 'Pepperoni';
	main.appendChild(pepperoniIngredients);

	// Cheese Pizza
	const cheeseLabel = document.createElement('h3');
	cheeseLabel.textContent = '3 Cheese';
	main.appendChild(cheeseLabel);

	const cheeseImg = document.createElement('img');
	cheeseImg.src = cheese;
	cheeseImg.alt = 'cheese pizza';
	main.appendChild(cheeseImg);

	const cheeseIngredients = document.createElement('p');
	cheeseIngredients.textContent = 'Mozzarella, Parmesan, Gouda';
	main.appendChild(cheeseIngredients);

	// Combo Pizza
	const comboLabel = document.createElement('h3');
	comboLabel.textContent = 'Combination';
	main.appendChild(comboLabel);

	const comboImg = document.createElement('img');
	comboImg.src = combo;
	comboImg.alt = 'combo pizza';
	main.appendChild(comboImg);

	const comboIngredients = document.createElement('p');
	comboIngredients.textContent = 'Mushrooms, Bacon, Olives, Fresh Basil';
	main.appendChild(comboIngredients);

	// Combo2 Pizza
	const combo2Label = document.createElement('h3');
	combo2Label.textContent = 'Combination 2';
	main.appendChild(combo2Label);

	const combo2Img = document.createElement('img');
	combo2Img.src = combo2;
	combo2Img.alt = 'combo 2 pizza';
	main.appendChild(combo2Img);

	const combo2Ingredients = document.createElement('p');
	combo2Ingredients.textContent =
		'Bell Peppers, Mushrooms, Olives, Tomatoes, Oregano';
	main.appendChild(combo2Ingredients);

	//Margherita Pizza
	const margheritaLabel = document.createElement('h3');
	margheritaLabel.textContent = 'Margherita';
	main.appendChild(margheritaLabel);

	const margheritaImg = document.createElement('img');
	margheritaImg.src = margherita;
	margheritaImg.alt = 'margheritapizza';
	main.appendChild(margheritaImg);

	const margheritaIngredients = document.createElement('p');
	margheritaIngredients.textContent = 'Tomatoes, Mozzerella, Fresh Basil';
	main.appendChild(margheritaIngredients);

	// Hawaiian Pizza

	const hawaiianLabel = document.createElement('h3');
	hawaiianLabel.textContent = 'Hawaiian';
	main.appendChild(hawaiianLabel);

	const hawaiianImg = document.createElement('img');
	hawaiianImg.src = hawaiian;
	hawaiianImg.alt = 'hawaiian pizza';
	main.appendChild(hawaiianImg);

	const hawaiianIngredients = document.createElement('p');
	hawaiianIngredients.textContent = 'Mozzerella, Ham, Pineapple';
	main.appendChild(hawaiianIngredients);

	content.appendChild(main);
}

export default renderMenuPage;
