
(function () {
    var AnimationScreen;
    var animationInterval;

    var animationSelected;
    var animationFrames;

    var speed = 250;

    window.onload = onload;


    function onload() {
        var btnStart = document.getElementById('btnStart');
        var btnStop = document.getElementById('btnStop');
        var animations = document.getElementById('animations');
        var sizes = document.getElementById('sizes');
        var chkTurbo = document.getElementById('chkTurbo');

        animationScreen = document.getElementById('animationScreen');

        //Events
        btnStart.onclick = play;
        btnStop.onclick = stop;
        animations.onchange = animationChange;
        sizes.onchange = sizeChange;
        chkTurbo.onchange = turboChange;
    }
    //Play button
    function play() {
        btnStart.disabled = true;
        btnStop.disabled = false;
        document.getElementById('animations').disabled = true;
        animationInterval = setInterval(function(){
            animationPlayer(animationFrames)
        },speed);
    }
    //Stop button
    function stop() {
        btnStart.disabled = false;
        btnStop.disabled = true;
        document.getElementById('animations').disabled = false;
        clearInterval(animationInterval);
    }
    //Animation selection
    function animationChange(){
        animationScreen.value = ANIMATIONS[this.value];
        animationSelected = ANIMATIONS[this.value];
        animationFrames = animationSelected.split("=====\n");
    }
    //Size selection
    function sizeChange(){
        let sizez = [];
        sizez['Tiny'] = '7pt';
        sizez['Small'] = '10pt';
        sizez['Medium'] = '12pt';
        sizez['Large'] = '16pt';
        sizez['Extra Large'] = '24pt';
        sizez['XXL'] = '32pt';
        animationScreen.style.fontSize = sizez[this.value];
    }
    //Turbo
    function turboChange(){
        speed = this.checked ? 50 : 250;
        clearInterval(animationInterval)
        animationInterval = setInterval(function(){
            animationPlayer(animationSelected)
        },speed)
    }
    function animationPlayer(frames){
        var currentFrame = frames.shift();
        animationScreen.value = currentFrame;
        frames.push(currentFrame);
        animationSelected = frames;
    }

})();