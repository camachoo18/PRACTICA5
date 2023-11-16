function randomEmoji(){
    const emojis = ["🐺","🐈","😎","🤠","👻"]
    //Generar un numero aleatorio entre 0 y la longitud del array emojis

    const randomNumber = Math.floor(Math.random()*emojis.length) //0.0-20.0
    const emoji_aleatorio = emojis[randomNumber]
    document.querySelector("#emoji").innerHTML = emoji_aleatorio
    
}