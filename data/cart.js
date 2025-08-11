export let cart= JSON.parse(localStorage.getItem('cart')) || [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
    deliveryOptionId:'1'
},{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
    deliveryOptionId:'2'
        
}];

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

export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingItem=cartItem;
        }
    });
    matchingItem.deliveryOptionId=deliveryOptionId//right side is the new delivery optioin id
    saveToStorage();
}