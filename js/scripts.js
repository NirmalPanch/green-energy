const content = {
    1: {
        title: 'Switch to LED Light Bulbs',
        image: './img/bulb.png',
        bodyText: 'LED light bulbs are becoming popular for their energy efficiency, long life, and eco-friendliness. Available in various types, including dimmable and different color temperatures, they easily meet diverse needs.'
    },
    2: {
        title: 'Recycle Properly',
        image: './img/recycle.png',
        bodyText: 'Check local recycling guidelines to sort items correctly and rinse recyclables to improve quality. Using recycled products supports sustainability and reduces waste. For old devices, ecoATM offers proper recycling at local kiosks with potential instant cash rewards.'
    },
    3: {
        title: 'Reusable Bags and Containers',
        image: './img/reusable-bag.png',
        bodyText: 'Invest in sturdy reusable bags and containers for heavy loads to reduce plastic waste. Using your own bags at stores and markets minimizes waste. For take-out, bring reusable containers instead of using disposable ones. This reduces waste and can save money, as some restaurants offer discounts for using your own container.'
    }
};

// Initializing content
let dc = document.getElementById('content-container');
let buttons = document.querySelectorAll('.button-container button');

dc.innerHTML = `
    <h2>${content[1].title}</h2>
    <img src="${content[1].image}" style="width: 100%; max-width: 600px;">
    <p>${content[1].bodyText}</p>
`;

// Button click 
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonClicked = e.target.closest('button');
        const id = buttonClicked.id.replace('btn', '');
        const selectedContent = content[id];

        dc.innerHTML = `
            <h2>${selectedContent.title}</h2>
            <img src="${selectedContent.image}" style="width: 100%; max-width: 600px;">
            <p>${selectedContent.bodyText}</p>
        `;

        document.querySelectorAll('.button-container button').forEach(btn => {
            btn.classList.remove('active');
        });
        buttonClicked.classList.add('active');
    });
});