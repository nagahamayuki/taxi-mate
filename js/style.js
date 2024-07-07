$("#phonenumber").on("blur", function () {
    var regex = /^[0-9\-\+]+$/i;

    if ($("#phonenumber").val() != "" && regex.test($("#phonenumber").val()) == true) {
        $("#regex").addClass("d-none");
    }
    else {
        $("#regex").removeClass("d-none");
    }
})

$("#phonenumber").on("blur", function () {
    var regex = /^[0-9\-\+]+$/i;
    if ($("#phonenumber").val() != "" && regex.test($("#phonenumber").val()) == true) {
        $("#regex").addClass("d-none");
    } else if ($("#phonenumber").val() == "") {
        $("#regex").addClass("d-none");
    } else if ($("#phonenumber").val() != "" && regex.test($("#phonenumber").val()) == false) {
        $("#regex").removeClass("d-none");
    }
})

$("#email").on("blur", function () {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test($("#email").val()) == false) {
      $("#valid_email").removeClass("d-none");
    } else {
      $("#valid_email").addClass("d-none");
    }
});
