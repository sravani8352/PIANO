var keys=document.querySelectorAll(".keys");
keys.forEach(a =>{
   a.addEventListener('mouseover', ()=> playkey(a)) 
})

function playkey(a){
        const audios = document.getElementById(a.dataset.note);
        audios.currentTime = 0;
        audios.play()
}
