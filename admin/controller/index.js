const PRODUCT_URL = "https://66c740bc732bf1b79fa5e903.mockapi.io/products";

let editedID = null;

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
  let product = layThongTin();
  let isValid =
    kiemTraRong(product.id, "tb_id") &
    kiemTraRong(product.name, "tb_name") &
    (kiemTraRong(product.price, "tb_price") && kiemTraSoDuong(product.price, "tb_price")) &
    kiemTraRong(product.screen, "tb_screen") &
    kiemTraRong(product.backCamera, "tb_camera") &
    kiemTraRong(product.frontCamera, "tb_fontCamera") &
    kiemTraRong(product.img, "tb_image") &
    kiemTraRong(product.type, "tb_category") &
    kiemTraRong(product.desc, "tb_description");

  if (isValid) {
    axios({
      url: `${PRODUCT_URL}`,
      method: "POST",
      data: product,
    })
      .then(function (res) {
        fetchData();
        resetForm();
        $("#exampleModal").modal("hide");
      })
      .catch(function (err) {
        console.log("🚀 ~ err:", err);
      });
  }
};

// sửa sản phẩm
const editProduct = (id) => {
  editedID = id;
  axios({
    url: `${PRODUCT_URL}/${id}`,
    method: "GET",
  })
    .then(function (res) {
      hienThiThongTin(res.data);
      document.getElementById("form_id").disabled = true
      $("#exampleModal").modal("show");

    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
};

// update sản phẩn
const updateProduct = () => {
  let product = layThongTin();
  let isValid =
    kiemTraRong(product.id, "tb_id") &
    kiemTraRong(product.name, "tb_name") &
    (kiemTraRong(product.price, "tb_price") && kiemTraSoDuong(product.price, "tb_price")) &
    kiemTraRong(product.screen, "tb_screen") &
    kiemTraRong(product.backCamera, "tb_camera") &
    kiemTraRong(product.frontCamera, "tb_fontCamera") &
    kiemTraRong(product.img, "tb_image") &
    kiemTraRong(product.type, "tb_category") &
    kiemTraRong(product.desc, "tb_description");
  if (isValid) {
    axios({
      url: `${PRODUCT_URL}/${editedID}`,
      method: "PUT",
      data: product,
    })
      .then(function (res) {
        fetchData();
        resetForm();
        $("#exampleModal").modal("hide");
      })
      .catch(function (err) {
        console.log("🚀 ~ err:", err);
      });
  }
};

// hàm search 
const searchProduct = () => {
  let search = document.getElementById("searchInput").value.toLowerCase();
  axios({
    url: `${PRODUCT_URL}`,
    method: "GET",
  })
    .then(function (res) {
      let products = res.data;


      let filteredProducts = products.filter(product => {

        return product.name.toLowerCase().includes(search);
      })
      renderProduct(filteredProducts);
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
};


// hàm reset 
const resetForm = () => {
  document.getElementById("createProductForm").reset()
  document.getElementById("form_id").disabled = false
}

// hàm close
const closeProduct = () => {
  resetForm()
}

// hàm filter theo giá
document.getElementById('priceFilter').addEventListener('change', function () {
  let selectedOption = document.getElementById('priceFilter').value;

  axios({
    url: `${PRODUCT_URL}`,
    method: "GET",
  })
    .then(function (res) {
      let products = res.data;

      if (selectedOption === 'asc') {
        products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (selectedOption === 'desc') {
        products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }

      renderProduct(products);
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
});

// hàm filter theo tên sản phẩm
document.getElementById('typeFilter').addEventListener('change', function () {
  let selectedType = document.getElementById('typeFilter').value;

  axios({
    url: `${PRODUCT_URL}`,
    method: "GET",
  })
    .then(function (res) {
      let products = res.data;
      if (selectedType !== 'all') {
        products = products.filter(product => product.name.toLowerCase().includes(selectedType));
      }
      renderProduct(products);
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
});
