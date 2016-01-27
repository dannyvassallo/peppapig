// iterate through errors and growl them
function toasts(){
  setTimeout(function(){
    $('span.error').each(function(){
      if($(this).html() != ""){
        var errorText = $(this).text();
        Materialize.toast(errorText, 4000, 'red');
      }
    });
  }, 100);
}

// successMsg Constructor
var successMsg = "<div id=\"thankyou\" class=\"col-xs-12 cyan-text\"><h2 class=\"thanks\">Thank you for entering!</h2></div>";


$("#contest-form").validate({
  ignore: "",
  focusInvalid: false,
  rules: {
    // first name
    'entry.1658002111': {
      //checks for whitespace
      required: {
        depends:function(){
          $(this).val($.trim($(this).val()));
          return true;
        }
      },
      lettersonly: true,
      minlength: 2
    },
    // last name
    'entry.1256494619': {
      //checks for whitespace
      required: {
        depends:function(){
          $(this).val($.trim($(this).val()));
          return true;
        }
      },
      lettersonly: true,
      minlength: 2
    },
    // email
    'entry.1754389017': {
      //checks for whitespace
      required: {
        depends:function(){
          $(this).val($.trim($(this).val()));
          return true;
        }
      },
      email: true
    },
    'entry.1624692557': {
      required: true
    },
    'entry.1001572892': {
      required: true
    },
    'entry.1168099912':{
      required: true
    }
  },
  messages: {
    // first name
    'entry.1658002111': {
      required: "Please give your first name.",
      lettersonly: "Letters only in the name fields please.",
      minlength: jQuery.validator.format("At least {0} characters required!"),
    },
    // last name
    'entry.1256494619': {
      required: "Please give your last name.",
      lettersonly: "Letters only in the name fields please.",
      minlength: jQuery.validator.format("At least {0} characters required!"),
    },
    // email
    'entry.1754389017': {
      required: "Please give your e-mail address.",
      email: "Please give a valid e-mail address."
    },
    'entry.1624692557': {
      required: "Please agree to the rules."
    },
    'entry.1168099912':{
      required: "Please choose a tour date."
    },
    'entry.1001572892': {
      required: "You must share on FB to complete your entry."
    },
  },
  invalidHandler: function(form, validator) {
    toasts();
  },
  success: "valid",
  submitHandler: function(form) {
    formH = $('#contest-form').height();
    $('#contest-form').addClass('center-align');
    form.submit();
    Materialize.toast("Thanks for your entry!", 4000, 'green');
    setTimeout(function(){
      $('#contest-form').html(successMsg).css('min-height', formH);
    }, 500);
    setTimeout(function(){
      $.scrollTo('#thankyou', 1000, { offset: 0, 'axis': 'y' });
    }, 600);
  },
  errorElement : 'span',
  errorPlacement: function (error, element) {
    var elementId = element[0].id;
    if(elementId == 'fbshareinput' || elementId == 'tour-input'){
      error.insertAfter($('#'+elementId).next('.error-box'));
    } else {
      error.insertAfter($(element).parent().next('.error-box'));
    }
  }
});
