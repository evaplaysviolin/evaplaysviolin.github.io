$(document).ready(function() {

  // Redirects
  if (window.location.pathname == "/code") {
    loadPage("code");
    history.replaceState("code", "", "code");
  } else if (window.location.pathname == "/art") {
    loadPage("art");
    history.replaceState("art", "", "art");
  } else if (window.location.pathname == "/about") {
    loadPage("about");
    history.replaceState("about", "", "about");
  } else {
    loadPage("home");
    history.replaceState("home", "", "home");
  }

  // Load appropriate page content
  var pushPage;

  $(".tab").click(function() {
    if ($(this).hasClass("home")) {
      loadPage("home");
    } else if ($(this).hasClass("code")) {
      loadPage("code");
    } else if ($(this).hasClass("art")) {
      loadPage("art");
    } else if ($(this).hasClass("about")) {
      loadPage("about");
    }
    history.pushState(pushPage, "", pushPage);
  });

  window.addEventListener("popstate", function(event) {
    loadPage(event.state);
  });

  function loadPage(page) {
    $("#container").load(page + ".txt");
    pushPage = page;
  }

});

$(document).ajaxComplete(function(event, xhr, options) {
  $("#home, #code, #art, #about").hide();
  if (options.url == "home.txt") {
    $("#home").fadeIn(800);
  } else if (options.url == "code.txt") {
    index = 1;
    $(".codeImage, .codeDescription").hide();
    slideshow("code", index);
    generateBullets("code");
    $("#code").fadeIn(800);
  } else if (options.url == "art.txt") {
    index = 1;
    $(".artImage, .artDescription").hide();
    slideshow("art", index);
    generateBullets("art");
    $("#art").fadeIn(800);
  } else if (options.url == "about.txt") {
    $("#about").fadeIn(800);
  }

  // Left and right buttons control slideshows
  $(".left, .right").click(function() {
    if ($(this).hasClass("left")) {
      if ($(this).hasClass("codeLeft")) {
        changeSlideshow("code", -1);
      } else if ($(this).hasClass("artLeft")) {
        changeSlideshow("art", -1);
      }
    }
    if ($(this).hasClass("right")) {
      if ($(this).hasClass("codeRight")) {
        changeSlideshow("code", 1);
      } else if ($(this).hasClass("artRight")) {
        changeSlideshow("art", 1);
      }
    }
  });

  // Bullets also control slideshows
  $(".bullet").click(function() {
    if ($(this).hasClass("code")) {
      changeBullet("code", $(this).index());
    }
    if ($(this).hasClass("art")) {
      changeBullet("art", $(this).index());
    }
  });  
});

var index;

// Generate number of bullets according to number of items in slideshow
function generateBullets(className) {
  for (i = 0; i < $("." + className + "Image").length; i++) {
    if (i === 0) {
      $("#" + className + "Bullets").append("<span class='" + className + " bullet current'></span>");
    } else {
      $("#" + className + "Bullets").append("<span class='" + className + " bullet'></span>");
    }
  }
}

// Slideshow functions
function changeSlideshow(className, increment) {
  slideshow(className, index += increment);
}

function changeBullet(className, slide) {
  slideshow(className, index = slide + 1);
}

function slideshow(className, slide) {
  if (slide < 1) {
    index = $("." + className + "Image").length;
  }
  if (slide > $("." + className + "Image").length) {
    index = 1;
  }
  for (j = 0; j < $("." + className + "Image").length; j++) {
    $("." + className + "Image").eq(j).hide();
    $("." + className + "Description").eq(j).hide();
    $("." + className + " .bullet").eq(j).removeClass("current");
  }
  $("." + className + "Image").eq(index-1).fadeIn(500);
  $("." + className + "Description").eq(index-1).fadeIn(500);
  $("." + className + " .bullet").eq(index-1).addClass("current");
}