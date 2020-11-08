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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

/* --------------------------------------- */
/* Ayesha's part begins */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

function openSubMenu1() {
  document.getElementById("subMenu01").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
};
function openSubMenu2() {
  document.getElementById("subMenu02").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
};

function openSubMenu3() {
  document.getElementById("subMenu03").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
};

function closeSubMenu() {
  document.getElementById("subMenu01").style.width = "0";
  document.getElementById("subMenu02").style.width = "0";
  document.getElementById("subMenu03").style.width = "0";
  document.getElementById("main").style.marginLeft = "250px";
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
};
/* Ayesha's part ends */
/* --------------------------------------- */
