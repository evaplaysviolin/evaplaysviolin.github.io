"use strict";

$(document).ready(function() {

  // Hide splash until needs to be shown
  $("#splash").addClass("display-none");
  // Check cookie and show splash
  if (!document.cookie) {
    document.cookie = "splash=true; max-age=60*60*24";
    $("#splash").removeClass("display-none");
  }
  // Click to enter
  $("#splash").click(() => {
    $("#splash").fadeOut(500);
  });

  // Arrays storing names and types of pages
  const pages = ["code", "art"];
  const overlays = ["certificates", "skills", "about-me"];
  const path = window.location.pathname.slice(1);

  // Load appropriate page or overlay when navigating to specific URL
  redirect(path, "home");

  function redirect(path, defaultPath) {
    historyReplaceState(path);
    if (pages.includes(path)) {
      loadPage(path);
      return;
    }
    if (overlays.includes(path)) {
      directToOverlay(path);
      return;
    }
    switch(path) {
      case "about-work":
        directToOverlay(path, "work history");
        break;
      case "profiles":
        directToOverlay(path, "find me elsewhere");
        break;
      default:
        loadPage(defaultPath);
        break;
    }
  }

  function historyReplaceState(state) {
    history.replaceState(state, "", state);
  }

  // Load content if navigating directly to an overlay
  function directToOverlay(overlayName, headerText) {
    $("#main").addClass("display-none");
    loadPage("home");
    $(".overlay-header").html(headerText || overlayName);
    loadOverlay(overlayName);
  }

  // Handles history changes for forward/back navigation
  // Note: Navigating through overlay history doubles up on "home" pages between each overlay
  window.addEventListener("popstate", function(event) {
    if ($(".overlay-container").is(":visible")) {
      $("#main").removeClass("display-none");
      $(".overlay-container").addClass("display-none");
      $("#transition").removeClass("overlay-open");
      //history.pushState(pushPage, "", pushPage);
      historyPushState(pushPage);
    } else { 
      $(".overlay-container").removeClass("display-none");
      redirect(event.state, event.state);
    }
  });

  // Handles navigation back to menu from code/art pages
  $("#header-link").click(() => {
    loadPage("home");
    historyPushState("home");
  });

});

$(document).ajaxComplete(function(event, xhr, options) {
  
  // Hide "main" content, load according to URL
  // Restrict from overlays, otherwise menu is hidden
  if (options.url === "home.txt" || options.url === "code.txt" || options.url === "art.txt") {
    $("#home, #code, #art").hide();
  }

  switch(options.url) {
    // Home page
    case "home.txt":
      $(".overlay-container").addClass("display-none");
      $("#header-link").hide();
      $("#home").fadeIn(500);
      // Menu label color change on hover
      $(".border-circles").hover(
        function() {
         if (window.matchMedia("(pointer: fine)").matches) {
            $(this).parent().next().css("color", "#deedef");
          }
        }, function() {
         if (window.matchMedia("(pointer: fine").matches) {
            $(this).parent().next().css("color", "#193b41");
          }
        }
      )
      // Handle menu item clicks
      $(".border-circles").click(function(e) {
        // Clicks that will go to a "new" "page"
        if ($(this).hasClass("code-gallery")) {
          loadPage("code");
          // Update for history
          //history.pushState(pushPage, "", pushPage);
          historyPushState(pushPage);
        } else if ($(this).hasClass("art-gallery")) {
          loadPage("art");
          //history.pushState(pushPage, "", pushPage);
          historyPushState(pushPage);
        } 
        // Clicks that go to an overlay "page"
          else if ($(this).hasClass("overlay-action")) {
          // Get mouse position on x-axis for opening/closing
          let mouseX = e.pageX;
          handleOverlayAnimations(mouseX);
          // Get overlay name by class
          let overlayType = $(this).attr("class").split(" ")[2];
          switch(overlayType) {
            case "about-work":
              menuToOverlay(overlayType, "work history");
              break;
            case "profiles":
              menuToOverlay(overlayType, "find me elsewhere");
              break;
            default:
              menuToOverlay(overlayType);
              break;
          }
        }
      });
      break;
    // Code page
    case "code.txt":
      slideshowPageSetup("code");
      break;
    // Art page
    case "art.txt":
      slideshowPageSetup("art");
      break;
    // Overlay pages
    default:
      $(".overlay-container").removeClass("display-none");
      break;
  }

  // Closes overlay pages
  $(".close-button").off().click(function() {
    $("#main").removeClass("display-none");
    $(".overlay-container").addClass("display-none");
    $("#transition").addClass("overlay-close");
    //history.pushState(pushPage, "", pushPage);
    historyPushState(pushPage);
  });

  // Handles animation actions for overlays
  function handleOverlayAnimations(mouseX) {
    $("#transition").removeClass("overlay-close");
    $("#transition").css({ "top": 0, "left": mouseX});
    $("#transition").addClass("overlay-open");
    $("#transition").off().on("animationend", function(e) {
      if (e.originalEvent.animationName === "open") {
        $("#main").addClass("display-none");
        $(".overlay-container").fadeIn(500);
        $(".overlay-container").removeClass("display-none");        
        //history.pushState(pushOverlay, "", pushOverlay);
        historyPushState(pushOverlay);
      } else if (e.originalEvent.animationName === "close") {
        $("#transition").removeClass("overlay-open");
      }
    });
  }

  // Load overlay when navigating from main menu
  function menuToOverlay(overlayType, headerText) {
    $(".overlay-header").html(headerText || overlayType);
    loadOverlay(overlayType);
  }
  
  // For loading code and art pages
  function slideshowPageSetup(pageName) {
    $(".overlay-container").addClass("display-none");
    index = 1;
    $("." + pageName + "-image", "." + pageName + "-description").hide();
    slideshow(pageName, index);
    generateBullets(pageName);
    $("#" + pageName).fadeIn(500);
    $("#header-link").fadeIn(500);
  }

  // Left and right "buttons" control slideshows
  $(".left").click(function() {
    if ($(this).hasClass("code-left")) {
      changeSlideshow("code", -1);
    } else if ($(this).hasClass("art-left")) {
      changeSlideshow("art", -1);
    }
  });
  $(".right").click(function() {
    if ($(this).hasClass("code-right")) {
      changeSlideshow("code", 1);
    } else if ($(this).hasClass("art-right")) {
      changeSlideshow("art", 1);
    }
  });

  // Bullets/page indicators also control slideshows
  $(".bullet").click(function() {
    if ($(this).hasClass("code")) {
      changeBullet("code", $(this).index());
    }
    if ($(this).hasClass("art")) {
      changeBullet("art", $(this).index());
    }
  });

  // Handles expanding content for about-work and code/art pages
  $(".show-controls").click(function() {
    if ($(this).hasClass("code") || $(this).hasClass("art")) {
      $(".content-galleries").toggleClass("add-margin");
    }
    $(this).children().toggle();
    $(this).next().slideToggle(300);
  });

});

function historyPushState(state) {
  history.pushState(state, "", state);
}

// Stores "name" of page to load (ex: "home")
let pushPage, pushOverlay;

// Load page content according to pushPage
function loadPage(page) {
  $("#container").load(page + ".txt");
  pushPage = page;
}

// Load overlay content according to pushOverlay
function loadOverlay(overlay) {
  $(".overlay-content").load(overlay + ".txt");
  pushOverlay = overlay;
}

// Stores place in slideshow(s)
let index;

// Generate number of bullets according to number of items in slideshow
function generateBullets(pageName) {
  for (let i = 0; i < $("." + pageName + "-slide").length; i++) {
    if (i === 0) {
      $("#" + pageName + "-bullets").append("<span class='" + pageName + " bullet current'></span>");
    } else {
      $("#" + pageName + "-bullets").append("<span class='" + pageName + " bullet'></span>");
    }
  }
}

// Slideshow functions
function changeSlideshow(pageName, increment) {
  slideshow(pageName, index += increment);
}

function changeBullet(pageName, slide) {
  slideshow(pageName, index = slide + 1);
}

function slideshow(pageName, slide) {
  if (slide < 1) {
    index = $("." + pageName + "-slide").length;
  }
  if (slide > $("." + pageName + "-slide").length) {
    index = 1;
  }
  for (let j = 0; j < $("." + pageName + "-slide").length; j++) {
    $("." + pageName + "-title").eq(j).hide();
    $("." + pageName + "-slide").eq(j).hide();
    $("." + pageName + "-description").eq(j).hide();
    $("." + pageName + " .bullet").eq(j).removeClass("current");
  }
  $("." + pageName + "-title").eq(index-1).fadeIn(500);
  $("." + pageName + "-slide").eq(index-1).fadeIn(500);
  $("." + pageName + "-description").eq(index-1).fadeIn(500);
  $("." + pageName + " .bullet").eq(index-1).addClass("current");
}