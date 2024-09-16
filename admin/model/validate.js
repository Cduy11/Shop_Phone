const kiemTraRong = (value, idErr) => {
  if (value.length == 0 || value === 0) {
    document.getElementById(idErr).innerHTML = "Không được bỏ trống";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
};
