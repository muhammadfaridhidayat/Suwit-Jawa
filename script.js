const info = document.querySelector('.info');
const img = document.querySelector('.img-komputer')

function pComp(){
    const comp = Math.random();
    if (comp < 0.34) {
        img.src = "img/gajah.png"
        return "gajah"
    } else if (comp >= 0.34 && comp <= 0.64){
        img.src = "img/orang.png"
        return "orang"
    } else {
        img.src = "img/semut.png"
        return "semut";
    }
};


function getHasil(comp, player){
    if (player == comp) return info.innerHTML = "Seri!"
    if (player == 'gajah') return (comp == 'orang') ? info.innerHTML = "Menang!": info.innerHTML = "Kalah!"
    if (player == 'orang') return (comp == 'semut') ? info.innerHTML = "Menang!": info.innerHTML = "Kalah!"
    if (player == 'semut') return (comp == 'gajah') ? info.innerHTML = "Menang!": info.innerHTML = "Kalah!"
}

function putar(){
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const mulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - mulai > 1000){
            clearInterval;
            return;
        }
        img.src = `img/${gambar[i++]}.png`;
        if(i == gambar.length) i = 0;
    },100)
}

let pemain = 0
let komputer = 0

const main = document.querySelectorAll('li img');
main.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilPlayer = pil.className
        putar()
        setTimeout(function(){
            const pilComp = pComp()
            const hasil = getHasil(pilComp, pilPlayer)
            if (info.innerHTML == "Menang!"){
                pemain += 1
            } else if (info.innerHTML == "Kalah!") {
                komputer += 1
            } 
            console.log(`Skor pemain : ${pemain}`)
            console.log(`Skor komputer : ${komputer}`)
        }, 1000)



    })
})







