export let cart= JSON.parse(localStorage.getItem('cart')) || [];

export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
        let matchingItem;
        cart.forEach((cartItem)=>{
            if(productId===cartItem.productId){
                matchingItem=cartItem;
            }
        });
        const quantitySelector=document.querySelector(`.js-quantity-selector-${productId}`);
        
        const quantityNumber = Number(quantitySelector.value);
        //console.log(quantityNumber);


        if (matchingItem){
            //if(quantityNumber===1){
                matchingItem.quantity+=quantityNumber;
            //}
            /*else{
                matchingItem.quantity+=quantityNumber;
                //console.log(`this is the item quantity we added ${matchingItem.quantity}`);
            };*/
        }
        else{
            cart.push({
                productId:productId,
                quantity:quantityNumber,
                deliveryOptionId:'1'//change needed
            });
            
        }
        saveToStorage();
}
export function updateCartQuantity(){
    let cartQuantity=0;
        cart.forEach((cartItem)=>{
            cartQuantity+=cartItem.quantity;
        });
    document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
    saveToStorage();
}

export function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
            newCart.push(cartItem);
        }

    });
    cart=newCart;
    saveToStorage();
}

