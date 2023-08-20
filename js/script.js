
const itemPrice = document.getElementById('item-price').innerText;
const displayContainer = document.getElementById('display-container');
const itemName = document.getElementById('item-name').innerText;
const displayTotalPrice = document.getElementById('display-total-price').innerText;
let updateTotalPrice=parseFloat(itemPrice);
document.getElementById('single-card').addEventListener('click' , function(){
    updateTotalPrice += parseFloat(displayTotalPrice)
    
    const countNumber = displayContainer.childElementCount;

    const p = document.createElement('p');
    p.innerText = `${countNumber + 1}. ${itemName}`;
    p.classList.add('font-semibold' , 'text-lg' ,'text-[#111]' );

    displayContainer.appendChild(p);

    displayTotalPrice.innerText = updateTotalPrice;
    console.log(updateTotalPrice);

});


