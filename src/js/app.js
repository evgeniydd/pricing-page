const switcher_buttons = document.querySelectorAll('.plans-switcher__button');
const plan_prices = document.querySelectorAll('.plan-price');

const toggleButton = (button) => {
	switcher_buttons.forEach((btn) => {
		btn.setAttribute('data-is-active', 'false');
		btn.classList.remove('active');
	});

	button.classList.add('active');
	button.setAttribute('data-is-active', 'true');

	const selectedDuration = button.textContent.toLowerCase();

	plan_prices.forEach((price) => {
		const priceDuration = price.getAttribute('data-duration');
		if (priceDuration === selectedDuration) {
			price.classList.add('active');
		} else {
			price.classList.remove('active');
		}
	});
};

switcher_buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		toggleButton(btn);
	});
});
