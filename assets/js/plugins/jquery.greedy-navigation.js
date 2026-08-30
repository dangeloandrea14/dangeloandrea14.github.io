/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

/* The site title is allowed to wrap on narrow screens, so the link row can
   report a width that fits while a link is really being squeezed out -- the
   title just takes a second line instead. Measure with wrapping suppressed so
   overflow is judged on the row's natural, single-line width. */
function visibleLinksWidth() {
  $vlinks.addClass("measuring");
  var width = $vlinks.width();
  $vlinks.removeClass("measuring");
  return width;
}

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if (visibleLinksWidth() > availableSpace) {

    while (visibleLinksWidth() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push(visibleLinksWidth());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // update masthead height and the body top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  // the sticky sidebar offsets itself off this, so it never slides under the
  // masthead when the nav wraps onto a second line
  document.documentElement.style.setProperty('--masthead-height', mastheadHeight + 'px');

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();