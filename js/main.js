var el = document.getElementById("heartIcon");

// console.log(el);
el.addEventListener("click",changeColor);

function changeColor() {
    el.setAttribute("class","iconClick")
}

var total = document.getElementById("total");
var prixUni = document.getElementById("prixUnitaire");
var prixUni2 = document.getElementById("prixUnitaire2");

//Incrémentation de la quantité de 1
var quantity = document.getElementById("buttonPlus")
quantity.addEventListener("click", incrementQuantity);
var quantityText = document.getElementById("quantityArticle");
var taille = Number(quantityText.innerText);
// console.log(quantityText);

function incrementQuantity(){
    taille = taille + 1;
    quantityText.innerText = taille;
    total.innerText = Number(prixUni.innerText * taille) + Number(prixUni2.innerText * taille2)
    
    // console.log(taille);
}


//Décrémentation de la quantité de 1
var quantityMoins = document.getElementById("buttonMoins")
quantityMoins.addEventListener("click", decrementQuantity);

function decrementQuantity() {
    if (taille == 0) {
        quantityText.innerText == 0;
        total.innerText = Number(prixUni.innerText * taille) + Number(prixUni2.innerText * taille2)
    }
    else{
        taille = taille-1;
        quantityText.innerText=taille;
        total.innerText = Number(prixUni.innerText * taille) + Number(prixUni2.innerText * taille2)
        // console.log(taille);
    }
}


//calculer la prix d'un article
var prixTotalArticle = document.getElementById("prixTotal");
var prixUnitaire = document.getElementById("prixUnitaire");

quantityMoins.addEventListener("click",totalPrixArticle)
quantity.addEventListener("click",totalPrixArticle)

function totalPrixArticle() {
    var totalPrix =  taille*Number(prixUnitaire.innerText);
    // console.log(totalPrix)
    prixTotalArticle.innerText = totalPrix;

    return totalPrix;
    
}


// Remove products
var  removeProduct = document.getElementById("delete-button");
var article = document.getElementById("article1");

removeProduct.addEventListener("click", productRemove)
function productRemove() {
    article.remove();
    taille = 0;
    total.innerText = Number(prixUni.innerText * taille) + Number(prixUni2.innerText * taille2)
}


// article 2
var el2 = document.getElementById("heartIcon2");

// console.log(el2);
el2.addEventListener("click",changeColor2);

function changeColor2() {
    el2.setAttribute("class","iconClick")
}



//Incrémentation de la quantité de 1
var quantity2 = document.getElementById("buttonPlus2")
quantity2.addEventListener("click", incrementQuantity2);
var quantityText2 = document.getElementById("quantityArticle2");
var taille2 = Number(quantityText2.innerText);
// console.log(quantityText);

function incrementQuantity2(){
    taille2 = taille2 + 1;
    quantityText2.innerText = taille2;
    total.innerText = Number(prixUni.innerText * taille) + Number(prixUni2.innerText * taille2)
    // console.log(taille2);
}


//Décrémentation de la quantité de 1
var quantityMoins2 = document.getElementById("buttonMoins2")
quantityMoins2.addEventListener("click", decrementQuantity2);

function decrementQuantity2() {
    if (taille2 == 0) {
        quantityText2.innerText == 0;
        total.innerText = Number(prixUni.innerText * taille) + Number(prixUni2.innerText * taille2)
    }
    else{
        taille2 = taille2-1;
        quantityText2.innerText=taille2;
        total.innerText = Number(prixUni.innerText * taille) + Number(prixUni2.innerText * taille2)
        // console.log(taille);
    }
}

//calculer la prix d'un article
var prixTotalArticle2 = document.getElementById("prixTotal2");
var prixUnitaire2 = document.getElementById("prixUnitaire2");

quantityMoins2.addEventListener("click",totalPrixArticle2)
quantity2.addEventListener("click",totalPrixArticle2)

function totalPrixArticle2() {
    var totalPrix2 = taille2*Number(prixUnitaire2.innerText);
    // console.log(totalPrix2)
    prixTotalArticle2.innerText = totalPrix2;
    return  totalPrix2;
}

// Calcul total Cart



total.innerText= Number(prixUni.innerText*taille) + Number(prixUni2.innerText*taille2);



// Remove products
var  removeProduct2 = document.getElementById("delete-button2");
var article2 = document.getElementById("article2");

removeProduct2.addEventListener("click", productRemove2)
function productRemove2() {
    article2.remove();
    taille2 = 0;
    total.innerText = Number(prixUni.innerText * taille) + Number(prixUni2.innerText * taille2)
}



