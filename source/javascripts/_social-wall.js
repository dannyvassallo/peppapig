$(document).ready(function($){
    $('#social-stream').dcSocialStream({
        feeds: {
            twitter: {
                id: '#BEFEARLESS, FEARLESSRECORDS'
            },
            instagram: {
                id: '#BEFEARLESS, FEARLESSRECORDS',
                accessToken: '9803372.c8bdcae.5ad7b6d157ba409b82b52b3eef6f4ae4',
                clientId: 'c8bdcae8e15f4c71a29ad59c7eab3fe7',
                comments: 3,
                likes: 10,
            }
        },
        rotate: {
            delay: 0
        },
        wall: true,
        order: 'random',
        iconPath: 'images/dcsns-dark/',
        imagePath: 'images/dcsns-dark/'
    });
});


// TWEAKS


function resizeStream(){
    var widthArray = [],
    largestChild,
    containerWidth = $('.container').width();
    $('.stream').children().each(function(){
        child = $(this).width() + $(this).position().left;
        widthArray.push(child);
        largestChild = Math.max.apply(Math, widthArray);
    });
    var widthDiff = containerWidth - largestChild,
    marginLeft = widthDiff/2;
    $('.stream').css('margin-left',marginLeft);
}

// document ready

$(function(){
    // setTimeout(function(){
    //     resizeStream();
    //     console.log('firedfromcustom');
    // }, 2000);
});

$(window).resize(function(){
    setTimeout(function(){
        resizeStream();
    }, 1000);
});
