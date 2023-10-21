/*PRODUCT4*/
const grayimagebtn4 = document.getElementById("grayimagebtn4");
const whiteblackimagebtn4 = document.getElementById("whiteblackimagebtn4");
const bluewhiteimagebtn4 = document.getElementById("bluewhiteimagebtn4");
const productsimage4 = document.getElementById("productimage4");

function productsgraybtn4 () {
    productsimage4.src = "products/product4.jpeg";
}

grayimagebtn4.addEventListener("click", productsgraybtn4);

function productswhiteblackkbtn4 () {
    productsimage4.src = "products/product4-w-b.jpeg";
}

whiteblackimagebtn4.addEventListener("click", productswhiteblackkbtn4);

function productsbluewhitebtn4 () {
    productsimage4.src = "products/product4-b-w.jpeg";
}

bluewhiteimagebtn4.addEventListener("click", productsbluewhitebtn4);
/*-------------------------------------------------------------*/