$(document).ready(function(){
  $("#btn-click").click(function(){
    $("#textDisplay").toggle()

  })
})
// hamburgerButton action
$(document).ready(function(){
  $("#bamburgerBtn").click(function(){
    console.log("cliked")
    $("#sliderMenu").animate({width:"100%",left:"0"},100);
  });
  $("#closerIcon").click(function(){
    $("#sliderMenu").animate({width:"0"},50);
  });
});

