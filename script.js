const kocok = ()=> {
    const gambar = document.getElementById('kumpulandadu');
    const button = document.querySelector('.klik');

    gambar.classList.add('rolling');
    button.disabled = true;

    let putar = 0
    const totalPutaran = 16

    function tick() {
        const die = Math.floor(Math.random()*6)+ 1;
        gambar.src = `dadu${die}.png`
        putar++;

        if(putar < totalPutaran){
            const delay = 60 + (putar*putar*1.5);
            setTimeout(tick,delay);
        }else{
            gambar.classList.remove('rolling');
            button.disabled = false;
        }
    }
    tick();
}