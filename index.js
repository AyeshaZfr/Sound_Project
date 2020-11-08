// alert("hello");
// // var location = $(".location");
// // var overlay = $("span");
//
// $(".location").hover(mouseI, mouseO);
//
// function mouseI()
// {
//   $(".location-hover").css("display","block");
// }
//
// function mouseO()
// {
//   $(".location-hover").css("display","none");
// }
//
// $(".location").click(function()
// {
//   alert("clicked");
// });

$(".location").click(function()
{
  name = $(this).attr("id");
  console.log(name);
  var name_img = 'images/' + name + '.jpeg';
  $(".image-36").attr("src", name_img);
  console.log($(".image-36").attr("src"));
  var name_audio = 'sounds/' + name + '.mp3';
  $(".audio-360").attr("src", name_audio);
  console.log($(".audio-360").attr("src"));
  //window.location = "location.html";
});

// $(".location").hover(function()
// {
//   name = $(this).attr("id");
//   console.log(name);
//   var name_img = 'images/' + name + '.jpeg';
//   $(".image-36").attr("src", name_img);
//   console.log($(".image-36").attr("src"));
//   var name_audio = 'sounds/' + name + '.mp3';
//   $(".audio-360").attr("src", name_audio);
//   console.log($(".audio-360").attr("src"));
// });

// var name-file = 'images/' + name + '.jpeg';
// $(".image-360").attr("src", "images/palms.jpeg") ;
