import {
  addToCart,
  removeItemCart,
  btnSubtractionQty,
  btnAddQty,
  inputQty,
} from "./style.js";

export const renderArray = (array) => {
  let contentHTML = "";
  array.map((item, index) => {
    contentHTML += `
      <div class="item">
            <div class="itemImg">
                <div class="cardTop">
                    <button class="btnAddToCart" >
                        <i class="fa-solid fa-cart-plus" data-id="${item.id}"></i>
                    </button>
                    <button>
                        <i class="fa-regular fa-heart"></i>
                    </button>
                    <button>
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </button>

                </div>
                <img src="${item.img}"
                    alt="">
            </div>
            <div class="itemContent">
                <h2 class="name">${item.name}</h2>
                <div class="btnAdd"><button class="btnAddToCart" data-id="${item.id}">Add To Cart</button></div>
                <div>
                    <p>Price: ${item.price}</p>
                    <p>${item.type}</p>
                </div>
            </div>
        </div>
      `;
  });
  document.getElementById("listProduct").innerHTML = contentHTML;
  const listBtn = document.querySelectorAll(".btnAddToCart");

  listBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      addToCart(e.target.getAttribute("data-id"));
    });
  });
};

export const renderListItemCart = (array) => {
  let contentHTML = "";
  array.map((item, index) => {
    contentHTML += `
    <li class="product">
        <a href="#" class="product-link">
            <span class="product-image">
                <img src="${item.img}"
                    alt="Product Photo">
            </span>
            <span class="product-details">
                <h3>${item.name}</h3>
                <span class="qty-price">
                    <span class="qty">
                        <button class="minus-button" data-index="${
                          item.id
                        }" >-</button>
                        <input type="number" data-id="${
                          item.id
                        }" id="qty-input-${
      item.id
    }"  class="qty-input" step="1" min="1"
                            max="1000" name="qty-input" value="${
                              item.quantity
                            }" pattern="[0-9]*"
                            title="Quantity" inputmode="numeric">
                        <button class="plus-button" data-index="${
                          item.id
                        }" >+</button>
                        <input type="hidden" name="item-price" id="item-price-1" value="12.00">
                    </span>
                    <span class="price">${(
                      item.price * item.quantity
                    ).toLocaleString()}.$</span>
                </span>
            </span>
        </a>
        <button  class="remove-button removeItemCart">
        <i class="fa-solid fa-trash remove-icon" data-id="${item.id}"></i>
       </button>
    </li>`;
  });
  document.getElementById("productCart").innerHTML = contentHTML;
  const listBtnRemove = document.querySelectorAll(".removeItemCart");
  listBtnRemove.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      removeItemCart(e.target.getAttribute("data-id"));
    });
  });

  const listBtnAddQty = document.querySelectorAll(".plus-button");
  listBtnAddQty.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btnAddQty(e.target.getAttribute("data-index"));
    });
  });

  const listBtnSubtractionQty = document.querySelectorAll(".minus-button");
  listBtnSubtractionQty.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btnSubtractionQty(e.target.getAttribute("data-index"));
    });
  });
  const listInputCart = document.querySelectorAll(".qty-input");
  console.log("🚀 ~ listInputCart:", listInputCart);
  listInputCart.forEach((input) => {
    input.addEventListener("blur", (e) => {
      const quantity = e.target.value * 1;
      if (quantity < 1) {
        input.value = 1;
      }

      inputQty(e.target.getAttribute("data-id"), Math.max(quantity, 1));
    });
  });
};

export const renderTotalCart = (array) => {
  console.log("arrr", array);
  const total = array.reduce((accumulator, currentValue) => {
    let count = currentValue.price * currentValue.quantity;
    return accumulator + count;
  }, 0);
  document.getElementById("totalsCart").innerHTML = `<div class="subtotal">
                                <span class="label">Subtotal:</span> <span class="amount">${total.toLocaleString()}.$</span>
                            </div>`;
};

export const shoppingCount = (array) => {
  document.getElementById(
    "shoppingCount"
  ).innerHTML = `Shopping<span class="count">${array.length}</span>`;
};
