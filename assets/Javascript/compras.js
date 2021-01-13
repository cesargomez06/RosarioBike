const addToShoppingCartButtons = document.querySelectorAll(".addToCart");
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener("click", addToCartClicked);
});

const contenedorCarrito = document.querySelector(".carrito");

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(".productos-todos");
    const itemTitle = item.querySelector(".item-title").textContent;
    const itemImage = item.querySelector("img").src;
    const itemPrice = item.querySelector(".item-price").textContent;
    addItemToShoppingCart(itemTitle,itemPrice,itemImage);
};

function addItemToShoppingCart(itemTitle,itemPrice,itemImage){
    const row = document.createElement("tr");
    const shoppingCartContent = `
    <td><input value="1" type="number" min="1" max="10" class="number"></td>
    <td class="producto1">${itemTitle} ${itemImage}</td>
    <td class="precio1">${itemPrice}</td>
    
    
       `
    row.innerHTML = shoppingCartContent;
    contenedorCarrito.append(row);
    
};


