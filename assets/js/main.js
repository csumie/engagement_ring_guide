$(function() {
    $('.top-ham-menu').on('click', function (e) {
        e.preventDefault();
        $('.top-ham-menu-links').slideToggle();
    });
    $('.aux-menu-icon-closed').on('click', function (e) {
        e.preventDefault();
        $('.aux-menu-links').slideDown();
        $(e.currentTarget).hide();
        $('.aux-menu-icon-opened').show();
    });
    $('.aux-menu-icon-opened').on('click', function (e) {
        e.preventDefault();
        $('.aux-menu-links').slideUp();
        $(e.currentTarget).hide();
        $('.aux-menu-icon-closed').show();
    });

    var target = $('.secondary-nav')
    target.after('<div class="affix" id="affix"></div>')

    var affix = $('.affix')
    affix.append(target.clone(true))

// Show affix on scroll.
    var element = document.getElementById('affix')
    if (element !== null) {
        var position = target.position()
        window.addEventListener('scroll', function () {
            var height = $(window).scrollTop()
            if (height > position.top) {
                target.css('visibility', 'hidden')
                affix.css('display', 'block')
            } else {
                affix.css('display', 'none')
                target.css('visibility', 'visible')
            }
        })
    }
});




$(function () {
  $('.top-ham-menu').on('click', function (e) {
    e.preventDefault();
    $('.top-ham-menu-links').slideToggle();
  });
  $('.aux-menu-icon-closed').on('click', function (e) {
    e.preventDefault();
    $('.aux-menu-links').slideDown();
    $(e.currentTarget).hide();
    $('.aux-menu-icon-opened').show();
  });
  $('.aux-menu-icon-opened').on('click', function (e) {
    e.preventDefault();
    $('.aux-menu-links').slideUp();
    $(e.currentTarget).hide();
    $('.aux-menu-icon-closed').show();
  });
});
