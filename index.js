window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#60d394',
        '#d36060',
        '#c06cd3',
        '#d3d160',
        '#6860d3',
        '#60b2d3'
    ]

    // Lets get going width the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0; // click 할 때마다 media의 play 위치 reset
            sounds[index].play();
            createBubbles(index);
        });
    })

    // create function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    }
});

