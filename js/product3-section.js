/*PRODUCT3*/
const whiteimagebtn3 = document.getElementById("whiteimagebtn3");
const blackimagebtn3 = document.getElementById("blackimagebtn3");
const productsimage3 = document.getElementById("image3");

function productswhitebtn3 () {
    productsimage3.src = "products/product3.jpeg";
}

whiteimagebtn3.addEventListener("click", productswhitebtn3);

function productsblackbtn3 () {
    productsimage3.src = "products/product3-black.jpeg";
}

blackimagebtn3.addEventListener("click", productsblackbtn3);
/*-------------------------------------------------------------*/


