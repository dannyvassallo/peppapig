function checkBrowser(){
    c=navigator.userAgent.search("Chrome");
    f=navigator.userAgent.search("Firefox");
    m8=navigator.userAgent.search("MSIE 8.0");
    m9=navigator.userAgent.search("MSIE 9.0");
    m9=navigator.userAgent.search("MSIE 9.0");
    if (c>-1){
        brwsr = "Chrome";
    }
    else if(f>-1){
        brwsr = "Firefox";
        $('.shadowed').removeClass('shadowed');
        $('#top-headline').addClass('firefox-header');
        $('h1, h2, h3, h4 ,h5, h6').css('text-shadow','1px 1px 0px rgba(0, 0, 0, 0.3)');
    }else if (m9>-1){
        brwsr ="MSIE 9.0";
    }else if (m8>-1){
        brwsr ="MSIE 8.0";
    }
    // return brwsr;
}

$(function(){
  checkBrowser();
});
