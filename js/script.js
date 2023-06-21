$(function () {
  $(".var-spinner").spinner();
  $(".var-slider").slider();
  $(".var-select").selectmenu({
    width: "auto",
  });
  let val = $(".var-select").selectmenu("option");
});
