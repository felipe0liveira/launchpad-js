(() => {
    const pads = document.querySelectorAll('.launchpad .pad');
    const songs = document.querySelectorAll('.launchpad .pad audio');
    const keyMap = { 113: 0, 119: 1, 101: 2, 114: 3, 116: 4 };

    const playSong = (index) => {
        songs[index].currentTime = 0;
        songs[index].play();
    }

    pads.forEach((pad, index) => {
        pad.addEventListener('touchstart', (e) => {
            playSong(index);
        });
    });

    document.onkeypress = function (e) {
        e = e || window.event;
        playSong(keyMap[e.keyCode]);
    };
})();