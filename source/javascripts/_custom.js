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

$('input').focus(function(){
  var query = $(this).next('label');
  query.addClass('active');
}).blur(function(){
  var query = $(this).next('label');
  query.removeClass('active');
});
