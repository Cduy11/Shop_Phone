import { listPhoneService, listCartService } from "./callApi.js";
import {
  renderArray,
  renderListItemCart,
  renderTotalCart,
  shoppingCount,
} from "./controller.js";
let listCartItem = [];
const initCart = async () => {
  listCartItem = await listCartService.getListPhone();
  renderListItemCart(listCartItem);
  renderTotalCart(listCartItem);
  shoppingCount(listCartItem);
};
initCart();

const initProduct = async () => {
  const listProduct = await listPhoneService.getListPhone();
  renderArray(listProduct);
};
initProduct();

export const addToCart = async (productId) => {
  const i = listCartItem.findIndex((x) => {
    return x.product_id === productId;
  });
  if (i !== -1) {
    const cartItem = await listCartService.update(
      listCartItem[i].id,
      listCartItem[i].quantity + 1
    );
    listCartItem[i] = cartItem;
  } else {
    const item = await listPhoneService.getPhoneItem(productId);

    const productItem = await listCartService.createPhoneItem({
      product_id: item.id,
      name: item.name,
      price: item.price,
      img: item.img,
      quantity: 1,
    });
    if (productItem) {
      listCartItem.push(productItem);
    }
  }
  renderListItemCart(listCartItem);
  renderTotalCart(listCartItem);
  shoppingCount(listCartItem);
};

export const removeItemCart = async (id) => {
  await listCartService.remove(id);
  const index = listCartItem.findIndex((i) => i.id === id);
  listCartItem.splice(index, 1);
  renderListItemCart(listCartItem);
  renderTotalCart(listCartItem);
  shoppingCount(listCartItem);
};

document.getElementById("btbCart").addEventListener("click", () => {
  console.log("click");
  document.body.classList.toggle("show-sidebar-cart");
});

document.getElementById("btnCartClose").addEventListener("click", () => {
  document.body.classList.remove("show-sidebar-cart");
});

export const btnSubtractionQty = async (id) => {
  const index = listCartItem.findIndex((i) => i.id === id);
  let currentValue = listCartItem[index].quantity;
  if (currentValue > 1) {
    const cartItem = await listCartService.update(
      listCartItem[index].id,
      listCartItem[index].quantity - 1
    );
    listCartItem[index] = cartItem;
    renderListItemCart(listCartItem);
    renderTotalCart(listCartItem);
  }
};

export const btnAddQty = async (id) => {
  const index = listCartItem.findIndex((i) => i.id === id);
  let currentValue = listCartItem[index].quantity;
  if (currentValue < 1000) {
    const cartItem = await listCartService.update(
      listCartItem[index].id,
      listCartItem[index].quantity + 1
    );
    listCartItem[index] = cartItem;
    renderListItemCart(listCartItem);
    renderTotalCart(listCartItem);
  }
};

export const inputQty = async (id, quantity) => {
  console.log(id, quantity);
  const index = listCartItem.findIndex((i) => i.id === id);

  const cartItem = await listCartService.update(
    listCartItem[index].id,
    quantity
  );
  listCartItem[index] = cartItem;
  renderListItemCart(listCartItem);
  renderTotalCart(listCartItem);
};
