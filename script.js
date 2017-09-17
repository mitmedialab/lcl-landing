$(document).ready(function() {

  var supported_lang = ['en','it','ja', 'es', 'pt', 'he'];

  var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
                  navigator.language ||   // All browsers
                  navigator.userLanguage; // IE <= 10
                
  // update MailChimp's browser language field
  if (language) {
    $('#mc-embedded-subscribe-form').attr('action', function(i, val){
      return val + '&BLANG=' + language;
    });
  }

  // default to english
  if (!language || supported_lang.indexOf(language.substr(0,2)) == -1){
    language = 'en';
  }

  // update iframe src
  $('#video-iframe').attr('src', function(i, val){
    return val + '&hl=' + language;
  });
});