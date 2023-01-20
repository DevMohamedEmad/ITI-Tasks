$(document).ready(function () {

  ////////////////hide and show /////////////////

  $("#hide").click(function () {
    $("img").hide();
  });

  $("#show").click(function () {
    $("img").show();
  });

  // ///////////////faide/////////////////////
  $("#faide").click(function () {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });

  ///////////////////////slide//////////////////////////////////
  $("#header").click(function () {
    $("#panel").slideDown();
  });

  $("#up").click(function () {
    $("#panel2").slideUp();
  });


  $("#up-down").click(function () {
    $("#panel3").slideToggle();
  });

  ////////////animation///////////////////////
  $("#animate").click(function () {
    $("#div1").animate({ left: "450px" });
  });


  $(document).ready(function () {
    $("#start").click(function () {
      $("#section").slideDown(5000);
    });

    //////////////// Stop //////////
    $("#stop").click(function () {
      $("#section").stop();
    });
  });

  /////////////////// chaining ////////////////
  $("#chainOne").click(function () {
    $("#p1").css("color", "red").slideUp(2000);
  });
  $("#chainTwo").click(function () {
    $("#circle").css("background-color", "blue").animate({ left: "500px" }).slideUp(3000).slideDown(3000)
  });
});