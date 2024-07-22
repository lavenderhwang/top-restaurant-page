import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';

function renderContactPage() {
	const content = document.getElementById('content');

	// Create and append main section
	const main = document.createElement('main');

	const header = document.createElement('h1');
	header.textContent = 'Get in Touch';
	main.append(header);

	const telephone = document.createElement('p');
	telephone.textContent = '123-456-789';
	main.append(telephone);

	const website = document.createElement('p');
	website.textContent = 'papaspizzeria.com';
	main.append(website);

	const address = document.createElement('address');
	const br = document.createElement('br');
	address.innerHTML =
		"Papa's Pizzeria <br> 1234 Dough Street <br> Pizzaville, CA 90210";
	main.appendChild(address);

	const iconContainer = document.createElement('div');
	const facebookIcon = document.createElement('img');
	facebookIcon.src = facebook;
	const instagramIcon = document.createElement('img');
	instagramIcon.src = instagram;
	const twitterIcon = document.createElement('img');
	twitterIcon.src = twitter;
	iconContainer.appendChild(facebookIcon);
	iconContainer.appendChild(instagramIcon);
	iconContainer.appendChild(twitterIcon);
	main.appendChild(iconContainer);

	const form = document.createElement('form');
	const formName = document.createElement('input');
	formName.type = 'text';
	formName.placeholder = 'Name';
	formName.name = 'name';
	const formEmail = document.createElement('input');
	formEmail.type = 'email';
	formEmail.placeholder = 'Email';
	formEmail.name = 'email';
	const formMessage = document.createElement('input');
	formMessage.type = 'text';
	formMessage.placeholder = 'Type your message here...';
	formMessage.name = 'message';
	const formSubmit = document.createElement('input');
	formSubmit.type = 'submit';
	formSubmit.value = 'Submit';

	form.appendChild(formName);
	form.appendChild(formEmail);
	form.appendChild(formMessage);
	form.appendChild(formSubmit);
	main.appendChild(form);

	content.appendChild(main);
}

export default renderContactPage;
