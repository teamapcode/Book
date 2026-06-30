// music.js
document.addEventListener('DOMContentLoaded', function() {
    // ایجاد دکمه
    const btn = document.createElement('button');
    btn.id = 'musicToggle';
    btn.innerHTML = '🔊';
    btn.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        padding: 15px 18px;
        background: #b8956a;
        color: #1a0f0a;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.8rem;
        z-index: 999;
        box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
    `;
    document.body.appendChild(btn);

    // ایجاد audio
    const audio = document.createElement('audio');
    audio.id = 'bgMusic';
    audio.loop = true;
    audio.innerHTML = `<source src="music.mp3" type="audio/mpeg">`;
    document.body.appendChild(audio);

    let isPlaying = false;

    btn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            btn.innerHTML = '🔇';
            isPlaying = false;
        } else {
            audio.play();
            btn.innerHTML = '🔊';
            isPlaying = true;
        }
    });

    // پخش خودکار با اولین کلیک کاربر
    document.addEventListener('click', function() {
        if (!isPlaying) {
            audio.play();
            btn.innerHTML = '🔊';
            isPlaying = true;
        }
    }, { once: true });
});