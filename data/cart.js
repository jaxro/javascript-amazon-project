export let cart=[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
},{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1
},{
    productId:'83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity:1
}];

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
                quantity:quantityNumber
            });
            
        }
}

export function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
            newCart.push(cartItem);
        }

    });
    cart=newCart;
}

