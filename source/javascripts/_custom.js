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
    var venue = this.venue;
    var location = this.location;
    var href = this.link;
    var vip = this.vip;
    if(vip == "sold out" && href =="sold out"){
      var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">-</p> <p class=\"venue\">"+location+"<span class=\"hide-on-small-only\"> @ "+venue+"</span></p><div class=\"secondary-content\"><a disabled class=\"tix btn btn-small white cyan-text\"><i class=\"fa fa-ticket cyan-text\"></i> SOLD OUT</a><a class=\"tix btn btn-small cyan darken-1 white-text\"><i class=\"fa fa-ticket white-text\"></i> SOLD OUT</a></div></div></li>";
    }else if(vip == "sold out"){
      var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">-</p> <p class=\"venue\">"+location+"<span class=\"hide-on-small-only\"> @ "+venue+"</span></p><div class=\"secondary-content\"><a target=\"_blank\" href=\""+href+"\" class=\"tix btn btn-small white\"><i class=\"fa fa-ticket cyan-text\"></i></a><a class=\"tix btn btn-small cyan darken-1 white-text\"><i class=\"fa fa-ticket white-text\"></i> SOLD OUT</a></div></div></li>";
    } else if(href == "sold out"){
      var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">-</p> <p class=\"venue\">"+location+"<span class=\"hide-on-small-only\"> @ "+venue+"</span></p><div class=\"secondary-content\"><a class=\"tix btn btn-small white cyan-text\"><i class=\"fa fa-ticket cyan-text\"></i> SOLD OUT</a><a target=\"_blank\" href=\""+vip+"\" class=\"tix btn btn-small cyan darken-1 white-text\"><i class=\"fa fa-ticket white-text\"></i> VIP</a></div></div></li>";
    } else {
    var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">-</p> <p class=\"venue\">"+location+"<span class=\"hide-on-small-only\"> @ "+venue+"</span></p><div class=\"secondary-content\"><a target=\"_blank\" href=\""+href+"\" class=\"tix btn btn-small white\"><i class=\"fa fa-ticket cyan-text\"></i></a><a target=\"_blank\" href=\""+vip+"\" class=\"tix btn btn-small cyan darken-1 white-text\"><i class=\"fa fa-ticket white-text\"></i> VIP</a></div></div></li>";
    }
    $('#tour-dates').append(dateConstructor);
  });
}

function addDatesToDropDown(data){
  var parsed = $.csv.toObjects(data);
  $(parsed).each(function(){
    var venue = this.venue;
    var location = this.location;
    $('#tour-dropdown').append($('<option>', {
      value: location+" @ "+venue,
      text : location+" @ "+venue
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


// animation

$(function(){
  setTimeout(function(){
    $('.header-img').css('visibility','visible').hide().fadeIn(1000);
  }, 1000);
  setTimeout(function(){
    $('.support-img-left').css('visibility','visible').addClass('slideRight');
    $('.support-img-right').css('visibility','visible').addClass('slideLeft');
    $('.enter').css('visibility','visible').addClass('slideRight');
    $('.near').css('visibility','visible').addClass('slideLeft');
  }, 1500);
  setTimeout(function(){
    prize2Show();
  }, 2000);
});

// scrollfire
function contestShow(){
  $('#contest-form').css('visibility', 'visible').addClass('slideRight');
  $('.prize').css('visibility', 'visible').addClass('slideLeft');
}

function datesShow(){
  $('#tour-dates').css('visibility', 'visible').addClass('slideUp');
}

function prize2Show(){
  $('.prize2').css('visibility', 'visible').hide().fadeIn();
}


var options = [
  {selector: '#contest-form', offset: 400, callback: 'contestShow();'},
  {selector: '#tour-dates', offset: 400, callback: 'datesShow();'}
];
Materialize.scrollFire(options);
