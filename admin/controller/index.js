const PRODUCT_URL = "https://66c740bc732bf1b79fa5e903.mockapi.io/products";

// lấy thông và hiện thông tin
let fetchData = () => {
  axios({
    url: `${PRODUCT_URL}`,
    method: "GET",
  })
    .then(function (res) {
      renderProduct(res.data);
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
};
fetchData();

// xóa sản phẩm
let deleteProduct = (id) => {
  axios({
    url: `${PRODUCT_URL}/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      fetchData();
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
};

// thêm sản phẩm
let addProduct = () => {
  let data = layThongTin();
  axios({
    url: `${PRODUCT_URL}`,
    method: "POST",
    data: data,
  })
    .then(function (res) {
      fetchData();
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
};

