

function addToCard(data) {

    const itemPrice = data.childNodes[3].childNodes[5].childNodes[0].innerText;
    const displayContainer = document.getElementById('display-container');
    const countNumber = displayContainer.childElementCount;
    const itemName = data.childNodes[3].childNodes[3].innerText;

    const p = document.createElement('p');
    p.innerText = `${countNumber + 1}. ${itemName}`;
    p.classList.add('font-semibold', 'text-lg', 'text-[#111]');

    displayContainer.appendChild(p);


    // ================

    const displayTotalPrice = document.getElementById('display-total-price');
    const updateTotalPrice = parseFloat(displayTotalPrice.innerText) + parseFloat(itemPrice);
    displayTotalPrice.innerText = updateTotalPrice.toFixed(2);



    // purchase button 
    if (displayTotalPrice.innerText > 0) {
        const purchaseButton = document.getElementById('purchase-button');
        purchaseButton.classList.remove('pointer-events-none', 'opacity-[50%]');
    }

    // apply button
    if (displayTotalPrice.innerText >= 200) {
        const applyButton = document.getElementById('apply-button');
        applyButton.classList.remove('pointer-events-none', 'opacity-[50%]');
    }

}


document.getElementById('apply-button').addEventListener('click', function () {
    
    const displayTotalPrice = document.getElementById('display-total-price');

    const couponInput = document.getElementById('coupon-input');
    const couponInputValue = couponInput.value;
    

    if(couponInputValue === 'SELL200'){

        const discountElement = document.getElementById('discount-element');
        const lessTotalDisplay = document.getElementById('less-total-price');

        const discountAmount = (displayTotalPrice.innerText / 100) * 20;
        discountElement.innerText = discountAmount.toFixed(2);

        const lessTotalAmount = displayTotalPrice.innerText - discountAmount;
        lessTotalDisplay.innerText = lessTotalAmount.toFixed(2);

    }

    couponInput.value = '';
    

});



