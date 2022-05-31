var snippetJqueryParse = function() {
    function colorTrace(msg, color, isBold = false) {
        var _sfx = isBold ? "font-weight:bold;" : '';
        console.log("%c" + msg, "color:" + color + ";" + _sfx);
    }

    // Поехали!

    colorTrace('Как спарсить информацию из браузера средствами jQuery?', 'green', true);
    colorTrace('1. Загружаем jQuery', 'green');

    var loadScript = function(url, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    };

    colorTrace('2. Парсим на jQuery', 'green');
    loadScript('https://code.jquery.com/jquery-1.7.0.min.js', function() {
        var sections = [];
        $('#section-7200 > div').each(function() {
            var text = $.trim($(this).find('a:eq(1)').text());
            if (text) {
                sections.push(text);
            }
        });
        colorTrace('3. Получаем результат', 'green');
        console.log(JSON.stringify(sections));
        colorTrace('Подробности на http://pushorigin.ru', '#4285F4', true);
    });
};

clear();
snippetJqueryParse();
console.log('hello')