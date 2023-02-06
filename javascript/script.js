var input = document.getElementById("myinput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    document.getElementById("btnsubmit").click();
  }
});
function submit() {
  var jatahuang = parseInt(document.form1.jatahuang.value);
  var x = document.forms["form1"]["jatahuang"].value;
  //   var nakhir = parseInt(jatahuang) + 200;

  if (x == "" || x == null) {
    alert("Masukkan angka terlebih dahulu");
  } else {
    window.location.href = "/user.html";
    var uangMakan = parseInt(jatahuang) * 0.5;
    var uangJajan = parseInt(jatahuang) * 0.1;
    var kebutuhanL = parseInt(jatahuang) * 0.2;
    var tabungan = parseInt(jatahuang) * 0.2;
    //   var hasil = document.getElementById("nakhir").value;

    localStorage.setItem("makan", uangMakan);
    localStorage.setItem("jajan", uangJajan);
    localStorage.setItem("kebutuhan", kebutuhanL);
    localStorage.setItem("tabung", tabungan);
  }

  return false;
}
