/* product3 */
/*--------------------------------------------------------*/
const blackBtn3 = document.getElementById("product3-black");
const image3 = document.getElementById("img3");
const whiteBtn3 = document.getElementById("product3-white")

function black3 () {
    image3.src = "products/product3-black.jpeg"
}

blackBtn3.addEventListener("click", black3) ;

function white3 () {
    image3.src = "products/product3.jpeg"
}

whiteBtn3.addEventListener("click", white3) ;              
/*--------------------------------------------------------*/

/* product4 */
/*--------------------------------------------------------*/
const grayBtn4 = document.getElementById("product4-gray");
const whiteGrayBtn4 = document.getElementById("product4-white-black")
const blueWhite4 = document.getElementById("product4-blue-white")
const image4 = document.getElementById("img4");

function whiteBlack4 () {
    image4.src = "products/product4-w-b.jpeg"
}

whiteGrayBtn4.addEventListener("click", whiteBlack4) ;

function gray4 () {
    image4.src = "products/product4.jpeg"
}

grayBtn4.addEventListener("click", gray4) ;  

function blueWhite4f () {
    image4.src = "products/product4-b-w.jpeg"
}

blueWhite4.addEventListener("click", blueWhite4f) ; 
/*--------------------------------------------------------*/

/* product5 */
/*--------------------------------------------------------*/
const blackBtn5 = document.getElementById("product5-black");
const image5 = document.getElementById("img5");
const whiteBtn5 = document.getElementById("product5-white")

function black5 () {
    image5.src = "products/product5-b.jpeg"
}

blackBtn5.addEventListener("click", black5) ;

function white5 () {
    image5.src = "products/product5.jpeg"
}

whiteBtn5.addEventListener("click", white5) ;              
/*--------------------------------------------------------*/