$(".sending").on("click", function () {
    var regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    if ($("#phonenumber").val() != "" && regex.test($("#phonenumber").val()) == true) {
        $("form").submit();
    }
    else {
        $("#regex").removeClass("d-none");
    }
})

$("#phonenumber").on("keyup", function () {
    var regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    if ($("#phonenumber").val() != "" && regex.test($("#phonenumber").val()) == true) {
        $("#regex").addClass("d-none");
    } else if ($("#phonenumber").val() == "") {
        $("#regex").addClass("d-none");
    } else if ($("#phonenumber").val() != "" && regex.test($("#phonenumber").val()) == false) {
        $("#regex").removeClass("d-none");
    }
})
