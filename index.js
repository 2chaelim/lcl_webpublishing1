$(document).ready(function () {
  $("ul.tabnav li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabnav li").removeClass("here");
    $(".tab-con").removeClass("here");

    $(this).addClass("here");
    $("#" + tab_id).addClass("here");
  });
});
