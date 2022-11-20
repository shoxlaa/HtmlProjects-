import $ from "jquery";

$(function f() {

    let $cartIcon= $('#cart-icon');
    let $cart= $('.cart');
    let $cartClose= $('#close-cart');

    $cartIcon.on("click",(e)=>{
        $cart.css("right","0");
    });

    $cartClose.on("click",(e)=>{
        $cart.css("right","-100%");
    });
});