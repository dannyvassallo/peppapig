var currentDevice;
//Detection Script//
var iPadAgent = navigator.userAgent.match(/iPad/i) != null;
var iPodAgent = navigator.userAgent.match(/iPhone/i) != null;
var AndroidAgent = navigator.userAgent.match(/Android/i) != null;
var webOSAgent = navigator.userAgent.match(/webOS/i) != null;
//iOS//
if(iPadAgent || iPodAgent){
  currentDevice = "iDevice";
}
//Android//
else if(AndroidAgent){
  currentDevice = "Android";
}
//Other//
else{
  currentDevice = "Computer";
}

$(function(){
  if(currentDevice == "iDevice" || currentDevice == "Android"){
    $('#fbshareinput').prop('checked', true);
  }
});

// GET DATES FROM TEXT FILE
$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "dates.txt",
    dataType: "text",
    success: function(data){
      dateHandler(data);
      addDatesToDropDown(data);
    }
  });
});

// CONSTRUCT HTML DATE TABLE FROM PARSED TEXT FILE
function dateHandler(data){
  var parsed = $.csv.toObjects(data);
  $(parsed).each(function(){
    var tourDate = this.date;
    var city = this.city;
    var time = this.time;
    var venue = this.venue;
    var href = this.link;
    var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">- </p><p class=\"venue hide-on-med-and-down\">"+venue+" in </p><p class=\"city\">"+city+"</p><p class=\"time\"> @ "+time+"</p><div class=\"secondary-content\"><a target=\"_blank\" href=\""+href+"\" class=\"tix btn btn-small white\"><i class=\"fa fa-ticket cyan-text\"></i></a></div></li>";
    $('#tour-dates').append(dateConstructor);
  });
}

function addDatesToDropDown(data){
  var parsed = $.csv.toObjects(data);
  $(parsed).each(function(){
    var city = this.city;
    var time = this.time;
    $('#tour-dropdown').append($('<option>', {
      value: city+" @ "+time,
      text : city+" @ "+time
    }));
    $('select').material_select();
    $('.dropdown-content li').on('click', function(){
      $('#tour-input').val($('.select-dropdown').val());
      $('#tour-input').next('.error-box').next('span').html('');
    });
  });
}

// Fix inputs
$('input').focus(function(){
  if(this.type != 'checkbox'){
    var query = this.id;
    $("label[for='"+query+"']").addClass('active');
  }
}).blur(function(){
  if($(this).val() != ''){
    // do nothing
  } else if(this.type != 'checkbox'){
    var query = this.id;
    $("label[for='"+query+"']").removeClass('active');
  } else {
    var query = this.id;
    $("label[for='"+query+"']").removeClass('active');
  }
});

$(function(){
  $(document).on('click', '.caret', function(){
    $('.select-dropdown').trigger('click');
  });

  var onMouseDown = function(e) {
    // preventing the default still allows the scroll, but blocks the blur.
    // We're inside the scrollbar if the clientX is >= the clientWidth.
    if (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) {
      e.preventDefault();
    }
  };
  //$newSelect.on('mousedown', onMouseDown);
  $('select').siblings('input.select-dropdown').on('mousedown', onMouseDown);

});


// preloader

// makes sure the whole site is loaded
jQuery(window).load(function() {
    jQuery("#preloader").delay(2000).fadeOut("slow");
});


// scroller
function scrollerClick(targetEl, locationEl){
  $(targetEl).on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(locationEl).offset().top
    }, 1000);
    $('.button-collapse').sideNav('hide');
  });
}


$(function(){
  scrollerClick(".contest-scroller", "#contest-form");
  scrollerClick('.tour-scroller','#tour-dates');
});
