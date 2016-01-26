// GET DATES FROM TEXT FILE
$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "dates.txt",
    dataType: "text",
    success: function(data){
      dateHandler(data);
    }
  });
});
// CONSTRUCT HTML DATE TABLE FROM PARSED TEXT FILE
function dateHandler(data){
  var parsed = $.csv.toObjects(data);
  $(parsed).each(function(){
    var tourDate = this.date;
    var venue = this.venue;
    var href = this.link;
    var dateConstructor = "<li class=\"collection-item cyan white-text ticket-links\"><div><p class=\"date\">"+tourDate+"</p> <p class=\"date-divider\">-</p> <p class=\"venue\">"+venue+"</p><a target=\"_blank\" href=\""+href+"\" class=\"secondary-content btn btn-small white\"><i class=\"fa fa-ticket cyan-text\"></i></a></div></li>";
    $('#tour-dates').append(dateConstructor);
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
  },1500);
});

// scrollfire

var options = [
  {selector: '#contest-form', offset: 100, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
];
Materialize.scrollFire(options);
