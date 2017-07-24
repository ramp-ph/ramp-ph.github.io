$(document).ready(function() {
  // disables carousel pause on mouse hover ~~
  $('.carousel').carousel({
      pause: "false",
      interval: 2000
  });

  // start toggle cart-window ~~
  $('.cart').click(function() {
    $('.cart-window').css({
      'right': '0'
    });
    $('.btn-danger').css({
      'opacity': '1'
    });
  });
  // closes cart-window
  $('.btn-danger').click(function() {
    $('.cart-window').css({
      'right': '-100%'
    });
    $('.btn-danger').css({
      'opacity': '0'
    });
  });

  // add item to cart ~~
  $('.cart-add').click(function(){
    $(this).parent().parent().clone().prependTo('.order-list').innerHTML;

    $('.addItem-notif').css({
      'opacity': '1',
      'top': '10%'
    });
    setTimeout(function() {
      $('.addItem-notif').css({
        'opacity': '0',
        'top': '0'
      });
    } ,2000);
  });

  // start clear cart button ~~
  $('.cart-clear').click(function() {
    $('.order-list div').remove();
  });

  // start cart-remove button ~~
  // in order to remove dynamically created items, use .on('click,' ~~~)
  $(document).on('click', '.cart-remove', function() {
   $(this).parent().parent().remove();
 });

  // start copy to clipboard button ~~~~~
    $('.cart-copy').click(function() {
      //notif bar display ~~
      $('.copy-notif').css({
        'opacity': '1',
        'left': '50%',
        'transform': 'translateX(-50%)'
      });
      setTimeout(function() {
        $('.copy-notif').css({
          'opacity': '0',
          'left': '200%'
        });
      } ,4000);

      //text select ~~
      if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.querySelector('.cust-info'));

        range.select().createTextRange();
        document.execCommand("Copy");
      }
      else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.querySelector('.cust-info'));

        //removes clipboard size limit
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("Copy");
      }
    }); // end copy order ~~

    // start item counter buttons ~~
    // item counter minus
  $('.item-counter .item-minus').click(function(){
    var itemCount = parseInt($(this).siblings('h3').html());
    var itemPrice = parseInt($(this).parent().siblings('.static-price').html());

    if(itemCount <= 1) {
      itemCount = 1;
    }
    else{
      itemCount--;
    }
    $(this).siblings('h3').html(itemCount + " pc(s).");

    // updates item-price
    $(this).parent().siblings('h2').html('P' + itemCount * itemPrice);

  });

  // item counter plus
  $('.item-counter .item-plus').click(function(){
    var itemCount = parseInt($(this).siblings('h3').html());
    var staticPrice = $(this).parent().siblings('.static-price').html();
    var regEx = /\d+/g; // finds numbers from a string
    var itemPrice = staticPrice.match(regEx).join("."); // returns numbers from a string

    itemCount += 1;
    $(this).siblings('h3').html(itemCount + " pc(s).");
    // updates item-price
    $(this).parent().siblings('h2').html('P' + itemCount * itemPrice);

  });

  // start navbar - custom style // scroll trigger ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.collections').offset().top - ($(window).height() / 1.4)) {
      $('.nav-bar').addClass('nav-custom');
      $('.collections div').each(function(i) {
        setTimeout(function() {
          $('.collections div').eq(i).addClass('is-visible');
        }, 150 * (i+1));
      });
    }
    else{
      $('.nav-bar').removeClass('nav-custom');
      $('.collections div').each(function(i) {
        setTimeout(function() {
          $('.collections div').eq(i).removeClass('is-visible');
        }, 150 * (i+1));
      });
    }

    // start new-arrivals scroll triggered anim ~~~
    if(wScroll >= $('.new-arrivals').offset().top - ($(window).height() / 1.1)) {
      $('.new-arrivals div').each(function(i) {
        setTimeout(function() {
          $('.new-arrivals div').eq(i).addClass('is-visible');
        }, 150 * (i+1));
      });
    }
    else{
      $('.new-arrivals div').each(function(i) {
        setTimeout(function() {
          $('.new-arrivals div').eq(i).removeClass('is-visible');
        }, 150 * (i+1));
      });
    }

    // start trending-now scroll triggered anim ~~~
    if(wScroll >= $('.trending-now').offset().top - ($(window).height() / 1.1)) {
      $('.trending-now div').each(function(i) {
        setTimeout(function() {
          $('.trending-now div').eq(i).addClass('is-visible');
        }, 150 * (i+1));
      });
    }
    else{
      $('.trending-now div').each(function(i) {
        setTimeout(function() {
          $('.trending-now div').eq(i).removeClass('is-visible');
        }, 150 * (i+1));
      });
    }
  }); // end wScroll trigger ~~~

    // start how to order button ~~~~~~~~~~~~~~~~~~~~
    $('.order-button').click(function() {
      $('.order').css({
        'right': '2%'
      });
      $('.order .fa-times').css({
        'display': 'block'
      })
    });

    $('.order .fa-times').click(function() {
      $(this).css({
        'display': 'none'
      })
      $('.order').css({
        'right': '-100%'
      });
    });

}); // end document ready ~~
