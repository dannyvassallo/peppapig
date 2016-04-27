var currentDevice;
//Detection Script//
var iPadAgent = navigator.userAgent.match(/iPad/i) != null;
var iPodAgent = navigator.userAgent.match(/iPhone/i) != null;
var AndroidAgent = navigator.userAgent.match(/Android/i) != null;
var webOSAgent = navigator.userAgent.match(/webOS/i) != null;
//iOS//
if(iPadAgent || iPodAgent){
  currentDevice = "iDevice"
}
//Android//
else if(AndroidAgent){
  currentDevice = "Android"
}
//Other//
else{
  currentDevice = "Computer"
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
    var state = this.state;
    var city = this.city;
    var href = this.link;
    var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">-</p> <p class=\"venue\">"+city+"<span class=\"hide-on-small-only\">, "+state+"</span></p><div class=\"secondary-content\"><a target=\"_blank\" href=\""+href+"\" class=\"tix btn btn-small white\"><i class=\"fa fa-ticket cyan-text\"></i></a></div></li>";
    $('#tour-dates').append(dateConstructor);
  });
}

function addDatesToDropDown(data){
  var parsed = $.csv.toObjects(data);
  $(parsed).each(function(){
    var city = this.city;
    var state = this.state;
    $('#tour-dropdown').append($('<option>', {
      value: city+" , "+state,
      text : city+" , "+state
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


function resizeAlbumInfo(){
  $('.album-info').height($('.albummini').height());
  $('.album-info .valign-wrapper').height($('.albummini').height());
}

$(function(){
  resizeAlbumInfo();
  $('.albummini').on('load', function(){
    resizeAlbumInfo();
  });
});

$(window).resize(function(){
  resizeAlbumInfo();
});
