$(document).ready(function() {
    "use strict"
    let run = document.querySelector('section')



    async function load_rip(e) {
        console.log('11111');
        const api = "https://russianwarship.rip/api/v1/statistics/latest"
        const api_url = await fetch(api, {
            method: 'GET',
        })
        const data = await api_url.json();
        if (api_url.ok) {
            get_data(data)
        } else {
            console.log('error');
        }
    }


    function get_data(data) {

        let dead = data.data.stats.personnel_units
        $('.counter').html(dead)
        let data_arr = [
            { img: 'img/icon/1.png', name: 'Танки ', number: data.data.stats.tanks },
            { img: 'img/icon/3.png', name: 'Артелерійські системи', number: data.data.stats.artillery_systems },
            { img: 'img/icon/4.png', name: 'Системи залпового вогню', number: data.data.stats.mlrs },
            { img: 'img/icon/5.png', name: 'Засоби ППО', number: data.data.stats.aa_warfare_systems },
            { img: 'img/icon/6.png', name: 'Літаки', number: data.data.stats.planes },
            { img: 'img/icon/7.png', name: 'Гелікоптери', number: data.data.stats.helicopters },
            { img: 'img/icon/12.png', name: 'БПЛА', number: data.data.stats.uav_systems },
            { img: 'img/icon/10.png', name: 'Крилаті ракети', number: data.data.stats.cruise_missiles },
            { img: 'img/icon/9.png', name: 'Кораблі (катери)', number: data.data.stats.warships_cutters },
            { img: 'img/icon/8.png', name: 'Автомобільна техніка і цистерни', number: data.data.stats.vehicles_fuel_tanks },
            { img: 'img/icon/11.png', name: 'Спецтехніка', number: data.data.stats.special_military_equip },
        ];

        let losses = ''
        $.each(data_arr, function(i, value) {
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

    }

    if (run) {
        load_rip()
    }






});