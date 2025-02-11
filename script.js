const buttons = document.querySelectorAll('.subscribe-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Subscribed to ' + button.parentElement.querySelector('h2').innerText + ' plan!');
    });
});

const billingButtons = document.querySelectorAll('.billing-btn');
billingButtons.forEach(button => {
    button.addEventListener('click', () => {
        billingButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update pricing based on billing type
        const billingType = button.getAttribute('data-billing');
        const prices = {
            monthly: ['$12/month', '$24/month', '$32/month'],
            yearly: ['$120/year', '$200/year', '$300/year']
        };

        const cards = document.querySelectorAll('.pricing-card');
        cards.forEach((card, index) => {
            const priceElement = card.querySelector('.price');
            const yearlyPriceElement = card.querySelector('.yearly-price');
            if (billingType === 'monthly') {
                priceElement.innerText = prices.monthly[index];
                priceElement.style.display = 'block';
                yearlyPriceElement.style.display = 'none';
            } else {
                priceElement.style.display = 'none';
                yearlyPriceElement.innerText = prices.yearly[index];
                yearlyPriceElement.style.display = 'block';
            }
        });
    });
});