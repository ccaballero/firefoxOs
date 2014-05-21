window.onload=function(){
    console.log('ready')
    player=document.getElementById('player')
    document.getElementById('previous').onclick=function(){
        console.log('previous')
        player.play()
    }
    document.getElementById('play').onclick=function(){
        console.log('play')
        player.play()
    }
    document.getElementById('pause').onclick=function(){
        console.log('pause')
        player.pause()
    }
}

