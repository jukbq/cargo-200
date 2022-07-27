$(document).ready(function() {
    "use strict"

    let lossesArr = [
        { img: 'img/icon/1.png', name: 'Танки ', number: 1738 },
        { img: 'img/icon/2.png', name: 'Бронемашини', number: 3971 },
        { img: 'img/icon/3.png', name: 'Артелерійські системи', number: 883 },
        { img: 'img/icon/4.png', name: 'Системи залпового вогню', number: 258 },
        { img: 'img/icon/5.png', name: 'Засоби ППО', number: 117 },
        { img: 'img/icon/6.png', name: 'Літаки', number: 222 },
        { img: 'img/icon/7.png', name: 'Гелікоптери', number: 190 },
        { img: 'img/icon/8.png', name: 'Автомобільна техніка і цистерни', number: 2847 },
        { img: 'img/icon/9.png', name: 'Кораблі (катери)', number: 15 },
        { img: 'img/icon/10.png', name: 'Крилаті ракети', number: 174 },
        { img: 'img/icon/12.png', name: 'БПЛА', number: 726 },
        { img: 'img/icon/11.png', name: 'Спецтехніка', number: 73 },
    ];



    let losses = ''
    $.each(lossesArr, function(i, value) {
        losses += '<div class="block">'
        losses += '<p class="name">' + value['name'] + '</p>'
        losses += '<div class="icon">'
        losses += '<img src="../' + value['img'] + '" alt="">'
        losses += '</div>'
        losses += '<div class="title">'
        losses += '<p><span class="counter">' + value['number'] + '</span></p>'
        losses += '</div>'
        losses += '</div>'

    });

    $('.cradh').html(losses)

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
    $('.counter').addClass('animated fadeInDownBig');
    $('h3').addClass('animated fadeIn');

    let url = 'https://zaxid.net/vtrati_rosiyan_u_viyni_proti_ukrayini_n1537635'



});