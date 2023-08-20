

function addToCard(){
    const itemPrice = document.getElementById('item-price').innerText;
    const displayContainer = document.getElementById('display-container');
    const countNumber = displayContainer.childElementCount;
    const itemName = document.getElementById('item-name').innerText;

    const p = document.createElement('p');
    p.innerText = `${countNumber + 1}. ${itemName}`;
    p.classList.add('font-semibold' , 'text-lg' ,'text-[#111]' );

    displayContainer.appendChild(p);


    // ================

    const displayTotalPrice = document.getElementById('display-total-price');
    const updateTotalPrice = parseFloat(displayTotalPrice.innerText) + parseFloat(itemPrice);
    displayTotalPrice.innerText = updateTotalPrice.toFixed(2);

    

    // purchase button 
    if(displayTotalPrice.innerText > 0){
        const purchaseButton = document.getElementById('purchase-button');
        purchaseButton.classList.remove('pointer-events-none' , 'opacity-[50%]');
    }

    // apply button
    if(displayTotalPrice.innerText >= 200){
        const applyButton = document.getElementById('apply-button');
        applyButton.classList.remove('pointer-events-none' , 'opacity-[50%]');
    }

}



