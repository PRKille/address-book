$(document).ready(function() {
  $("form#addressInput").submit(function(event) {
    var bookName = $("input#name").val();
    var bookAdd1 = $("input#address1").val();
    var bookAdd2 = $("input#address2").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();

    $("#contacts").prepend("<ul>" + bookName + "</ul>").append("<li>" + bookAdd1 + "</li>" + "<li>" + bookAdd2 + "</li>" + "<li>" + phone + "</li>" + "<li>" + email + "</li>");

    $("li").hide();
    $("#contacts").click(function() {
      $("li", this).toggle();
    });

    event.preventDefault();
  });
});