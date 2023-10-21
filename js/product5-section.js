
/*PRODUCT5*/
const whiteimagebtn5 = document.getElementById("whiteimagebtn5");
const blackimagebtn5 = document.getElementById("blackimagebtn5");
const productsimage5 = document.getElementById("image5");

function productswhitebtn5 () {
    productsimage5.src = "products/product5.jpeg";
}

whiteimagebtn5.addEventListener("click", productswhitebtn5);

function productsblackbtn5 () {
    productsimage5.src = "products/product5-b.jpeg";
}

blackimagebtn5.addEventListener("click", productsblackbtn5);
/*-------------------------------------------------------------*/