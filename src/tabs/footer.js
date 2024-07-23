import github from '../../assets/github-mark.png';
import './footer.css';

export default function renderFooter() {
	const content = document.getElementById('content');

	// Create and append main section
	const main = document.createElement('main');

	const signature = document.createElement('p');
	signature.textContent = 'Created by Lavender Hwang';
	main.appendChild(signature);

	const githubIcon = document.createElement('img');
	githubIcon.classList.add('github-icon');
	githubIcon.src = github;
	main.appendChild(githubIcon);

	content.appendChild(main);
}
