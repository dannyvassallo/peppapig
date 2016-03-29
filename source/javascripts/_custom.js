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
      // dateHandler(data);
      addDatesToDropDown(data);
    }
  });
});
// CONSTRUCT HTML DATE TABLE FROM PARSED TEXT FILE
// function dateHandler(data){
//   var parsed = $.csv.toObjects(data);
//   $(parsed).each(function(){
//     var tourDate = this.date;
//     var venue = this.venue;
//     var location = this.location;
//     var href = this.link;
//     var vip = this.vip;
//     if(vip == "sold out" && href =="sold out"){
//       var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">-</p> <p class=\"venue\">"+location+"<span class=\"hide-on-small-only\"> @ "+venue+"</span></p><div class=\"secondary-content\"><a disabled class=\"tix btn btn-small red white-text\"><i class=\"fa fa-ticket cyan-text\"></i> SOLD OUT</a><a class=\"tix btn btn-small red white-text\"><i class=\"fa fa-ticket white-text\"></i> VIP SOLD OUT</a></div></div></li>";
//     }else if(vip == "sold out"){
//       var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">-</p> <p class=\"venue\">"+location+"<span class=\"hide-on-small-only\"> @ "+venue+"</span></p><div class=\"secondary-content\"><a target=\"_blank\" href=\""+href+"\" class=\"tix btn btn-small white\"><i class=\"fa fa-ticket cyan-text\"></i></a><a class=\"tix btn btn-small red white-text\"><i class=\"fa fa-ticket white-text\"></i> VIP SOLD OUT</a></div></div></li>";
//     } else if(href == "sold out"){
//       var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">-</p> <p class=\"venue\">"+location+"<span class=\"hide-on-small-only\"> @ "+venue+"</span></p><div class=\"secondary-content\"><a class=\"tix btn btn-small red cyan-text\"><i class=\"fa fa-ticket cyan-text\"></i> SOLD OUT</a><a target=\"_blank\" href=\""+vip+"\" class=\"tix btn btn-small cyan darken-1 white-text\"><i class=\"fa fa-ticket white-text\"></i> VIP</a></div></div></li>";
//     } else {
//     var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">-</p> <p class=\"venue\">"+location+"<span class=\"hide-on-small-only\"> @ "+venue+"</span></p><div class=\"secondary-content\"><a target=\"_blank\" href=\""+href+"\" class=\"tix btn btn-small white\"><i class=\"fa fa-ticket cyan-text\"></i></a><a target=\"_blank\" href=\""+vip+"\" class=\"tix btn btn-small cyan darken-1 white-text\"><i class=\"fa fa-ticket white-text\"></i> VIP</a></div></div></li>";
//     }
//     $('#tour-dates').append(dateConstructor);
//   });
// }

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
