var wow_button= document.getElementById("wow")
var wow_sound= document.getElementById("wow-sound")
wow_button.addEventListener('click',function(){
    console.log('it was clicked')
    wow_sound.play()
})