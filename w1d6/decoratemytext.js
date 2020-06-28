window.onload = function() 
{
    alert("Hello World!")
    // document.getElementById("texts").style.fontSize = "2em"

    var textAreas = document.getElementById("texts")
    var checkBox = document.getElementById("bling")
    var bigDecBtn = document.getElementById("bigDec")
    var malkovBtn = document.getElementById("malkovitch")
    var latinoBtn = document.getElementById("latin")


    checkBox.onchange = function () {
        if (checkBox.checked == true) {
            textAreas.style.fontWeight = 'bold';
            textAreas.style.color = 'green';
            textAreas.style.textDecoration = 'underline';
            document.getElementById('body').style.backgroundImage = "url('https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        }
        else {
            textAreas.style.fontWeight = 'normal';
            textAreas.style.color = 'black';
            textAreas.style.textDecoration = 'none';
            document.getElementById('body').style.backgroundImage = 'none';
        }
    }

    textAreas.style.fontSize = '12pt';

    var increaseFontSize = function () {
        let currentSize = parseInt(textAreas.style.fontSize);
        currentSize += 2;
        textAreas.style.fontSize = currentSize + 'pt';
    }

    bigDecBtn.onclick = function () {
        setInterval(increaseFontSize, 500);
    }

    latinoBtn.onclick = function () {
        let words = textAreas.value.split(' ');
        let newWords = '';
        words.forEach(function (element) {
            if (isVowel(element.charAt(0))) {
                element = element + 'ay'
                newWords += element + ' ';
            }
            else {
                element = element.substr(1, element.lenght) + element.charAt(0) + 'ay'
                newWords += element + ' ';
            }
        });
        textAreas.value = newWords;
    }

    malkovBtn.onclick = function () {
        let words = textAreas.value.split(' ');
        let newWords = ''
        words.forEach(element => {
            if (element.length >= 5)
                element = 'Malkovich';

            newWords += element + ' ';
        });
        textAreas.value = newWords;
    }

    function isVowel(x) {
        let result;
        result = x.toLowerCase() == "a" || x.toLowerCase() == "e" || x.toLowerCase() == "i" || x.toLowerCase() == "o" || x.toLowerCase() == "u";
        return result;
    }
}