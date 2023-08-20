
document.getElementById('single-card').addEventListener('click' , function(){
    
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

});
