const checkoutBtn = document.querySelector(".checkout-btn");
const AddBtns = document.querySelectorAll(".plus-btn");
const Panier = document.querySelector(".data-added-to-cart");
const total = document.querySelector(".total-price");
let categoriesType = document.querySelectorAll(".cat-class p");
let x = 0;
for (let i of AddBtns) {
  i.addEventListener("click", () => {
    const categorie = i.parentElement.previousElementSibling.querySelector(
      ".item-name"
    ).innerHTML;
    if (x === 0) {
      Panier.querySelector(".panier-empty").remove();
      var para = document.createElement("p");
      var categorieText = document.createTextNode(categorie);
      para.appendChild(categorieText);
      Panier.appendChild(para);
    } else {
      var para = document.createElement("p");
      var categorieText = document.createTextNode(categorie);
      para.appendChild(categorieText);
      Panier.appendChild(para);
    }
    const PriceValue = parseInt(i.previousElementSibling.innerHTML);
    x = x + PriceValue;
    total.innerHTML = x;
  });
}
//make categorie active
for (let i of categoriesType) {
  i.addEventListener("click", () => {
    $("p").removeClass("active-cat-class");

    i.className += "active-cat-class";
  });
}
