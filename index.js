const checkoutBtn = document.querySelector(".checkout-btn");
const AddBtns = document.querySelectorAll(".plus-btn");
const Panier = document.querySelector(".data-added-to-cart");
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
    alert(x);
  });
}
