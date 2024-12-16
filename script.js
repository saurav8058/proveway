// JavaScript to Handle Click and Selector Display
const radioButtons = document.querySelectorAll('.radio-button');
const totalPriceElement = document.getElementById('total-price');
const freeDeliveryText = document.querySelector('.delivery');
const prices = {
  offer1: 10.0,
  offer2: 18.0,
  offer3: 24.0,
};

radioButtons.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    const selectedOffer = event.target.id;
    const price = prices[selectedOffer];
    totalPriceElement.textContent = `$${price.toFixed(2)} USD`;

    // Hide all selectors and then show the selected one
    document.querySelectorAll('.selectors').forEach((selectors) => {
      selectors.style.display = 'none';
    });

    const parentOption = radio.closest('.option');
    const selectors = parentOption.querySelector('.selectors');
    if (selectors) {
      selectors.style.display = 'flex';
    }

    // Add a border to the selected offer
    document.querySelectorAll('.option').forEach((option) => {
      option.style.border = option.contains(radio) ? '2px solid #FF69B4' : '1px solid #ddd';
    });

    // Align "Free Delivery" text to the left
    freeDeliveryText.style.textAlign = 'left';
  });
});

// Add to Cart functionality
document.querySelector('.add-to-cart').addEventListener('click', () => {
  const selectedOption = Array.from(radioButtons).find((radio) => radio.checked);

  if (selectedOption) {
    alert(`You have selected ${selectedOption.nextElementSibling.textContent.trim()}.`);
  } else {
    alert('Please select an offer before adding to cart.');
  }
});
