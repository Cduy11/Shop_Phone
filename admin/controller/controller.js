// lấy thông tin từ form
const layThongTin = () => {
  let id = document.getElementById("form_id").value;
  let name = document.getElementById("form_name").value;
  let price = document.getElementById("form_price").value * 1;
  let screen = document.getElementById("form_screen").value;
  let backCamera = document.getElementById("form_camera").value;
  let frontCamera = document.getElementById("form_fontCamera").value;
  let type = document.getElementById("form_category").value;
  let desc = document.getElementById("form_description").value;
  let img = document.getElementById("form_image").value;
  let listProduct = new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    type,
    desc,
    img
  );
  return listProduct;
};

// render thông tin
const renderProduct = (dataProduct) => {
  let contentHTML = "";
  dataProduct.forEach((item) => {
    contentHTML += `
    <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td> <img width="200" src="${item.img}" alt="img"> </td>
        <td>${item.desc}</td>
        <td> 
        <button class=" btn btn-danger" onclick= deleteProduct('${item.id}') >Xóa</button>
        <button class=" btn btn-info" >Sửa</button>
        </td>
    </tr>
    `;
  });
  document.getElementById("productTable").innerHTML = contentHTML;
};
