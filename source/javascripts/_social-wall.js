$(document).ready(function($){
    $('#social-stream').dcSocialStream({
        feeds: {
            twitter: {
                id: '#FINDYOURSELF'
            },
            instagram: {
                id: '#FINDYOURSELF',
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
