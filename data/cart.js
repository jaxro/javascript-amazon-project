export const cart=[];

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