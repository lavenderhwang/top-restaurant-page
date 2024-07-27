import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import renderFooter from './footer.js';
import './contact.css';

function renderContactPage() {
	const content = document.getElementById('content');

	// Create and append main section
	const main = document.createElement('main');

	const header = document.createElement('h1');
	header.textContent = 'Get in Touch';
	header.classList.add('center');
	main.append(header);

	const container = document.createElement('div');
	container.classList.add('contact-container');

	const form = document.createElement('form');
	form.classList.add('form');
	const formName = document.createElement('input');
	formName.type = 'text';
	formName.placeholder = 'Name';
	formName.name = 'name';
	formName.classList.add('form-name');
	const formEmail = document.createElement('input');
	formEmail.type = 'email';
	formEmail.placeholder = 'Email';
	formEmail.name = 'email';
	formEmail.classList.add('form-email');
	const formMessage = document.createElement('input');
	formMessage.type = 'text';
	formMessage.placeholder = 'Type your message here...';
	formMessage.name = 'message';
	formMessage.classList.add('form-message');
	const formSubmit = document.createElement('input');
	formSubmit.type = 'submit';
	formSubmit.value = 'Submit';
	formSubmit.classList.add('form-submit');

	form.appendChild(formName);
	form.appendChild(formEmail);
	form.appendChild(formMessage);
	form.appendChild(formSubmit);
	container.appendChild(form);

	const contactInfo = document.createElement('div');
	contactInfo.classList.add('contact-info');

	const telephone = document.createElement('p');
	telephone.textContent = '123-456-789';
	contactInfo.append(telephone);

	const website = document.createElement('p');
	website.textContent = 'papaspizzeria.com';
	contactInfo.append(website);

	const iconContainer = document.createElement('div');
	const facebookIcon = document.createElement('img');
	facebookIcon.src = facebook;
	facebookIcon.classList.add('icon');
	const instagramIcon = document.createElement('img');
	instagramIcon.src = instagram;
	instagramIcon.classList.add('icon');
	const twitterIcon = document.createElement('img');
	twitterIcon.src = twitter;
	twitterIcon.classList.add('icon');
	iconContainer.appendChild(facebookIcon);
	iconContainer.appendChild(instagramIcon);
	iconContainer.appendChild(twitterIcon);
	contactInfo.appendChild(iconContainer);

	const address = document.createElement('address');
	address.classList.add('address');

	const br = document.createElement('br');
	address.innerHTML =
		"Papa's Pizzeria <br> 1234 Dough Street <br> Pizzaville, CA 90210";
	contactInfo.appendChild(address);

	container.appendChild(contactInfo);
	main.appendChild(container);
	content.appendChild(main);
}

export default renderContactPage;
