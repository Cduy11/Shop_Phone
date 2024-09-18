const kiemTraRong = (value, idErr) => {
  if (value.length == 0 || value === 0) {
    document.getElementById(idErr).innerHTML = "Không được bỏ trống";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
};

const kiemTraSoDuong = (value, idErr) => {
  var regexPrice = /^(?!-)\d+(\.\d+)?$/
  var isCheckPrice = regexPrice.test(value);
  if (!isCheckPrice) {
    document.getElementById(idErr).innerHTML = "Giá phải là số dương";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
}
a
// const kiemTraURL = (value, idErr) => {
//   var regexURL =/\.(jpg|jpeg|png|gif|bmp)$/i;
//   var isCheckURL = regexURL.test(value);
//   if (!isCheckURL) {
//     document.getElementById(idErr).innerHTML = "URL không đúng định dạng";
//     return false;
//   }
//   document.getElementById(idErr).innerHTML = "";
//   return true;
// }