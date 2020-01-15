$(document).ready(function() {
  $("#addressInput").submit(function(event) {
    var bookName = $("input#name").val();
    var bookAdd1 = $("input#address1").val();
    var bookAdd2 = $("input#address2").val():
    var phone = $("input#phone").val();
    var email = $("input#email").val();

    $("div.well").after(bookName);

    $("#bookinfo").show();

    event.preventDefault();
  });
});