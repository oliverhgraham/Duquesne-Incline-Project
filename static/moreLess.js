
$(document).ready(function() {
    $("#long").hide();
    $("#readLess").hide();

    $("#readMore").click(function() {
        $("#short").hide();
        $("#long").fadeIn();
        $("#readMore").hide();
        $("#readLess").show();
    });

    $("#readLess").click(function() {
        $("#long").hide();
        $("#short").fadeIn();
        $("#readLess").hide();
        $("#readMore").show();
    });
});